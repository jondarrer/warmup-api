"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidCredentialsError = void 0;
class InvalidCredentialsError extends Error {
    message;
    errorCode;
    // eslint-disable-next-line no-unused-vars
    constructor(message, errorCode) {
        super(message);
        this.message = message;
        this.errorCode = errorCode;
    }
}
exports.InvalidCredentialsError = InvalidCredentialsError;
//# sourceMappingURL=invalid-credentials-error.js.map