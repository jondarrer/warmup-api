import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { type IntrospectionQuery } from 'graphql';

import { makeRequest, IMakeRequestGQLResponse } from '../src/make-request.js';
import { WARMUP_GRAPHQL_BASE_URL, WARMUP_GRAPHQL_PATH } from '../src/config.js';

/**
 * Introspects the Warmup GraphQL endpoint for the JSON schema
 * @param {string} token The authentication token
 * @returns {Promise<IntrospectionQuery>} The introspection JSON schema
 */
const introspectGraphQLEndpoint = async (token: string): Promise<IntrospectionQuery> => {
  // Query based on https://learning.atheros.ai/blog/graphql-introspection-and-introspection-queries
  const introspectionQuery = await readFileSync(join(__dirname, 'introspection-query.graphql'), {
    encoding: 'utf-8',
  });

  const body = JSON.stringify({
    operationName: 'introspect',
    query: introspectionQuery,
    variables: null,
  });

  return ((
    await makeRequest({
      url: `${WARMUP_GRAPHQL_BASE_URL}${WARMUP_GRAPHQL_PATH}`, body, token
    })) as IMakeRequestGQLResponse
  )
    .data as IntrospectionQuery;
};

export default introspectGraphQLEndpoint;
