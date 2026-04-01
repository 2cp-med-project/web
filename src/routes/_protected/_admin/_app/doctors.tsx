import { AdminPanelPages } from "@/pages/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/_admin/_app/doctors")({
  component: () => <AdminPanelPages.DoctorsPage />,
});
