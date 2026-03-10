export class BaseAPIError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "APIError";
  }
}
