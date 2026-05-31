import { BaseAPIError } from "./base.ts";

export class StartChatbotConversationError extends BaseAPIError {
  constructor() {
    super("Failed to start chatbot conversation");
    this.name = "StartChatbotConversationError";
  }
}
