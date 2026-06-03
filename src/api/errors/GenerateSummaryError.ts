import { BaseAPIError } from "./base.ts";

export class GenerateSummaryError extends BaseAPIError {
  constructor() {
    super("Failed to generate summary");
    this.name = "GenerateSummaryError";
  }
}
