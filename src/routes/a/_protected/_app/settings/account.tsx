import { AdminPanelPages } from "@/pages/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/a/_protected/_app/settings/account")({
  component: () => <AdminPanelPages.AccountSettingsPage />,
});
