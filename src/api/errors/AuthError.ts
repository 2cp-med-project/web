import { BaseAPIError } from "./base.ts";

export class AuthError extends BaseAPIError {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "AuthError";
    this.status = status;
  }
}
