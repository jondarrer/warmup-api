"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
const make_request_js_1 = require("../src/make-request.js");
const config_js_1 = require("../src/config.js");
/**
 * Introspects the Warmup GraphQL endpoint for the JSON schema
 * @param {string} token The authentication token
 * @returns {Promise<IntrospectionQuery>} The introspection JSON schema
 */
const introspectGraphQLEndpoint = async (token) => {
    // Query based on https://learning.atheros.ai/blog/graphql-introspection-and-introspection-queries
    const introspectionQuery = await (0, node_fs_1.readFileSync)((0, node_path_1.join)(__dirname, 'introspection-query.graphql'), {
        encoding: 'utf-8',
    });
    const body = JSON.stringify({
        operationName: 'introspect',
        query: introspectionQuery,
        variables: null,
    });
    return (await (0, make_request_js_1.makeRequest)({
        url: `${config_js_1.WARMUP_GRAPHQL_BASE_URL}${config_js_1.WARMUP_GRAPHQL_PATH}`, body, token
    }))
        .data;
};
exports.default = introspectGraphQLEndpoint;
//# sourceMappingURL=introspect-graphql-endpoint.js.map