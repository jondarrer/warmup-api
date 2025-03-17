import { type IntrospectionQuery } from 'graphql';
/**
 * Introspects the Warmup GraphQL endpoint for the JSON schema
 * @param {string} token The authentication token
 * @returns {Promise<IntrospectionQuery>} The introspection JSON schema
 */
declare const introspectGraphQLEndpoint: (token: string) => Promise<IntrospectionQuery>;
export default introspectGraphQLEndpoint;
