export type HealbotMessage = {
  id: string;
  author: "assistant" | "patient";
  content: string;
  timestamp: string;
};

export type HealbotConversationSummary = {
  id: string;
  title: string;
  preview: string;
};

export type HealbotConversation = HealbotConversationSummary & {
  assistantName: string;
  assistantStatus: string;
  messages: HealbotMessage[];
  promptOptions: string[];
};
