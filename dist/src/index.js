"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnexpectedError = exports.AuthorisationError = exports.InvalidCredentialsError = exports.makeGQLQuery = exports.getToken = void 0;
const get_token_js_1 = __importDefault(require("./get-token.js"));
exports.getToken = get_token_js_1.default;
const make_gql_query_js_1 = __importDefault(require("./make-gql-query.js"));
exports.makeGQLQuery = make_gql_query_js_1.default;
const index_js_1 = require("./errors/index.js");
Object.defineProperty(exports, "InvalidCredentialsError", { enumerable: true, get: function () { return index_js_1.InvalidCredentialsError; } });
Object.defineProperty(exports, "AuthorisationError", { enumerable: true, get: function () { return index_js_1.AuthorisationError; } });
Object.defineProperty(exports, "UnexpectedError", { enumerable: true, get: function () { return index_js_1.UnexpectedError; } });
//# sourceMappingURL=index.js.map