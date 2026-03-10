import { BaseAPIError } from "./base.ts";

export class PatientNotFoundError extends BaseAPIError {
  constructor(id: string) {
    super(`Patient ${id} non trouvé`);
    this.name = "PatientNotFoundError";
  }
}
