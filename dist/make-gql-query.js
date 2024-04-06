import makeRequest from './make-request.js';

import { WARMUP_GRAPHQL_BASE_URL, WARMUP_GRAPHQL_PATH } from './config.js';

/**
 * Performs a GraphQL query against the Warmup GraphQL endpoint. For schema details refer to https://github.com/jondarrer/warmup-api/warmup-schema.graphql
 *
 * @param {{operationName: string, query: string, variables?: object}} query GraphQL query
 * @param {string} token Access token
 * @returns {Promise<object>} The query response
 * @throws When a 4xx or 5xx response code is received
 */
export default async (query, token) => {
  return await makeRequest({
    url: `${WARMUP_GRAPHQL_BASE_URL}${WARMUP_GRAPHQL_PATH}`,
    body: JSON.stringify(query),
    token,
  });
};
