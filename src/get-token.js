import fetch from 'node-fetch';

import {
  WARMUP_TOKEN_BASE_URL,
  WARMUP_TOKEN_V1_PATH,
  WARMUP_APP_TOKEN,
  WARMUP_APP_USER_AGENT,
  WARMUP_APP_ID,
} from './constants';

/**
 * Get a token by "logging in" to the warmup API
 *
 * @param {string} email
 * @param {string} password
 * @returns {Promise<string>} The token
 * @throws When a 4xx or 5xx response code is received
 */
export default async (email, password) => {
  const headers = {
    'user-agent': WARMUP_APP_USER_AGENT,
    'accept-encoding': 'br, gzip, deflate',
    accept: '*/*',
    Connection: 'keep-alive',
    'content-type': 'application/json',
    'app-token': WARMUP_APP_TOKEN,
    'app-version': '1.8.1',
    'accept-language': 'en-gb',
  };
  const body = {
    request: {
      email,
      password,
      method: 'userLogin',
      appId: WARMUP_APP_ID,
    },
  };

  const response = await fetch(`${WARMUP_TOKEN_BASE_URL}${WARMUP_TOKEN_V1_PATH}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Error attempting to get token: ${response.status} ${response.statusText}`);
  }

  // @ts-ignore
  return (await response.json())?.response.token;
};
