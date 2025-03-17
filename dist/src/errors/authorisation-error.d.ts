export declare class AuthorisationError extends Error {
    message: string;
    errorCode: number;
    constructor(message: string, errorCode: number);
}
