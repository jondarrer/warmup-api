import { writeFileSync } from 'node:fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import getToken from '../get-token.js';
import introspectGraphQLEndpoint from './introspect-graphql-endpoint.js';
import getSchema from './get-schema.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const createWarmupSchema = async () => {
  const email = process.env.USERNAME;
  const password = process.env.PASSWORD;

  const token = await getToken(email, password);
  const introspectionQuery = await introspectGraphQLEndpoint(token);
  const schema = getSchema(introspectionQuery);

  writeFileSync(join(__dirname, '..', '..', 'warmup-schema.graphql'), schema);
};

await createWarmupSchema();
