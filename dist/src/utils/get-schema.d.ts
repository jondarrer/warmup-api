import { type IntrospectionQuery } from 'graphql';
/**
 * Gets the schema from an introspection query result. See https://graphql.org/graphql-js/utilities/#buildclientschema
 * @param {graphql.IntrospectionQuery} data
 * @returns {String} The schema
 */
declare const getSchema: (data: IntrospectionQuery) => string;
export default getSchema;
