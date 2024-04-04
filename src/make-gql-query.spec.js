import nock from 'nock';

import makeGraphQLQuery from './make-gql-query.js';
import { AuthorisationError, UnexpectedError } from './errors/index.js';

import { WARMUP_GRAPHQL_BASE_URL, WARMUP_GRAPHQL_PATH } from './config.js';

afterEach(async () => {
  nock.cleanAll();
});

it.each([
  {
    status: 200,
    response: { status: 'error', errors: [{ errorCode: 999, message: 'Some made up error occurred' }] },
    expected: new UnexpectedError(
      'Error attempting request for https://apil.warmup.com/graphql: Responded with errors [{"errorCode":999,"message":"Some made up error occurred"}]'
    ),
  },
  {
    status: 200,
    response: { status: { result: 'error' }, response: { errorCode: 100 } },
    expected: new UnexpectedError('Error attempting request for https://apil.warmup.com/graphql', 100),
  },
  {
    status: 500,
    response: 'Internal Server Error',
    expected: new UnexpectedError('Error attempting request for https://apil.warmup.com/graphql: ', 500), // Nock doesn't allow us to set the statusText properly
  },
  {
    status: 403,
    response: 'Forbidden',
    expected: new UnexpectedError('Error attempting request for https://apil.warmup.com/graphql: ', 403), // Nock doesn't allow us to set the statusText properly
  },
  {
    status: 401,
    response: 'Unauthorized',
    expected: new AuthorisationError('Error attempting request for https://apil.warmup.com/graphql'),
  },
])('should throw an error if a $status error response is received', async ({ status, response, expected }) => {
  // Arrange
  const body = {
    operationName: 'getUserProfile',
    query:
      'query getUserProfile {\n  user {\n    userProfile {\n      email\n      firstName\n      lastName\n    }\n  }\n}',
    variables: null,
  };
  const token = 'no-good';
  nock(WARMUP_GRAPHQL_BASE_URL).post(WARMUP_GRAPHQL_PATH).reply(status, response);

  // Act & Assert
  await expect(() => makeGraphQLQuery(body, token)).rejects.toThrow(expected);
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
