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

// Minimal, idiomatic ONDEWO SIP example: register a SIP account on the SIP gRPC-web endpoint and read
// back the resulting SipStatus. Every call authenticates with a Keycloak bearer token supplied in the
// gRPC metadata (`Authorization: Bearer <access_token>`), obtained from the D18 offline-token helper in
// ../auth/offlineTokenProvider.js.
//
// The SIP API namespace (`ondewo_sip_api`, the compiled bundle in ../api) and the gRPC client are passed
// in rather than imported, so the whole flow is exercisable with mocks -- no live SIP server, no
// Keycloak, no network. See sipStatusExample.spec.js for the mock-driven unit tests and client.js for the
// real wiring.

'use strict';

/* global module */

/**
 * A plain descriptor of the SIP account to register.
 *
 * @typedef {Object} SipAccount
 * @property {string} accountName
 *     Account name of the SIP user, e.g. `sip-user-1@mydomain.com` (optionally `…:5099` for a
 *     non-default SIP port).
 * @property {string} password
 *     Password of the SIP account.
 * @property {string} [authUsername]
 *     Optional authentication user name, when it differs from the account name.
 * @property {string} [outboundProxy]
 *     Optional outbound proxy address, e.g. `my.outbound.proxy.com`.
 */

/**
 * A minimal, plain-object summary of a `SipStatus` response.
 *
 * @typedef {Object} SipStatusSummary
 * @property {string} accountName
 *     The account name echoed back on the status.
 * @property {number} statusType
 *     The `SipStatus.StatusType` enum value (e.g. `1` == `REGISTERED`).
 * @property {string} description
 *     A more detailed, human-readable description of the status.
 */

/**
 * Build a `SipRegisterAccountRequest` from a plain account descriptor using the generated setters.
 * Optional fields are only set when a non-empty string is supplied. Kept separate so request
 * construction can be asserted in isolation with a fake request class.
 *
 * @param {*} sipApi
 *     The ONDEWO SIP API namespace exposing `SipRegisterAccountRequest` (the `ondewo_sip_api` bundle
 *     global in the browser; a fake in tests).
 * @param {SipAccount} account
 *     The account whose fields populate the request.
 * @returns {*}
 *     A populated `SipRegisterAccountRequest`.
 */
function buildRegisterAccountRequest(sipApi, account) {
	const request = new sipApi.SipRegisterAccountRequest();
	request.setAccountName(account.accountName);
	request.setPassword(account.password);
	if (typeof account.authUsername === 'string' && account.authUsername.length > 0) {
		request.setAuthUsername(account.authUsername);
	}
	if (typeof account.outboundProxy === 'string' && account.outboundProxy.length > 0) {
		request.setOutboundProxy(account.outboundProxy);
	}
	return request;
}

/**
 * Register a SIP account and return a plain summary of the resulting `SipStatus`, authenticating the
 * gRPC-web call with a Keycloak bearer token passed in the metadata.
 *
 * @param {Object} params
 *     The injected dependencies and inputs.
 * @param {*} params.sipApi
 *     The ONDEWO SIP API namespace (used to build the request).
 * @param {{ sipRegisterAccount: (request: *, metadata: Record<string, string>) => Promise<*> }} params.client
 *     A `SipPromiseClient` (or a mock exposing `sipRegisterAccount`).
 * @param {SipAccount} params.account
 *     The account to register.
 * @param {string} params.authorizationHeader
 *     The `Authorization` metadata value, e.g. `Bearer <access_token>` from
 *     `OfflineTokenProvider#getAuthorizationHeader`.
 * @returns {Promise<SipStatusSummary>}
 *     A plain summary mapped from the `SipStatus` response.
 */
async function registerSipAccount({ sipApi, client, account, authorizationHeader }) {
	const request = buildRegisterAccountRequest(sipApi, account);
	const metadata = { Authorization: authorizationHeader };
	const status = await client.sipRegisterAccount(request, metadata);
	return {
		accountName: status.getAccountName(),
		statusType: status.getStatusType(),
		description: status.getDescription()
	};
}

module.exports = { buildRegisterAccountRequest, registerSipAccount };
