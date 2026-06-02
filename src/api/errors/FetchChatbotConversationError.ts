import { BaseAPIError } from "./base.ts";

export class FetchChatbotConversationError extends BaseAPIError {
  constructor() {
    super("Failed to fetch chatbot conversation");
    this.name = "FetchChatbotConversationError";
  }
}
