import { ChatContextProvider } from "@/features/DoctorPanel/Chat";
import { DoctorPanelPages } from "@/pages/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/_doctor/_app/chat")({
  component: () => (
    <ChatContextProvider>
      <DoctorPanelPages.ChatPage />
    </ChatContextProvider>
  ),
});
