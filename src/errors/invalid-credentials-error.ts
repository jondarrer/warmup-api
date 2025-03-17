export class InvalidCredentialsError extends Error {
  // eslint-disable-next-line no-unused-vars
  constructor(
    public message: string,
    public errorCode: number
  ) {
    super(message);
  }
}
