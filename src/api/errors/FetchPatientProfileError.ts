import { BaseAPIError } from "./base.ts";

export class FetchPatientProfileError extends BaseAPIError {
  constructor() {
    super("Failed to fetch patient profile");
    this.name = "FetchPatientProfileError";
  }
}
