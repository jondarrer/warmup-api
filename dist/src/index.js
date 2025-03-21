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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = exports.UnexpectedError = exports.AuthorisationError = exports.InvalidCredentialsError = exports.makeGQLQuery = exports.getToken = void 0;
const get_token_1 = __importDefault(require("./get-token"));
exports.getToken = get_token_1.default;
const make_gql_query_1 = __importDefault(require("./make-gql-query"));
exports.makeGQLQuery = make_gql_query_1.default;
const index_1 = require("./errors/index");
Object.defineProperty(exports, "InvalidCredentialsError", { enumerable: true, get: function () { return index_1.InvalidCredentialsError; } });
Object.defineProperty(exports, "AuthorisationError", { enumerable: true, get: function () { return index_1.AuthorisationError; } });
Object.defineProperty(exports, "UnexpectedError", { enumerable: true, get: function () { return index_1.UnexpectedError; } });
exports.types = __importStar(require("./types"));
//# sourceMappingURL=index.js.map