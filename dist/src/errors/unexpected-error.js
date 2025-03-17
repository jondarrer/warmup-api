"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnexpectedError = void 0;
class UnexpectedError extends Error {
    message;
    errorCode;
    // eslint-disable-next-line no-unused-vars
    constructor(message, errorCode) {
        super(message);
        this.message = message;
        this.errorCode = errorCode;
    }
}
exports.UnexpectedError = UnexpectedError;
//# sourceMappingURL=unexpected-error.js.map