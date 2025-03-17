"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = require("node:fs");
const path_1 = require("path");
const get_token_js_1 = __importDefault(require("../src/get-token.js"));
const introspect_graphql_endpoint_js_1 = __importDefault(require("./introspect-graphql-endpoint.js"));
const get_schema_js_1 = __importDefault(require("../src/utils/get-schema.js"));
const createWarmupSchema = async () => {
    const email = process.env.EMAIL || '';
    const password = process.env.PASSWORD || '';
    const token = await (0, get_token_js_1.default)(email, password);
    const introspectionQuery = await (0, introspect_graphql_endpoint_js_1.default)(token);
    const schema = (0, get_schema_js_1.default)(introspectionQuery);
    (0, node_fs_1.writeFileSync)((0, path_1.join)(__dirname, '..', 'warmup-schema.graphql'), schema);
};
(async () => {
    await createWarmupSchema();
})();
//# sourceMappingURL=create-warmup-schema.js.map