import { AdminPanelPages } from "@/pages/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/a/_app/doctors")({
  component: () => <AdminPanelPages.DoctorsPage />,
});
