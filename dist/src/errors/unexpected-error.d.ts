export declare class UnexpectedError extends Error {
    message: string;
    errorCode?: number | undefined;
    constructor(message: string, errorCode?: number | undefined);
}
