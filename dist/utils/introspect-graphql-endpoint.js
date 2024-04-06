import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import makeRequest from '../make-request.js';
import { WARMUP_GRAPHQL_BASE_URL, WARMUP_GRAPHQL_PATH } from '../config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Introspects the Warmup GraphQL endpoint for the JSON schema
 * @param {string} token The authentication token
 * @returns {Promise<import('graphql').IntrospectionQuery>} The introspection JSON schema
 */
const introspectGraphQLEndpoint = async (token) => {
  // Query based on https://learning.atheros.ai/blog/graphql-introspection-and-introspection-queries
  const introspectionQuery = await readFileSync(join(__dirname, 'introspection-query.graphql'), {
    encoding: 'utf-8',
  });

  const body = JSON.stringify({
    operationName: 'introspect',
    query: introspectionQuery,
    variables: null,
  });

  return (await makeRequest({ url: `${WARMUP_GRAPHQL_BASE_URL}${WARMUP_GRAPHQL_PATH}`, body, token })).data;
};

export default introspectGraphQLEndpoint;
