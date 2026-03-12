import { ChatContextProvider } from "@/features/Chat";
import { ChatPage } from "@/pages/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/_app/chat")({
  component: () => (
    <ChatContextProvider>
      <ChatPage />
    </ChatContextProvider>
  ),
});
