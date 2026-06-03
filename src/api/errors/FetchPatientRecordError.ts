import { BaseAPIError } from "./base.ts";

export class FetchPatientRecordError extends BaseAPIError {
  constructor() {
    super("Failed to fetch patient record");
    this.name = "FetchPatientRecordError";
  }
}
