/**
 * Get a token by "logging in" to the Warmup API
 *
 * @param {string} email
 * @param {string} password
 * @returns {Promise<string>} The token
 * @throws When a 4xx or 5xx response code is received
 */
declare const _default: (email: string, password: string) => Promise<string>;
export default _default;
