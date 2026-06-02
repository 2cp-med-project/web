export type HealbotMessage = {
  role: string;
  content: string;
};

export type HealbotConversationSummary = {
  id: string;
  title: string;
};

export type HealbotConversation = HealbotConversationSummary & {
  messages: HealbotMessage[];
};
