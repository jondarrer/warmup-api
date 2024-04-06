import nock from 'nock';

import getToken from './get-token.js';
import { InvalidCredentialsError, AuthorisationError, UnexpectedError } from './errors/index.js';

import { WARMUP_TOKEN_BASE_URL, WARMUP_TOKEN_V1_PATH } from './config.js';

afterEach(async () => {
  nock.cleanAll();
});

it.each([
  {
    status: 200,
    response: { status: { result: 'error' }, response: { errorCode: 101 } },
    expected: new InvalidCredentialsError('Invalid email address/password', 101),
  },
  {
    status: 200,
    response: { status: { result: 'error' }, response: { errorCode: 112 } },
    expected: new InvalidCredentialsError('Unrecognised email address', 112),
  },
  {
    status: 200,
    response: { status: { result: 'error' }, response: { errorCode: 124 } },
    expected: new InvalidCredentialsError('Invalid password', 124),
  },
  {
    status: 200,
    response: { status: { result: 'error' }, response: { errorCode: 100 } },
    expected: new UnexpectedError('Error attempting request for https://api.warmup.com/apps/app/v1', 100),
  },
  {
    status: 500,
    response: 'Internal Server Error',
    expected: new UnexpectedError('Error attempting request for https://api.warmup.com/apps/app/v1: ', 500), // Nock doesn't allow us to set the statusText properly
  },
  {
    status: 403,
    response: 'Forbidden',
    expected: new UnexpectedError('Error attempting request for https://api.warmup.com/apps/app/v1: ', 403), // Nock doesn't allow us to set the statusText properly
  },
  {
    status: 401,
    response: 'Unauthorized',
    expected: new AuthorisationError('Error attempting request for https://api.warmup.com/apps/app/v1'),
  },
])(
  'should throw an error if a $status error response is received or an error object is returned',
  async ({ status, response, expected }) => {
    // Arrange
    const email = 'not-right@test.com';
    const password = 'no-good';
    nock(WARMUP_TOKEN_BASE_URL).post(WARMUP_TOKEN_V1_PATH).reply(status, response);

    // Act & Assert
    await expect(() => getToken(email, password)).rejects.toThrow(expected);
  }
);

it('should return the token if a 200 response is received along with the token', async () => {
  // Arrange
  const email = 'valid@test.com';
  const password = 'good';
  const token = 'abcDE';
  nock(WARMUP_TOKEN_BASE_URL)
    .post(WARMUP_TOKEN_V1_PATH)
    .reply(200, {
      status: {
        result: 'success',
      },
      response: {
        method: 'userLogin',
        token,
        mobileName: null,
      },
      message: {
        duration: '0.075',
      },
    });

  // Act
  const response = await getToken(email, password);

  // Assert
  expect(response).toBeDefined();
  expect(response).toBe(token);
});
