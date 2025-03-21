"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorisationError = void 0;
class AuthorisationError extends Error {
    message;
    errorCode;
    // eslint-disable-next-line no-unused-vars
    constructor(message, errorCode) {
        super(message);
        this.message = message;
        this.errorCode = errorCode;
    }
}
exports.AuthorisationError = AuthorisationError;
//# sourceMappingURL=authorisation-error.js.map