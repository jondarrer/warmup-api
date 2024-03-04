import graphql from 'graphql';

/**
 * Gets the schema from an introspection query result. See https://graphql.org/graphql-js/utilities/#buildclientschema
 * @param {graphql.IntrospectionQuery} data
 * @returns {String} The schema
 */
const getSchema = (data) => graphql.printSchema(graphql.buildClientSchema(data));

export default getSchema;
