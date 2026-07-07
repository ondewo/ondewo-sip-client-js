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

// Runnable ONDEWO SIP client example. It ties the two hand-written pieces of this SDK together:
//   1. ../auth/offlineTokenProvider.js -- the D18 Keycloak offline-token helper (ROPC login against the
//      PUBLIC SDK client, then a background refresh loop) that yields an `Authorization: Bearer <token>`
//      gRPC metadata header. This replaces the legacy token/basic-auth flow.
//   2. ./sipStatusExample.js         -- the request/response logic (build SipRegisterAccountRequest, call
//      the RPC with the bearer metadata, map the SipStatus response).
//
// The generated SIP API classes come from the compiled bundle (../api/ondewo_sip_api.min.js), which this
// example loads into the Node process (the bundle is a browser `<script>` global; evaluating it in a fresh
// Function scope makes it usable from Node). Replace the placeholder connection details below with your
// own before running:  node examples/client.js

'use strict';

/* global require, __dirname, process */

const fs = require('node:fs');
const path = require('node:path');

// Load the example configuration from examples/environment.env (path relative to this script, so the
// current working directory does not matter). All connection/Keycloak/SIP values are read from the
// canonical environment variables below -- see examples/environment.env for the template.
require('dotenv').config({ path: path.join(__dirname, 'environment.env'), quiet: true });

const { login } = require('../auth/offlineTokenProvider');
const { registerSipAccount } = require('./sipStatusExample');

/**
 * Read a required environment variable, failing fast with a descriptive error when it is missing.
 *
 * @param {string} name
 *     The canonical environment-variable name (e.g. `ONDEWO_HOST`).
 * @returns {string}
 *     The non-empty value of the variable.
 * @throws {Error}
 *     When the variable is unset or empty.
 */
function requireEnv(name) {
	const value = process.env[name];
	if (typeof value !== 'string' || value.length === 0) {
		throw new Error(`Missing required environment variable ${name}; set it in examples/environment.env`);
	}
	return value;
}

/**
 * Read an optional environment variable, returning an empty string when it is unset or blank.
 *
 * @param {string} name
 *     The canonical environment-variable name.
 * @returns {string}
 *     The value, or `''` when unset/blank.
 */
function optionalEnv(name) {
	const value = process.env[name];
	if (typeof value === 'string' && value.length > 0) {
		return value;
	}
	return '';
}

/**
 * Parse a boolean environment variable (`'true'`/`'false'`, case-insensitive), falling back to a default.
 *
 * @param {string} name
 *     The canonical environment-variable name.
 * @param {boolean} defaultValue
 *     The value to use when the variable is unset or blank.
 * @returns {boolean}
 *     The parsed boolean.
 */
function parseBoolEnv(name, defaultValue) {
	const value = process.env[name];
	if (typeof value !== 'string' || value.length === 0) {
		return defaultValue;
	}
	return value.trim().toLowerCase() === 'true';
}

/**
 * Build the gRPC-web endpoint URL from the canonical connection variables.
 *
 * @param {string} host
 *     The value of `ONDEWO_HOST`.
 * @param {string} port
 *     The value of `ONDEWO_PORT`.
 * @param {boolean} useSecureChannel
 *     The value of `ONDEWO_USE_SECURE_CHANNEL` (`true` -> `https`, `false` -> `http`).
 * @returns {string}
 *     The `<scheme>://<host>:<port>` endpoint URL.
 */
function buildGrpcWebUrl(host, port, useSecureChannel) {
	let scheme = 'http';
	if (useSecureChannel) {
		scheme = 'https';
	}
	return `${scheme}://${host}:${port}`;
}

/**
 * Load the generated ONDEWO SIP API namespace from the compiled bundle (../api/ondewo_sip_api.min.js).
 * The bundle is a webpack `var`-target browser library that exposes `ondewo_sip_api`; evaluating it in a
 * fresh `Function` scope and returning that binding makes it usable from Node without a `<script>` tag.
 *
 * @returns {*}
 *     The `ondewo_sip_api` namespace exposing the generated client + message classes (typed `*` to keep
 *     this glue decoupled from the generated, untyped stub surface).
 */
function loadSipApiNamespace() {
	const bundlePath = path.join(__dirname, '..', 'api', 'ondewo_sip_api.min.js');
	const source = fs.readFileSync(bundlePath, 'utf8');
	return new Function(`${source}\n;return ondewo_sip_api;`)();
}

const sipApi = loadSipApiNamespace();

/**
 * Run the example end-to-end: read config -> Keycloak login -> construct the SIP client -> register the
 * account -> print the resulting status. The background token refresh is always stopped afterwards.
 *
 * @returns {Promise<void>}
 *     Resolves once the status has been printed.
 */
async function main() {
	console.log('START: ONDEWO SIP client example');

	// The gRPC-web (envoy) endpoint that fronts the SIP gRPC server.
	const grpcWebUrl = buildGrpcWebUrl(
		requireEnv('ONDEWO_HOST'),
		requireEnv('ONDEWO_PORT'),
		parseBoolEnv('ONDEWO_USE_SECURE_CHANNEL', true)
	);

	// Keycloak connection + PUBLIC SDK client used by the D18 offline-token helper.
	const keycloak = {
		keycloakUrl: requireEnv('KEYCLOAK_URL'),
		realm: requireEnv('KEYCLOAK_REALM'),
		clientId: requireEnv('KEYCLOAK_CLIENT_ID'),
		username: requireEnv('KEYCLOAK_USER_NAME'),
		password: requireEnv('KEYCLOAK_PASSWORD'),
		keycloakVerifySsl: parseBoolEnv('KEYCLOAK_VERIFY_SSL', true)
	};

	// The SIP account to register (optional fields are omitted when blank).
	const account = {
		accountName: requireEnv('ONDEWO_SIP_ACCOUNT_NAME'),
		password: requireEnv('ONDEWO_SIP_ACCOUNT_PASSWORD'),
		authUsername: optionalEnv('ONDEWO_SIP_AUTH_USERNAME'),
		outboundProxy: optionalEnv('ONDEWO_SIP_OUTBOUND_PROXY')
	};

	console.log(`Logging in to Keycloak realm "${keycloak.realm}" at ${keycloak.keycloakUrl} as ${keycloak.username}`);
	const tokenProvider = await login(keycloak);
	try {
		console.log(`Connecting to the SIP gRPC-web endpoint at ${grpcWebUrl}`);
		const client = new sipApi.SipPromiseClient(grpcWebUrl);
		const summary = await registerSipAccount({
			sipApi,
			client,
			account,
			authorizationHeader: tokenProvider.getAuthorizationHeader()
		});
		console.log('-- SIP register status --', summary);
		console.log('DONE: ONDEWO SIP client example');
	} finally {
		tokenProvider.stop();
	}
}

main().catch((error) => {
	console.error('-- SIP client example failed --', error);
	process.exit(1);
});
