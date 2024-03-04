import nock from 'nock';

import getToken from './get-token.js';

import { WARMUP_TOKEN_BASE_URL, WARMUP_TOKEN_V1_PATH } from './config.js';

afterEach(async () => {
  nock.cleanAll();
});

it.each([
  {
    status: 500,
    message: 'Internal Server Error',
    expected: 'Error attempting request for https://api.warmup.com/apps/app/v1: 500 ', // Nock doesn't allow us to set the statusText proplerly
  },
  {
    status: 403,
    message: 'Forbidden',
    expected: 'Error attempting request for https://api.warmup.com/apps/app/v1: 403 ', // Nock doesn't allow us to set the statusText proplerly
  },
  {
    status: 401,
    message: 'Unauthorized',
    expected: 'Error attempting request for https://api.warmup.com/apps/app/v1: 401 ', // Nock doesn't allow us to set the statusText proplerly
  },
])('should throw an error if a $status error response is received', async ({ status, message, expected }) => {
  // Arrange
  const email = 'not-right@test.com';
  const password = 'no-good';
  nock(WARMUP_TOKEN_BASE_URL).post(WARMUP_TOKEN_V1_PATH).reply(status, message);

  // Act & Assert
  await expect(() => getToken(email, password)).rejects.toThrow(new Error(expected));
});

it('should throw an error if a status.result=error response is received', async () => {
  // Arrange
  const email = 'valid@test.com';
  const password = 'good';
  nock(WARMUP_TOKEN_BASE_URL)
    .post(WARMUP_TOKEN_V1_PATH)
    .reply(200, {
      status: {
        result: 'error',
      },
      response: {
        errorCode: 100,
      },
    });

  // Act & Assert
  await expect(() => getToken(email, password)).rejects.toThrow(
    new Error('Error attempting request for https://api.warmup.com/apps/app/v1: Responded with error code 100')
  );
});

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
