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

// Unit tests for the SIP register-account example. The generated SIP API classes and the gRPC client
// are replaced with fakes -- there is NO live SIP server, NO Keycloak, and NO network. The tests assert
// that the example builds the right request (via the generated setters), attaches the Keycloak bearer
// token as gRPC metadata, and maps the SipStatus response back to a plain summary.
//   node --test examples/sipStatusExample.spec.js

'use strict';

/* global require */

const { test: runTestCase } = require('node:test');
const assert = require('node:assert/strict');

const { buildRegisterAccountRequest, registerSipAccount } = require('./sipStatusExample');

/**
 * A fake `SipRegisterAccountRequest` that records every value passed to its generated setters, so the
 * request the example builds can be inspected without the compiled protobuf bundle.
 */
class FakeSipRegisterAccountRequest {
	constructor() {
		/** @type {Record<string, string>} The values captured per setter, keyed by field name. */
		this.fields = {};
	}

	/**
	 * @param {string} value The account name to record.
	 * @returns {void}
	 */
	setAccountName(value) {
		this.fields.accountName = value;
	}

	/**
	 * @param {string} value The password to record.
	 * @returns {void}
	 */
	setPassword(value) {
		this.fields.password = value;
	}

	/**
	 * @param {string} value The auth username to record.
	 * @returns {void}
	 */
	setAuthUsername(value) {
		this.fields.authUsername = value;
	}

	/**
	 * @param {string} value The outbound proxy to record.
	 * @returns {void}
	 */
	setOutboundProxy(value) {
		this.fields.outboundProxy = value;
	}
}

/**
 * The fake SIP API namespace injected in place of the compiled `ondewo_sip_api` bundle.
 *
 * @type {{ SipRegisterAccountRequest: typeof FakeSipRegisterAccountRequest }}
 */
const fakeSipApi = { SipRegisterAccountRequest: FakeSipRegisterAccountRequest };

/**
 * Build a fake `SipStatus` response exposing only the getters the example reads.
 *
 * @param {{ accountName: string, statusType: number, description: string }} values
 *     The values the getters should return.
 * @returns {{ getAccountName: () => string, getStatusType: () => number, getDescription: () => string }}
 *     A minimal SipStatus test double.
 */
function makeFakeStatus(values) {
	return {
		getAccountName: () => values.accountName,
		getStatusType: () => values.statusType,
		getDescription: () => values.description
	};
}

/**
 * Build a fake `SipPromiseClient` that records the `(request, metadata)` of each `sipRegisterAccount`
 * call and resolves with the supplied fake status.
 *
 * @param {*} status
 *     The fake SipStatus the client should resolve with.
 * @returns {{ sipRegisterAccount: (request: *, metadata: Record<string, string>) => Promise<*>, calls: Array<{ request: *, metadata: Record<string, string> }> }}
 *     The fake client and the live array of captured calls.
 */
function makeFakeClient(status) {
	/** @type {Array<{ request: *, metadata: Record<string, string> }>} */
	const calls = [];
	const client = {
		sipRegisterAccount: (request, metadata) => {
			calls.push({ request, metadata });
			return Promise.resolve(status);
		}
	};
	return { client, calls };
}

runTestCase('registerSipAccount builds the request, sends the bearer metadata, and maps the response', async () => {
	const status = makeFakeStatus({ accountName: 'sip-user-1@mydomain.com', statusType: 1, description: 'registered' });
	const { client, calls } = makeFakeClient(status);
	const account = {
		accountName: 'sip-user-1@mydomain.com',
		password: 'sip-secret',
		authUsername: 'auth-user',
		outboundProxy: 'my.outbound.proxy.com'
	};

	const summary = await registerSipAccount({
		sipApi: fakeSipApi,
		client,
		account,
		authorizationHeader: 'Bearer access-token-1'
	});

	// Exactly one RPC, carrying the built request and the Keycloak bearer token as gRPC metadata.
	assert.equal(calls.length, 1);
	assert.deepEqual(calls[0].metadata, { Authorization: 'Bearer access-token-1' });

	// The request was populated from the account via the generated setters.
	assert.deepEqual(calls[0].request.fields, {
		accountName: 'sip-user-1@mydomain.com',
		password: 'sip-secret',
		authUsername: 'auth-user',
		outboundProxy: 'my.outbound.proxy.com'
	});

	// The SipStatus response was mapped to a plain summary.
	assert.deepEqual(summary, {
		accountName: 'sip-user-1@mydomain.com',
		statusType: 1,
		description: 'registered'
	});
});

runTestCase('buildRegisterAccountRequest omits the optional setters when the fields are absent', () => {
	const request = buildRegisterAccountRequest(fakeSipApi, {
		accountName: 'sip-user-2@mydomain.com',
		password: 'pw-2'
	});

	assert.deepEqual(request.fields, { accountName: 'sip-user-2@mydomain.com', password: 'pw-2' });
	assert.equal('authUsername' in request.fields, false);
	assert.equal('outboundProxy' in request.fields, false);
});

runTestCase('buildRegisterAccountRequest treats empty-string optional fields as absent', () => {
	const request = buildRegisterAccountRequest(fakeSipApi, {
		accountName: 'sip-user-3@mydomain.com',
		password: 'pw-3',
		authUsername: '',
		outboundProxy: ''
	});

	assert.deepEqual(request.fields, { accountName: 'sip-user-3@mydomain.com', password: 'pw-3' });
	assert.equal('authUsername' in request.fields, false);
	assert.equal('outboundProxy' in request.fields, false);
});
