import { type IMakeRequestGQLResponse } from './make-request';
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
declare const _default: <T = HeatingQuery | HeatingMutation>(query: IGQLQuery, token: string) => Promise<IMakeRequestGQLResponse<T>>;
export default _default;
