"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const make_request_js_1 = require("./make-request.js");
const config_js_1 = require("./config.js");
/**
 * Performs a GraphQL query against the Warmup GraphQL endpoint. For schema details refer to https://github.com/jondarrer/warmup-api/warmup-schema.graphql
 * @throws When a 4xx or 5xx response code is received
 */
exports.default = async (query, token) => {
    return await (0, make_request_js_1.makeRequest)({
        url: `${config_js_1.WARMUP_GRAPHQL_BASE_URL}${config_js_1.WARMUP_GRAPHQL_PATH}`,
        body: JSON.stringify(query),
        token,
    });
};
//# sourceMappingURL=make-gql-query.js.map