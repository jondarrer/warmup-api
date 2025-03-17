"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const make_request_js_1 = require("./make-request.js");
const config_js_1 = require("./config.js");
/**
 * Get a token by "logging in" to the Warmup API
 *
 * @param {string} email
 * @param {string} password
 * @returns {Promise<string>} The token
 * @throws When a 4xx or 5xx response code is received
 */
exports.default = async (email, password) => {
    const body = {
        request: {
            email,
            password,
            method: 'userLogin',
            appId: config_js_1.WARMUP_APP_ID,
        },
    };
    // ts-expect-error
    return (await (0, make_request_js_1.makeRequest)({
        url: `${config_js_1.WARMUP_TOKEN_BASE_URL}${config_js_1.WARMUP_TOKEN_V1_PATH}`,
        body: JSON.stringify(body)
    }))
        .response.token;
};
//# sourceMappingURL=get-token.js.map