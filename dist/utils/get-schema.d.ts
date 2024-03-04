export default getSchema;
/**
 * Gets the schema from an introspection query result. See https://graphql.org/graphql-js/utilities/#buildclientschema
 * @param {graphql.IntrospectionQuery} data
 * @returns {String} The schema
 */
declare function getSchema(data: graphql.IntrospectionQuery): string;
//# sourceMappingURL=get-schema.d.ts.map