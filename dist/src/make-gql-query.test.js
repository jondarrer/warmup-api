"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const nock_1 = __importDefault(require("nock"));
const make_gql_query_js_1 = __importDefault(require("./make-gql-query.js"));
const index_js_1 = require("./errors/index.js");
const config_js_1 = require("./config.js");
(0, node_test_1.afterEach)(async () => {
    nock_1.default.cleanAll();
});
(0, node_test_1.describe)('should throw an error if an error response is received', async () => {
    const tests = [
        {
            status: 200,
            response: { status: 'error', errors: [{ errorCode: 999, message: 'Some made up error occurred' }] },
            expected: new index_js_1.UnexpectedError('Error attempting request for https://apil.warmup.com/graphql: Responded with errors [{"errorCode":999,"message":"Some made up error occurred"}]'),
        },
        {
            status: 200,
            response: { status: { result: 'error' }, response: { errorCode: 100 } },
            expected: new index_js_1.UnexpectedError('Error attempting request for https://apil.warmup.com/graphql', 100),
        },
        {
            status: 500,
            response: 'Internal Server Error',
            expected: new index_js_1.UnexpectedError('Error attempting request for https://apil.warmup.com/graphql: Internal Server Error', 500), // Nock doesn't allow us to set the statusText properly
        },
        {
            status: 403,
            response: 'Forbidden',
            expected: new index_js_1.UnexpectedError('Error attempting request for https://apil.warmup.com/graphql: Forbidden', 403), // Nock doesn't allow us to set the statusText properly
        },
        {
            status: 401,
            response: 'Unauthorized',
            expected: new index_js_1.AuthorisationError('Error attempting request for https://apil.warmup.com/graphql', 401),
        },
    ];
    for (const { status, response, expected } of tests) {
        await (0, node_test_1.it)(`${status} returned with ${JSON.stringify(response)}`, async () => {
            // Arrange
            const body = {
                operationName: 'getUserProfile',
                query: 'query getUserProfile {\n  user {\n    userProfile {\n      email\n      firstName\n      lastName\n    }\n  }\n}',
                variables: undefined,
            };
            const token = 'no-good';
            (0, nock_1.default)(config_js_1.WARMUP_GRAPHQL_BASE_URL).post(config_js_1.WARMUP_GRAPHQL_PATH).reply(status, response);
            // Act & Assert
            await node_assert_1.default.rejects(() => (0, make_gql_query_js_1.default)(body, token), expected);
        });
    }
});
(0, node_test_1.it)('should return the token if a 200 response is received along with the token', async () => {
    // Arrange
    const body = {
        operationName: 'getUserProfile',
        query: 'query getUserProfile {\n  user {\n    userProfile {\n      email\n      firstName\n      lastName\n    }\n  }\n}',
        variables: undefined,
    };
    const token = 'good';
    const expected = {
        status: {
            result: 'success',
        },
        data: {
            user: {
                userProfile: {
                    email: 'valid@test.com',
                    firstName: 'Test',
                    lastName: 'User',
                },
            },
        },
        message: {
            duration: '0.075',
        },
    };
    (0, nock_1.default)(config_js_1.WARMUP_GRAPHQL_BASE_URL).post(config_js_1.WARMUP_GRAPHQL_PATH).reply(200, expected);
    // Act
    const response = await (0, make_gql_query_js_1.default)(body, token);
    // Assert
    node_assert_1.default.ok(response);
    node_assert_1.default.deepEqual(response, expected);
});
//# sourceMappingURL=make-gql-query.test.js.map