import { BaseAPIError } from "./base.ts";

export class FetchChatbotConversationsError extends BaseAPIError {
  constructor() {
    super("Failed to fetch chatbot conversations");
    this.name = "FetchChatbotConversationsError";
  }
}
