"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const nock_1 = __importDefault(require("nock"));
const get_token_js_1 = __importDefault(require("./get-token.js"));
const index_js_1 = require("./errors/index.js");
const config_js_1 = require("./config.js");
(0, node_test_1.afterEach)(async () => {
    nock_1.default.cleanAll();
});
(0, node_test_1.describe)('should throw an error if an error response is received', async () => {
    const tests = [
        {
            status: 200,
            response: { status: { result: 'error' }, response: { errorCode: 101 } },
            expected: new index_js_1.InvalidCredentialsError('Invalid email address/password', 101),
        },
        {
            status: 200,
            response: { status: { result: 'error' }, response: { errorCode: 112 } },
            expected: new index_js_1.InvalidCredentialsError('Unrecognised email address', 112),
        },
        {
            status: 200,
            response: { status: { result: 'error' }, response: { errorCode: 124 } },
            expected: new index_js_1.InvalidCredentialsError('Invalid password', 124),
        },
        {
            status: 200,
            response: { status: { result: 'error' }, response: { errorCode: 100 } },
            expected: new index_js_1.UnexpectedError('Error attempting request for https://api.warmup.com/apps/app/v1', 100),
        },
        {
            status: 500,
            response: 'Internal Server Error',
            expected: new index_js_1.UnexpectedError('Error attempting request for https://api.warmup.com/apps/app/v1: Internal Server Error', 500),
        },
        {
            status: 403,
            response: 'Forbidden',
            expected: new index_js_1.UnexpectedError('Error attempting request for https://api.warmup.com/apps/app/v1: Forbidden', 403),
        },
        {
            status: 401,
            response: 'Unauthorized',
            expected: new index_js_1.AuthorisationError('Error attempting request for https://api.warmup.com/apps/app/v1', 401),
        },
    ];
    for (const { status, response, expected } of tests) {
        await (0, node_test_1.it)(`${status} returned with ${JSON.stringify(response)}`, async () => {
            // Arrange
            const email = 'not-right@test.com';
            const password = 'no-good';
            (0, nock_1.default)(config_js_1.WARMUP_TOKEN_BASE_URL).post(config_js_1.WARMUP_TOKEN_V1_PATH).reply(status, response);
            // Act & Assert
            await node_assert_1.default.rejects(() => (0, get_token_js_1.default)(email, password), expected);
        });
    }
});
(0, node_test_1.it)('should return the token if a 200 response is received along with the token', async () => {
    // Arrange
    const email = 'valid@test.com';
    const password = 'good';
    const token = 'abcDE';
    (0, nock_1.default)(config_js_1.WARMUP_TOKEN_BASE_URL)
        .post(config_js_1.WARMUP_TOKEN_V1_PATH)
        .reply(200, {
        status: {
            result: 'success',
        },
        response: {
            method: 'userLogin',
            token,
            mobileName: null,
        },
        message: {
            duration: '0.075',
        },
    });
    // Act
    const response = await (0, get_token_js_1.default)(email, password);
    // Assert
    node_assert_1.default.ok(response);
    node_assert_1.default.deepEqual(response, token);
});
//# sourceMappingURL=get-token.test.js.map