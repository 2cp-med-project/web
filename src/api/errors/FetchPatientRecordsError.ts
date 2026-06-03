import { BaseAPIError } from "./base.ts";

export class FetchPatientRecordsError extends BaseAPIError {
  constructor() {
    super("Failed to fetch patient records");
    this.name = "FetchPatientRecordsError";
  }
}
