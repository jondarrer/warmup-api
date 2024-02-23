const nock = require('nock');

const getToken = require('./get-token');

const { WARMUP_TOKEN_URL, WARMUP_APP_TOKEN } = require('./constants');

afterEach(async () => {
  nock.cleanAll();
  jest.clearAllMocks();
});

it.todo('should throw an error if a 500 error response is received');
it.todo('should throw an error if a 403 error response is received');
it.todo('should throw an error if a 401 error response is received');
it.todo('should return the token if a 200 response is received but without a token');
it.todo('should return the token if a 200 response is received along with the token');
