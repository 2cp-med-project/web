import { DoctorPanelPages } from "@/pages/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/d/_protected/_app/chat")({
  component: () => <DoctorPanelPages.ChatPage />,
});
