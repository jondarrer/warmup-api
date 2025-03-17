"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRequest = void 0;
const config_js_1 = require("./config.js");
const index_js_1 = require("./errors/index.js");
/**
 * Make a request to either the Warmup API or GraphQL endpoint
 *
 * @throws When a 4xx or 5xx response code is received
 */
const makeRequest = async ({ url, body, token }) => {
    const authHeader = {};
    if (token) {
        authHeader['warmup-authorization'] = token;
    }
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'user-agent': config_js_1.WARMUP_APP_USER_AGENT,
            'accept-encoding': 'br, gzip, deflate',
            accept: '*/*',
            connection: 'keep-alive',
            'content-type': 'application/json',
            'app-token': config_js_1.WARMUP_APP_TOKEN,
            'app-version': '1.8.1',
            'accept-language': 'en-GB',
            ...authHeader,
        },
        body,
    });
    if (!response.ok) {
        switch (response.status) {
            case 401:
                throw new index_js_1.AuthorisationError(`Error attempting request for ${url}`, 401);
            default:
                throw new index_js_1.UnexpectedError(`Error attempting request for ${url}: ${response.statusText}`, response.status);
        }
    }
    const result = /** @type {any} */ (await response.json());
    if (result?.status?.result === 'error') {
        switch (result?.response?.errorCode) {
            case 101:
                throw new index_js_1.InvalidCredentialsError('Invalid email address/password', 101);
            case 112:
                throw new index_js_1.InvalidCredentialsError('Unrecognised email address', 112);
            case 124:
                throw new index_js_1.InvalidCredentialsError('Invalid password', 124);
            default:
                throw new index_js_1.UnexpectedError(`Error attempting request for ${url}`, result.response.errorCode);
        }
    }
    if (result?.status === 'error') {
        throw new index_js_1.UnexpectedError(`Error attempting request for ${url}: Responded with errors ${JSON.stringify(result.errors)}`);
    }
    return result;
};
exports.makeRequest = makeRequest;
exports.default = exports.makeRequest;
//# sourceMappingURL=make-request.js.map