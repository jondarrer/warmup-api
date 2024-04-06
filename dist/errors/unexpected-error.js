export class UnexpectedError extends Error {
  /**
   *
   * @param {string} message
   * @param {number} errorCode
   */
  constructor(message, errorCode) {
    super(message);

    this.errorCode = errorCode;
  }
}
