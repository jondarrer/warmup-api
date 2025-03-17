import { writeFileSync } from 'node:fs';
import { join } from 'path';

import getToken from '../src/get-token.js';
import introspectGraphQLEndpoint from './introspect-graphql-endpoint.js';
import getSchema from '../src/utils/get-schema.js';

const createWarmupSchema = async () => {
  const email = process.env.EMAIL || '';
  const password = process.env.PASSWORD || '';

  const token = await getToken(email, password);
  const introspectionQuery = await introspectGraphQLEndpoint(token);
  const schema = getSchema(introspectionQuery);

  writeFileSync(join(__dirname, '..', 'warmup-schema.graphql'), schema);
};
(async () => {
  await createWarmupSchema();
})();
