import { HeatingMutation, HeatingQuery } from './types';
export interface IMakeRequestParams {
    url: string;
    body: string;
    token?: string;
}
export interface IMakeRequestTokenResponse {
    response: {
        token: string;
    };
}
export interface IMakeRequestGQLResponse<T = HeatingQuery | HeatingMutation> {
    data: T;
}
type MakeRequestResponse = IMakeRequestTokenResponse | IMakeRequestGQLResponse;
/**
 * Make a request to either the Warmup API or GraphQL endpoint
 *
 * @throws When a 4xx or 5xx response code is received
 */
export declare const makeRequest: ({ url, body, token }: IMakeRequestParams) => Promise<MakeRequestResponse>;
export default makeRequest;
