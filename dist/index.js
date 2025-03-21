"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
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
__exportStar(require("./types.js"), exports);
//# sourceMappingURL=index.js.map