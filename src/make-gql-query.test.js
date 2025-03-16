import { describe, it, afterEach } from 'node:test';
import assert from 'node:assert';

import nock from 'nock';

import makeGraphQLQuery from './make-gql-query.js';

import { WARMUP_GRAPHQL_BASE_URL, WARMUP_GRAPHQL_PATH } from './config.js';

afterEach(async () => {
  nock.cleanAll();
});

describe('should throw an error if an error response is received', async () => {
  const tests = [
    {
      status: 500,
      message: 'Internal Server Error',
      expected: 'Error attempting request for https://apil.warmup.com/graphql: 500 Internal Server Error',
    },
    {
      status: 403,
      message: 'Forbidden',
      expected: 'Error attempting request for https://apil.warmup.com/graphql: 403 Forbidden',
    },
    {
      status: 401,
      message: 'Unauthorized',
      expected: 'Error attempting request for https://apil.warmup.com/graphql: 401 Unauthorized',
    },
  ];
  for (const { status, message, expected } of tests) {
    // Arrange
    const body = {
      operationName: 'getUserProfile',
      query:
        'query getUserProfile {\n  user {\n    userProfile {\n      email\n      firstName\n      lastName\n    }\n  }\n}',
      variables: null,
    };
    const token = 'no-good';
    nock(WARMUP_GRAPHQL_BASE_URL).post(WARMUP_GRAPHQL_PATH).reply(status, message);

    // Act & Assert
    await assert.rejects(() => makeGraphQLQuery(body, token), new Error(expected));
  }
});

it('should throw an error if a status.result=error response is received', async () => {
  // Arrange
  const body = {
    operationName: 'getUserProfile',
    query:
      'query getUserProfile {\n  user {\n    userProfile {\n      email\n      firstName\n      lastName\n    }\n  }\n}',
    variables: null,
  };
  const token = 'no-good';
  nock(WARMUP_GRAPHQL_BASE_URL)
    .post(WARMUP_GRAPHQL_PATH)
    .reply(200, {
      status: 'error',
      errors: [
        {
          errorCode: 11,
          message: 'Some unexpected error occurred',
        },
      ],
    });

  // Act & Assert
  await assert.rejects(
    () => makeGraphQLQuery(body, token),
    new Error(
      'Error attempting request for https://apil.warmup.com/graphql: Responded with errors [{"errorCode":11,"message":"Some unexpected error occurred"}]'
    )
  );
});

it('should return the token if a 200 response is received along with the token', async () => {
  // Arrange
  const body = {
    operationName: 'getUserProfile',
    query:
      'query getUserProfile {\n  user {\n    userProfile {\n      email\n      firstName\n      lastName\n    }\n  }\n}',
    variables: null,
  };
  const token = 'good';
  const expected = {
    user: {
      userProfile: {
        email: 'valid@test.com',
        firstName: 'Test',
        lastName: 'User',
      },
    },
  };
  nock(WARMUP_GRAPHQL_BASE_URL)
    .post(WARMUP_GRAPHQL_PATH)
    .reply(200, {
      status: {
        result: 'success',
      },
      response: {
        data: expected,
      },
      message: {
        duration: '0.075',
      },
    });

  // Act
  const response = await makeGraphQLQuery(body, token);

  // Assert
  assert.ok(response);
  assert.deepEqual(response, expected);
});
