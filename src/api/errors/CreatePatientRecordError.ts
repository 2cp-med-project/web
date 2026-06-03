import { BaseAPIError } from "./base.ts";

export class CreatePatientRecordError extends BaseAPIError {
  constructor() {
    super("Failed to create patient record");
    this.name = "CreatePatientRecordError";
  }
}
