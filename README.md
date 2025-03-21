# warmup-api <!-- omit in toc -->

An API for communicating with a wifi-enabled home thermostat made by Warmup.

![Coverage Badge](./coverage-badge.svg)

- [Using this library](#using-this-library)
  - [Installation](#installation)
  - [Usage](#usage)
- [Developing](#developing)
  - [Regenerating the schema and TypeScript types](#regenerating-the-schema-and-typescript-types)
  - [Testing](#testing)

## Using this library

### Installation

Install with:

```sh
npm install --save warmup-api
```

### Usage

Currently, there are only a couple of pieces of functionality available: getting an access token and calling the GraphQL endpoint.

The `makeGQLQuery` supports TypeScript types, derived from the WarmUp schema, and you will pass in either `HeatingMutation` or `HeatingQuery` to assist type checking.

```ts
import { getToken, makeGQLQuery, type HeatingMutation, type HeatingQuery } from 'warmup-api';

const token = await getToken('email', 'password'); // Email and password from the user's my.warmup.com account
const getUserProfileQuery = {
  operationName: "getUserProfile",
  query: "query getUserProfile {\n  user {\n    userProfile {\n      email\n      firstName\n      lastName\n    }\n  }\n}",
  variables: null
};
const { data: { user: { userProfile } } } = await makeGQLQuery<HeatingQuery>(getUserProfileQuery, token);
console.log(userProfile.email, userProfile.firstName, userProfile.lastName );
```

```js
import { getToken, makeGQLQuery } from 'warmup-api';

const token = await getToken('email', 'password'); // Email and password from the user's my.warmup.com account
const getUserProfileQuery = {
  operationName: "getUserProfile",
  query: "query getUserProfile {\n  user {\n    userProfile {\n      email\n      firstName\n      lastName\n    }\n  }\n}",
  variables: null
};
const { data: { user: { userProfile } } } = await makeGQLQuery(getUserProfileQuery, token);
console.log(userProfile.email, userProfile.firstName, userProfile.lastName );
```

The full Warmup GraphQL schema can be found [./warmup-schema.graphql](./warmup-schema.graphql).

## Developing

### Regenerating the schema and TypeScript types

The schema, located at [./warmup-schema.graphql](./warmup-schema.graphql) and derived TypeScript types in [src/types.ts](./src/types.ts) can be regenerated at any time by running (using Node >= 20.x):

```sh
EMAIL="" PASSWORD="" npm run create-warmup-schema
npm run codegen
```

There are a variety of helpful queries in [./http-requests.http](./http-requests.http); these require the following in a `.env` file which you will need to create: NB. See the first query for how to obtain an auth token.

```sh
EMAIL=""
PASSWORD=""
AUTH_TOKEN=""
```

### Testing

Run the tests with the usual command:

```sh
npm test
```

This will run the tests with a coverage report (requires 100% across the board to pass), which you can view with:

```sh
open coverage/lcov-report/index.html
```
