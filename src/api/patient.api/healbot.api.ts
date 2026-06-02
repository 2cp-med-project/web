import type { HealbotConversationSummary } from "@/types/healbot.ts";
import { api, request } from "../client.ts";

type FetchConversationsResponseBody = {
  chats: (Omit<HealbotConversationSummary, "id"> & {
    _id: string;
  })[];
  success: true;
};

// GET /chatbot
export const fetchConversations = (_patientId: string) => {
  return request(async () => {
    const res = await api.get<FetchConversationsResponseBody>("/chatbot");
    return res.data;
  });
};

type FetchConversationResponseBody = {
  threadId: string;
  title: string;
  history: { role: "user" | "assistant"; content: string }[];
};

// GET /healbot/:threadId
export const fetchConversation = (threadId: string) => {
  return request(async () => {
    const route = `/chatbot/${threadId}`;
    const res = await api.get<FetchConversationResponseBody>(route);
    return res.data;
  });
};

type StartConversationResponseBody = {
  threadId: string;
  title: string;
  response: string;
};

// POST /chatbot
export const startConversation = (prompt: string) => {
  return request(async () => {
    const res = await api.post<StartConversationResponseBody>("/chatbot", {
      prompt,
    });
    return res.data;
  });
};

type SendPromptResponseBody = {
  threadId: string;
  title: string;
  response: string;
};

// POST /chatbot/:threadId
export const sendPrompt = (threadId: string, prompt: string) => {
  return request(async () => {
    const route = `/chatbot/${threadId}`;
    const res = await api.post<SendPromptResponseBody>(route, {
      prompt,
    });
    return res.data;
  });
};
