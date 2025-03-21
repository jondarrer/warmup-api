import { makeRequest, type IMakeRequestGQLResponse } from './make-request';

import { WARMUP_GRAPHQL_BASE_URL, WARMUP_GRAPHQL_PATH } from './config';
import { HeatingMutation, HeatingQuery } from './types';

interface IGQLQuery {
  operationName: string;
  query: string;
  variables?: object;
}

/**
 * Performs a GraphQL query against the Warmup GraphQL endpoint. For schema details refer to https://github.com/jondarrer/warmup-api/warmup-schema.graphql
 * @throws When a 4xx or 5xx response code is received
 */
export default async <T = HeatingQuery | HeatingMutation>(
  query: IGQLQuery,
  token: string
): Promise<IMakeRequestGQLResponse<T>> => {
  return (await makeRequest({
    url: `${WARMUP_GRAPHQL_BASE_URL}${WARMUP_GRAPHQL_PATH}`,
    body: JSON.stringify(query),
    token,
  })) as IMakeRequestGQLResponse<T>;
};
