"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
/**
 * Gets the schema from an introspection query result. See https://graphql.org/graphql-js/utilities/#buildclientschema
 * @param {graphql.IntrospectionQuery} data
 * @returns {String} The schema
 */
const getSchema = (data) => (0, graphql_1.printSchema)((0, graphql_1.buildClientSchema)(data));
exports.default = getSchema;
//# sourceMappingURL=get-schema.js.map