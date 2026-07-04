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

/* global require, __dirname */

const fs = require('node:fs');
const path = require('node:path');

const { login } = require('../auth/offlineTokenProvider');
const { registerSipAccount } = require('./sipStatusExample');

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

/** The gRPC-web (envoy) endpoint that fronts the SIP gRPC server. */
const GRPC_WEB_URL = 'https://localhost:8443';

/** Keycloak connection + PUBLIC SDK client used by the offline-token helper. */
const KEYCLOAK = {
	keycloakUrl: 'https://localhost:8443/auth',
	realm: 'ondewo-ccai-platform',
	clientId: 'ondewo-sip-cai-sdk-public',
	username: 'my-technical-user@example.com',
	password: 'change-me'
};

/** The SIP account to register. */
const ACCOUNT = {
	accountName: 'sip-user-1@mydomain.com',
	password: 'sip-secret'
};

/**
 * Run the example end-to-end: Keycloak login -> construct the SIP client -> register the account ->
 * print the resulting status. The background token refresh is always stopped afterwards.
 *
 * @returns {Promise<void>}
 *     Resolves once the status has been printed.
 */
async function main() {
	const tokenProvider = await login(KEYCLOAK);
	try {
		const client = new sipApi.SipPromiseClient(GRPC_WEB_URL);
		const summary = await registerSipAccount({
			sipApi,
			client,
			account: ACCOUNT,
			authorizationHeader: tokenProvider.getAuthorizationHeader()
		});
		console.log('-- SIP register status --', summary);
	} finally {
		tokenProvider.stop();
	}
}

main().catch((error) => {
	console.error('-- SIP client example failed --', error);
});
