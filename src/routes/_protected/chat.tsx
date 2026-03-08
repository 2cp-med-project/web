import { ChatContextProvider } from "@/features/Chat";
import { ChatPage } from "@/pages/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/chat")({
  component: () => (
    <ChatContextProvider>
      <ChatPage />
    </ChatContextProvider>
  ),
});
