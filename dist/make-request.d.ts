export default makeRequest;
/**
 * Make a request to either the Warmup API or GraphQL endpoint
 *
 * @param {Object} params
 * @param {string} params.url Should be either the API or GraphQL endpoint url
 * @param {string} params.body The POST request body
 * @param {string} [params.token] The token, if making a request which requires an authentication token
 * @returns {Promise<any>} The response
 * @throws When a 4xx or 5xx response code is received
 */
declare function makeRequest({ url, body, token }: {
    url: string;
    body: string;
    token?: string;
}): Promise<any>;
//# sourceMappingURL=make-request.d.ts.map