import { BaseAPIError } from "./base.ts";

export class AuthError extends BaseAPIError {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "AuthError";
    this.status = status;
  }
}

export class InvalidRefreshTokenError extends AuthError {
  constructor() {
    super("Invalid refresh token", 401);
  }
}

export class InvalidCredentialsError extends AuthError {
  constructor() {
    super("Invalid credentials", 401);
  }
}