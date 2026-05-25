import { BaseAPIError } from "./base.ts";

export class FetchProfileError extends BaseAPIError {
  constructor() {
    super("Failed to fetch user profile");
    this.name = "FetchProfileError";
  }
}
