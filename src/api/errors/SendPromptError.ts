import { BaseAPIError } from "./base.ts";

export class SendPromptError extends BaseAPIError {
  constructor() {
    super("Failed to send prompt");
    this.name = "SendPromptError";
  }
}
