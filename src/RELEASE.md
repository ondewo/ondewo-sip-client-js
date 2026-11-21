# Release History

*****************

## Release ONDEWO SIP Js Client 5.7.2

### New Features

* [[OND236-120]](https://ondewo.atlassian.net/browse/OND236-120) Keycloak token provider with offline-token start-up, matching ondewo-sip-client-python 5.7.2: the client config takes a Keycloak *offline* refresh token instead of a password, and the provider then starts with a `grant_type=refresh_token` exchange and never sends a password grant. A Keycloak config needs a password OR a refresh token; when both are set the token wins, and a refused token is never answered with a password login. The token is redacted like the password and takes part (hashed) in the shared-provider registry key, so two configs of different tenants never share a provider. In `auth/offlineTokenProvider.js`.

### Bug Fixes

* [[OND236-120]](https://ondewo.atlassian.net/browse/OND236-120) Keycloak token refresh survives every failure: a failed refresh backs off with full jitter from 5 s doubling up to 300 s, the background and the per-call refresh share that backoff, and a success resets it. A token that is still valid keeps being served when its refresh fails inside the 30 s expiry leeway; only an EXPIRED token raises the Keycloak authentication error, whatever failed underneath (unreachable endpoint, timeout, a non-2xx status, a body that is not a JSON object, a missing `access_token`, a non-numeric `expires_in`). A malformed response changes no provider state. The token-endpoint timeout is 10 s, quoted error bodies are cut at 500 characters, and no credential reaches a log line or an error message.
* [[OND236-120]](https://ondewo.atlassian.net/browse/OND236-120) A password login whose response carries no usable `refresh_token` is accepted, as in python. Only real transport failures are reported as "could not reach the token endpoint"; any other error names its type. A provider whose `tokenExpirationInS` window closed is still shared by the registry; only `stop()` retires it.

### Improvements

* Tracking API Version [5.7.0](https://github.com/ondewo/ondewo-sip-api/releases/tag/5.7.0) ( [Documentation](https://ondewo.github.io/ondewo-sip-api/) )
* [[OND236-120]](https://ondewo.atlassian.net/browse/OND236-120) Tests: the cases of the python SDK's `test_keycloak_refresh_resilience.py` and `test_client_config_refresh_token.py`, ported to `auth/offlineTokenProvider.spec.js`, plus this SDK's edge cases.

*****************

## Release ONDEWO SIP Js Client 5.7.0

### Improvements

* Tracking API Version [5.7.0](https://github.com/ondewo/ondewo-sip-api/releases/tag/5.7.0) ( [Documentation](https://ondewo.github.io/ondewo-sip-api/) )
* [[OND236-120]](https://ondewo.atlassian.net/browse/OND236-120) Generated with ondewo-proto-compiler 5.17.0 (protoc 35.1). New runtime floors: `grpc-web` ^2.1.1 and `google-protobuf` ^4.0.3. grpc-web 2.x limits a response to 4 MB by default; a client that receives more must set `maxReceiveMessageSize`.

*****************

## Release ONDEWO SIP Js Client 5.5.2

### Improvements

* Tracking API Version [5.5.2](https://github.com/ondewo/ondewo-sip-api/releases/tag/5.5.2) ( [Documentation](https://ondewo.github.io/ondewo-sip-api/) )

*****************

## Release ONDEWO SIP Js Client 5.5.0

### New Features

* [[OND233-367]](https://ondewo.atlassian.net/browse/OND233-367) Tracks
  [ONDEWO SIP API 5.5.0](https://github.com/ondewo/ondewo-sip-api/releases/tag/5.5.0) (was 5.4.0). The generated
  bundle now carries:
  * Answering machine detection: status `OUTGOING_CALL_ANSWERING_MACHINE_DETECTED`, `AnsweringMachineDetectionResult`,
    `SipStatus.amd_result`, `SipEndCallRequest.end_reason` (`EndCallReason`, incl. `ANSWERING_MACHINE`,
    `ANSWERING_MACHINE_VOICE_MESSAGE_LEFT` and `END_CALL_REASON_TRANSFERRED`) and `SipEndCallRequest.amd_result`, and
    the RPC `SipReportAnsweringMachineDetected`.
  * Call identity: `SipStatus.call_id`. A request is scoped to a call with the `x-ondewo-expected-call-id` gRPC
    metadatum (pass it in the per-call metadata of the generated client).
  * `SipSetCallMediaControl` (`SipSetCallMediaControlRequest`, `MediaControlSetting`, `MediaControlOwner`) for
    call-scoped operator media control; `SipStatus.bot_muted` and `SipStatus.listening_paused` report the effective
    level.
  * Truthful transfers: `SipTransferCallRequest.outcome_timeout_ms` and `SipStatus.sip_response_code`.
  * The live call audio messages (`SipCallAudioRequest`, `SipCallAudioResponse`, `SipCallAudioConfig`,
    `SipCallAudioFrame`, `SipCallAudioStarted`, `SipCallAudioStats`, `SipCallAudioEnded`, `SipCallAudioMode`,
    `SipCallAudioEndReason`) and `SipStatus.call_audio_streams`. The RPC `SipStreamCallAudio` itself is
    bidirectional streaming, which gRPC-web does not support, so the generated `SipClient` has no method for it; use
    a native gRPC client (e.g. the Node.js or Python SDK) for live call audio.
* The API change is purely additive: a client built against 5.4.0 stays wire-compatible.

### Build

* Regenerated with [ondewo-proto-compiler 5.15.5](https://github.com/ondewo/ondewo-proto-compiler/releases/tag/5.15.5)
  (previous release: 5.15.2). The embedded `google-protobuf` runtime stays on the 4.x line (`^4.0.2`), and
  `tests/bundleStringRoundTrip.spec.js` passes on the shipped bundle.

*****************

## Release ONDEWO SIP Js Client 5.4.2

### Improvements

* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) TLS: new `auth/grpcWebEndpoint.js`
  (`buildGrpcWebEndpoint`) builds the gRPC-web endpoint URL for the generated clients per the ONDEWO TLS contract:
  `https://` by default, plaintext `http://` only with `useSecureChannel: false`, which logs a `console.warn` naming
  `host:port`. A bare IPv6 host is bracketed (`::1` becomes `https://[::1]:8443`), a `[...]` host is kept as given, and
  a host carrying a scheme, a path or a port, a port outside 1..65535 or a non-boolean `useSecureChannel` is refused.
* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) `grpcCert`, `grpcClientCert` and `grpcClientKey`
  are refused with an error naming the option, never its value: a browser verifies the server against its own trust
  store and presents a client certificate only from its own certificate store, and a private key must never be shipped
  to a browser. Mutual TLS from a browser works with a client certificate installed in the browser / OS certificate
  store, or with the gRPC-web proxy (Envoy) terminating TLS and using mutual TLS upstream.
* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) `OfflineTokenProvider` gains `toJSON()` and a Node
  `util.inspect` hook that render the access and refresh tokens as `***REDACTED***` (a token not yet set stays `null`),
  so `JSON.stringify`, `console.log` and `util.inspect` of a provider never print a token.
* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) README: new section "TLS, mutual TLS and
  certificates" (modes, the Envoy mutual-TLS setup, why gRPC-web has no keepalive / backoff channel options, and the
  Node.js SDK for mutual TLS from code with PEM files).
* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) The published package now contains `auth/` (the
  Keycloak `OfflineTokenProvider` and the new `grpcWebEndpoint`, without their specs): `create_npm_package` did not
  copy it before, so earlier versions shipped no auth helper at all. Import it as
  `require('@ondewo/ondewo-sip-client-js/auth/offlineTokenProvider')`; it is Node-only (it uses `undici`).

### Build

* Regenerated with [ondewo-proto-compiler 5.15.2](https://github.com/ondewo/ondewo-proto-compiler/releases/tag/5.15.2)
  (previous release: 5.11.0) against the unchanged API tag [5.4.0](https://github.com/ondewo/ondewo-sip-api/releases/tag/5.4.0). The bundle embeds the `google-protobuf` runtime,
  now pinned to `^4.0.2` (was `^3.21.4`), the line that provides `reader.readStringRequireUtf8()` which the 5.15
  compiler emits. `tests/bundleStringRoundTrip.spec.js` loads the shipped bundle and round-trips a multi-byte string,
  so a generator / runtime mismatch fails the build instead of shipping.

### Tests and release notes

* `auth/grpcWebEndpoint.spec.js` and new `auth/offlineTokenProvider.spec.js` cases cover the endpoint builder and the
  token redaction under the 100% coverage gate.
* `tests/releaseNotes.spec.js` pins the Makefile's release-notes slice, every heading's spelling, one `*****`
  separator per section and a non-empty slice for the released version.
* RELEASE.md: fixed the 3.1.0 heading spelling (`JS` -> `Js`), which the release-notes slice never matched.

*****************

## Release ONDEWO SIP Js Client 5.4.1

### Bug Fixes

* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) Regenerated with [ondewo-proto-compiler 5.13.0](https://github.com/ondewo/ondewo-proto-compiler/releases/tag/5.13.0).
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) No change to how the auth helper is consumed: this package ships a webpack bundle rather than a public-api barrel, and the auth helper is a Node-only `undici` consumer that does not belong in a browser bundle. It ships as its own CommonJS entry and is imported directly (`require('<pkg>/auth/offlineTokenProvider')`).
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) Tooling: `conventional-pre-commit` now runs before `giticket` at the commit-msg stage - with giticket first, its `[OND221-2830] fix: ...` rewrite was no longer valid Conventional Commits and every commit on a ticket branch failed. `README.md` is prettier-ignored where `.prettierrc` sets `useTabs` and markdownlint's MD010 de-tabs the same blocks, and the codegen `docker run` invocations no longer pass `-it`, which fails outside a TTY.

*****************

## Release ONDEWO SIP Js Client 5.4.0

### Improvements

* Tracking API Version [5.4.0](https://github.com/ondewo/ondewo-sip-api/releases/tag/5.4.0) ( [Documentation](https://ondewo.github.io/ondewo-sip-api/) )

*****************

## Release ONDEWO SIP Js Client 5.3.0

### Improvements

* Tracking API Version [5.3.0](https://github.com/ondewo/ondewo-sip-api/releases/tag/5.3.0) ( [Documentation](https://ondewo.github.io/ondewo-sip-api/) )

*****************

## Release ONDEWO SIP Js Client 5.2.0

### Improvements

* Tracking API Version [5.2.0](https://github.com/ondewo/ondewo-sip-api/releases/tag/5.2.0) ( [Documentation](https://ondewo.github.io/ondewo-sip-api/) )

*****************

## Release ONDEWO SIP Js Client 4.0.0

### Improvements

* Tracking API Version [4.0.0](https://github.com/ondewo/ondewo-sip-api/releases/tag/4.0.0) ( [Documentation](https://ondewo.github.io/ondewo-sip-api/) )

*****************

## Release ONDEWO SIP Js Client 3.3.0

### Improvements

* Tracking API Version [3.3.0](https://github.com/ondewo/ondewo-sip-api/releases/tag/3.3.0) ( [Documentation](https://ondewo.github.io/ondewo-sip-api/) )

*****************

## Release ONDEWO SIP Js Client 3.1.0

* Track version 3.1.0 of [ONDEWO SIP API](https://github.com/ondewo/ondewo-sip-api/releases/3.1.0)
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Implemented automated release for GitHub and NPM
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Added pre-commit hooks and adjusted files to them

*****************
