import makeRequest from './make-request.js';

import { WARMUP_TOKEN_BASE_URL, WARMUP_TOKEN_V1_PATH, WARMUP_APP_ID } from './config.js';

/**
 * Get a token by "logging in" to the Warmup API
 *
 * @param {string} email
 * @param {string} password
 * @returns {Promise<string>} The token
 * @throws When a 4xx or 5xx response code is received
 */
export default async (email, password) => {
  const body = {
    request: {
      email,
      password,
      method: 'userLogin',
      appId: WARMUP_APP_ID,
    },
  };

  // @ts-ignore
  return (await makeRequest({ url: `${WARMUP_TOKEN_BASE_URL}${WARMUP_TOKEN_V1_PATH}`, body: JSON.stringify(body) }))
    .response.token;
};
