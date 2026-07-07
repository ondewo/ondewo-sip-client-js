// Copyright 2021-2026 ONDEWO GmbH
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

// D18 headless-SDK auth helper (keycloak-migration-plan §7.8 + D18).
//
// One-time ROPC login (grant_type=password, scope=offline_access) against the PUBLIC SDK client
// `ondewo-sip-cai-sdk-public` (no client_secret -- Q1), then a bounded background loop that refreshes
// the short-lived access token from the offline refresh token before it expires. The current access
// token is exposed for an `Authorization: Bearer <token>` gRPC metadata header. The refresh loop stops
// after `tokenExpirationInS` (if given) has elapsed since login.

'use strict';

/**
 * Seconds of head-room subtracted from a token's `expires_in` so the refresh fires before the access
 * token actually lapses (covers clock skew + the round-trip to Keycloak).
 *
 * @type {number}
 */
const REFRESH_SKEW_IN_S = 30;

/**
 * Lower bound for the scheduled refresh delay so a tiny/zero `expires_in` cannot spin a hot loop.
 *
 * @type {number}
 */
const MIN_REFRESH_DELAY_IN_S = 1;

/**
 * The minimal structural shape of an HTTP response consumed by {@link postTokenRequest}. Satisfied by
 * the WHATWG `Response` returned by `fetch` and by the injectable test doubles.
 *
 * @typedef {Object} FetchResponse
 * @property {boolean} ok
 *     Whether the HTTP status is in the 2xx range.
 * @property {number} status
 *     The numeric HTTP status code.
 * @property {() => Promise<string>} text
 *     Resolves the response body as text.
 */

/**
 * A `fetch`-compatible function: given a URL and a request-init object it resolves a {@link FetchResponse}.
 * Injectable via the `fetchImpl` option so the token endpoint can be mocked in tests with no network.
 *
 * @typedef {(url: string, init: object) => Promise<FetchResponse>} FetchImpl
 */

/**
 * The parsed JSON body returned by the Keycloak OIDC token endpoint. `access_token` is always present
 * (enforced by {@link postTokenRequest}); the others are optional depending on grant type / realm policy.
 *
 * @typedef {Object} TokenResponse
 * @property {string} access_token
 *     The short-lived bearer access token.
 * @property {string} [refresh_token]
 *     The offline refresh token; absent unless the `offline_access` scope was granted, and may be
 *     rotated by Keycloak on each refresh.
 * @property {number} [expires_in]
 *     Lifetime of `access_token` in seconds; drives the next scheduled refresh.
 */

/**
 * Options shared by {@link OfflineTokenProvider} and {@link login} that configure the token endpoint
 * and the bounded auto-refresh loop.
 *
 * @typedef {Object} OfflineTokenProviderOptions
 * @property {string} keycloakUrl
 *     Base Keycloak URL, optionally ending in `/auth` and/or a trailing slash.
 * @property {string} realm
 *     The Keycloak realm whose token endpoint is targeted.
 * @property {string} clientId
 *     The PUBLIC SDK client id (`ondewo-sip-cai-sdk-public`); no client secret is sent.
 * @property {number} [tokenExpirationInS]
 *     Optional bound on the auto-refresh loop in seconds; once elapsed the loop stops and re-login is
 *     required. Omit for an unbounded loop.
 * @property {FetchImpl} [fetchImpl]
 *     Optional `fetch` override; defaults to `globalThis.fetch`.
 * @property {() => number} [nowInMs]
 *     Optional clock returning epoch milliseconds; defaults to `Date.now`. Injectable for tests.
 * @property {boolean} [keycloakVerifySsl]
 *     TLS certificate verification for the Keycloak token-endpoint call; defaults to `true` (secure).
 *     Set `false` only for a self-signed local Envoy (e.g. `https://localhost:12001/auth`). Node-only:
 *     when `false`, an undici dispatcher with `rejectUnauthorized: false` is attached to the token
 *     request. No-op when a custom `fetchImpl` is injected (the dispatcher is only honoured by the real
 *     global fetch).
 */

/**
 * Options accepted by {@link login}: the {@link OfflineTokenProviderOptions} plus the ROPC credentials.
 *
 * @typedef {OfflineTokenProviderOptions & { username: string, password: string }} LoginOptions
 */

/** Error raised on any token-endpoint or token-shape failure. */
class TokenError extends Error {
	/**
	 * @param {string} message
	 *     Human-readable description of the token failure.
	 */
	constructor(message) {
		super(message);
		/** @type {string} The discriminating error name, always `'TokenError'`. */
		this.name = 'TokenError';
	}
}

/**
 * Build the OIDC token endpoint URL for a realm, tolerating a trailing slash on `keycloakUrl` and an
 * optional `/auth` relative path already baked into it.
 *
 * @param {string} keycloakUrl
 *     Base Keycloak URL, with or without a trailing slash and/or `/auth` suffix.
 * @param {string} realm
 *     The Keycloak realm name; URL-encoded into the path.
 * @returns {string}
 *     The fully-qualified `…/realms/<realm>/protocol/openid-connect/token` endpoint URL.
 */
function buildTokenEndpoint(keycloakUrl, realm) {
	const base = keycloakUrl.replace(/\/+$/, '');
	return `${base}/realms/${encodeURIComponent(realm)}/protocol/openid-connect/token`;
}

/**
 * Lazily-created, cached undici `Agent` that skips TLS certificate verification. Built only when the
 * insecure code path is first taken (`keycloakVerifySsl === false`), so `undici` is never required in the
 * common secure path.
 *
 * @type {object | null}
 */
let insecureDispatcher = null;

/**
 * Return a cached undici dispatcher (`Agent`) configured with `rejectUnauthorized: false`, lazily
 * requiring `undici` on first use. Attached to the token request's `init.dispatcher` so the real global
 * fetch performs the TLS handshake without certificate verification. Scoped to the token request only, so
 * it does not weaken the separate gRPC-web TLS.
 *
 * @returns {object}
 *     The insecure undici `Agent` dispatcher.
 */
function getInsecureDispatcher() {
	if (insecureDispatcher === null) {
		// eslint-disable-next-line global-require
		const { Agent } = require('undici');
		insecureDispatcher = new Agent({ connect: { rejectUnauthorized: false } });
	}
	return insecureDispatcher;
}

/**
 * POST an `application/x-www-form-urlencoded` body to the token endpoint and return the parsed JSON.
 * Raises TokenError on a non-2xx response or unparseable / access_token-less body.
 *
 * @param {string} tokenEndpoint
 *     The fully-qualified OIDC token endpoint URL.
 * @param {Record<string, string>} params
 *     Form fields to URL-encode into the request body (grant type, client id, credentials, scope).
 * @param {FetchImpl} fetchImpl
 *     The `fetch`-compatible function used to perform the request.
 * @param {boolean} verifySsl
 *     When `false`, attach an insecure undici dispatcher (`rejectUnauthorized: false`) to the request so
 *     the default global fetch skips TLS certificate verification. Only honoured by the real global fetch;
 *     an injected `fetchImpl` ignores it.
 * @returns {Promise<TokenResponse>}
 *     The parsed token response, guaranteed to carry a non-empty `access_token`.
 * @throws {TokenError}
 *     On a non-2xx status, a non-JSON body, or a body missing `access_token`.
 */
async function postTokenRequest(tokenEndpoint, params, fetchImpl, verifySsl) {
	const body = new URLSearchParams(params).toString();
	/** @type {object} */
	const init = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Accept: 'application/json'
		},
		body
	};
	if (verifySsl === false) {
		init.dispatcher = getInsecureDispatcher();
	}
	const response = await fetchImpl(tokenEndpoint, init);
	const text = await response.text();
	if (!response.ok) {
		throw new TokenError(`Keycloak token endpoint returned HTTP ${response.status}: ${text}`);
	}
	/** @type {TokenResponse} */
	let parsed;
	try {
		parsed = JSON.parse(text);
	} catch {
		throw new TokenError(`Keycloak token endpoint returned a non-JSON body: ${text}`);
	}
	if (typeof parsed.access_token !== 'string' || parsed.access_token.length === 0) {
		throw new TokenError('Keycloak token response did not contain an access_token');
	}
	return parsed;
}

/**
 * A live access-token holder backed by a bounded auto-refresh loop. Obtain one from {@link login};
 * read {@link OfflineTokenProvider#getAuthorizationHeader} for the gRPC `Authorization` metadata and
 * call {@link OfflineTokenProvider#stop} when done.
 */
class OfflineTokenProvider {
	/**
	 * @param {OfflineTokenProviderOptions} options
	 *     Token-endpoint and auto-refresh configuration.
	 */
	constructor(options) {
		/** @type {string} The fully-qualified OIDC token endpoint URL. */
		this.tokenEndpoint = buildTokenEndpoint(options.keycloakUrl, options.realm);
		/** @type {string} The PUBLIC SDK client id sent with every token request. */
		this.clientId = options.clientId;
		/** @type {number | undefined} Optional bound on the auto-refresh loop, in seconds. */
		this.tokenExpirationInS = options.tokenExpirationInS;
		/** @type {FetchImpl} The `fetch`-compatible function used for token requests. */
		this.fetchImpl = options.fetchImpl !== undefined ? options.fetchImpl : globalThis.fetch;
		/** @type {() => number} Clock returning epoch milliseconds (injectable for tests). */
		this.nowInMs = options.nowInMs !== undefined ? options.nowInMs : Date.now;
		/** @type {boolean} Whether to verify the Keycloak TLS certificate on the token call (secure default). */
		this.verifySsl = options.keycloakVerifySsl !== false;
		/** @type {string | null} The current access token, or null before bootstrap / after lapse. */
		this.accessToken = null;
		/** @type {string | null} The current offline refresh token, or null before bootstrap. */
		this.refreshToken = null;
		/** @type {ReturnType<typeof setTimeout> | null} The armed refresh timer, or null when idle. */
		this.timer = null;
		/** @type {boolean} Whether {@link OfflineTokenProvider#stop} has been called. */
		this.stopped = false;
		/** @type {number | null} Epoch-ms deadline at which the loop stops, or null when unbounded. */
		this.deadlineInMs = null;
		/** @type {((error: unknown) => void) | null} Optional background-refresh error callback. */
		this.onRefreshErrorHandler = null;
	}

	/**
	 * Perform the one-time ROPC login and arm the first refresh. Awaited by {@link login}.
	 *
	 * @param {string} username
	 *     The Keycloak username (technical user) for the ROPC grant.
	 * @param {string} password
	 *     The corresponding password for the ROPC grant.
	 * @returns {Promise<void>}
	 *     Resolves once the access token is set and the first refresh has been scheduled.
	 * @throws {TokenError}
	 *     When the login request fails or the response carries no offline `refresh_token`.
	 */
	async bootstrap(username, password) {
		const tokenResponse = await postTokenRequest(
			this.tokenEndpoint,
			{
				grant_type: 'password',
				client_id: this.clientId,
				username,
				password,
				scope: 'offline_access'
			},
			this.fetchImpl,
			this.verifySsl
		);
		this.accessToken = tokenResponse.access_token;
		this.refreshToken = typeof tokenResponse.refresh_token === 'string' ? tokenResponse.refresh_token : null;
		if (this.refreshToken === null) {
			throw new TokenError(
				'Keycloak token response did not contain a refresh_token; the SDK client must have ' +
					'directAccessGrants + the offline_access scope (ondewo-sip-cai-sdk-public)'
			);
		}
		if (this.tokenExpirationInS !== undefined) {
			const expirationInMs = this.tokenExpirationInS * 1000;
			this.deadlineInMs = this.nowInMs() + expirationInMs;
		}
		this.scheduleRefresh(tokenResponse.expires_in);
	}

	/**
	 * Exchange the offline refresh token for a fresh access token and re-arm the next refresh.
	 * No-ops if the provider is stopped or the bounded deadline has already elapsed.
	 *
	 * @returns {Promise<void>}
	 *     Resolves once the token is refreshed and the next refresh scheduled, or immediately on a no-op.
	 * @throws {TokenError}
	 *     When the refresh request fails (surfaced to {@link OfflineTokenProvider#onRefreshError}).
	 */
	async refresh() {
		if (this.stopped) {
			return;
		}
		// Re-check the bounded deadline at fire time (not just at schedule time): once it has elapsed the
		// loop stops with no further renewal -> the access token lapses -> re-login is required.
		if (this.deadlineInMs !== null && this.nowInMs() >= this.deadlineInMs) {
			this.stop();
			return;
		}
		const tokenResponse = await postTokenRequest(
			this.tokenEndpoint,
			{
				grant_type: 'refresh_token',
				client_id: this.clientId,
				// Non-null by invariant: bootstrap() throws unless a refresh_token was obtained, and stop()
				// short-circuits refresh() before this point once the loop has lapsed.
				refresh_token: /** @type {string} */ (this.refreshToken)
			},
			this.fetchImpl,
			this.verifySsl
		);
		this.accessToken = tokenResponse.access_token;
		// Keycloak may rotate the offline refresh token; keep the newest one when present.
		if (typeof tokenResponse.refresh_token === 'string' && tokenResponse.refresh_token.length > 0) {
			this.refreshToken = tokenResponse.refresh_token;
		}
		this.scheduleRefresh(tokenResponse.expires_in);
	}

	/**
	 * Arm a single timer for the next refresh, clamped to the bounded deadline. Stops silently once
	 * `tokenExpirationInS` has elapsed (no further renewal -> access lapses -> re-login required).
	 *
	 * @param {number | undefined} expiresInRaw
	 *     The token's reported `expires_in` in seconds; clamped to {@link MIN_REFRESH_DELAY_IN_S} when
	 *     absent or non-positive.
	 * @returns {void}
	 */
	scheduleRefresh(expiresInRaw) {
		if (this.stopped) {
			return;
		}
		const expiresInS = typeof expiresInRaw === 'number' && expiresInRaw > 0 ? expiresInRaw : MIN_REFRESH_DELAY_IN_S;
		let delayInS = Math.max(expiresInS - REFRESH_SKEW_IN_S, MIN_REFRESH_DELAY_IN_S);
		if (this.deadlineInMs !== null) {
			const remainingInMs = this.deadlineInMs - this.nowInMs();
			if (remainingInMs <= 0) {
				this.stop();
				return;
			}
			delayInS = Math.min(delayInS, remainingInMs / 1000);
		}
		this.timer = setTimeout(() => {
			this.refresh().catch((refreshError) => {
				// Swallow a transient refresh failure but surface it so the caller can react; the next
				// gRPC call gets the stale (possibly expired) token and re-logs in on UNAUTHENTICATED.
				if (this.onRefreshErrorHandler !== null) {
					this.onRefreshErrorHandler(refreshError);
				}
			});
		}, delayInS * 1000);
		// Do not keep the event loop alive solely for the refresh timer.
		// c8 ignore next -- defensive: Node's real setTimeout always returns a Timeout exposing unref(); the
		// non-function branch is unreachable here and only guards against exotic non-Node shims.
		if (typeof this.timer.unref === 'function') {
			this.timer.unref();
		}
	}

	/**
	 * Register a callback invoked with the error of a failed background refresh (optional diagnostics).
	 *
	 * @param {(error: unknown) => void} handler
	 *     Called with the rejection reason of a failed background refresh.
	 * @returns {void}
	 */
	onRefreshError(handler) {
		this.onRefreshErrorHandler = handler;
	}

	/**
	 * The current access token, or null before bootstrap / after the bounded loop has lapsed.
	 *
	 * @returns {string | null}
	 *     The live access token, or null when none is available.
	 */
	getAccessToken() {
		return this.accessToken;
	}

	/**
	 * The value for an `Authorization` gRPC metadata header: `Bearer <access_token>`.
	 *
	 * @returns {string}
	 *     The `Bearer <access_token>` header value.
	 * @throws {TokenError}
	 *     When no access token is available (login not completed, or the bounded loop has lapsed).
	 */
	getAuthorizationHeader() {
		if (this.accessToken === null) {
			throw new TokenError('No access token available; login() has not completed or has lapsed');
		}
		return `Bearer ${this.accessToken}`;
	}

	/**
	 * Stop the auto-refresh loop. Idempotent; safe to call from any state.
	 *
	 * @returns {void}
	 */
	stop() {
		this.stopped = true;
		if (this.timer !== null) {
			clearTimeout(this.timer);
			this.timer = null;
		}
	}
}

/**
 * One-time ROPC + offline_access login against the PUBLIC SDK client, returning a live token provider
 * whose access token is auto-refreshed in the background until `tokenExpirationInS` elapses.
 *
 * @param {LoginOptions} options
 *     Token-endpoint configuration plus the ROPC `username` / `password` credentials.
 * @returns {Promise<OfflineTokenProvider>}
 *     A provider whose first access token has already been fetched and whose refresh loop is armed.
 * @throws {TokenError}
 *     When `options` is missing, a required string option is empty, or the login request fails.
 */
async function login(options) {
	if (options === undefined || options === null) {
		throw new TokenError('login() requires an options object');
	}
	/** @type {Array<keyof LoginOptions>} */
	const requiredKeys = ['keycloakUrl', 'realm', 'clientId', 'username', 'password'];
	for (const key of requiredKeys) {
		const value = options[key];
		if (typeof value !== 'string' || value.length === 0) {
			throw new TokenError(`login() option "${key}" is required and must be a non-empty string`);
		}
	}
	const provider = new OfflineTokenProvider(options);
	await provider.bootstrap(options.username, options.password);
	return provider;
}

module.exports = { TokenError, OfflineTokenProvider, login };
