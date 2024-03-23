import nock from 'nock';

import makeGraphQLQuery from './make-gql-query.js';

import { WARMUP_GRAPHQL_BASE_URL, WARMUP_GRAPHQL_PATH } from './config.js';

afterEach(async () => {
  nock.cleanAll();
});

it.each([
  {
    status: 500,
    message: 'Internal Server Error',
    expected: 'Error attempting request for https://apil.warmup.com/graphql: 500 ', // Nock doesn't allow us to set the statusText properly
  },
  {
    status: 403,
    message: 'Forbidden',
    expected: 'Error attempting request for https://apil.warmup.com/graphql: 403 ', // Nock doesn't allow us to set the statusText properly
  },
  {
    status: 401,
    message: 'Unauthorized',
    expected: 'Error attempting request for https://apil.warmup.com/graphql: 401 ', // Nock doesn't allow us to set the statusText properly
  },
])('should throw an error if a $status error response is received', async ({ status, message, expected }) => {
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
  await expect(() => makeGraphQLQuery(body, token)).rejects.toThrow(new Error(expected));
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
  await expect(() => makeGraphQLQuery(body, token)).rejects.toThrow(
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
    status: {
      result: 'success',
    },
    data: {
      user: {
        userProfile: {
          email: 'valid@test.com',
          firstName: 'Test',
          lastName: 'User',
        },
      },
    },
    message: {
      duration: '0.075',
    },
  };
  nock(WARMUP_GRAPHQL_BASE_URL).post(WARMUP_GRAPHQL_PATH).reply(200, expected);

  // Act
  const response = await makeGraphQLQuery(body, token);

  // Assert
  expect(response).toBeDefined();
  expect(response).toEqual(expected);
});
