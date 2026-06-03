import { BaseAPIError } from "./base.ts";

export class RequestAccessError extends BaseAPIError {
  constructor() {
    super("Failed to request access to patient");
    this.name = "RequestAccessError";
  }
}
