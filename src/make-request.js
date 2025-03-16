import { WARMUP_APP_TOKEN, WARMUP_APP_USER_AGENT } from './config.js';

/**
 * Make a request to either the Warmup API or GraphQL endpoint
 *
 * @param {Object} params
 * @param {string} params.url Should be either the API or GraphQL endpoint url
 * @param {string} params.body The POST request body
 * @param {string} [params.token] The token, if making a request which requires an authentication token
 * @returns {Promise<any>} The response
 * @throws When a 4xx or 5xx response code is received
 */
const makeRequest = async ({ url, body, token }) => {
  const authHeader = {};
  if (token) {
    authHeader['warmup-authorization'] = token;
  }

  // console.log('makeRequest', { url, body, token });

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'user-agent': WARMUP_APP_USER_AGENT,
      'accept-encoding': 'br, gzip, deflate',
      accept: '*/*',
      connection: 'keep-alive',
      'content-type': 'application/json',
      'app-token': WARMUP_APP_TOKEN,
      'app-version': '1.8.1',
      'accept-language': 'en-GB',
      ...authHeader,
    },
    body,
  });

  if (!response.ok) {
    throw new Error(`Error attempting request for ${url}: ${response.status} ${response.statusText}`);
  }

  const result = /** @type {any} */ (await response.json());
  if (result?.status?.result === 'error') {
    throw new Error(`Error attempting request for ${url}: Responded with error code ${result?.response?.errorCode}`);
  }
  if (result?.status === 'error') {
    throw new Error(`Error attempting request for ${url}: Responded with errors ${JSON.stringify(result?.errors)}`);
  }
  return result;
};

export default makeRequest;
