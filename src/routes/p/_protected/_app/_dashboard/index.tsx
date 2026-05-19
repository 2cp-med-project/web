import { PatientPanelPages } from "@/pages/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/p/_protected/_app/_dashboard/")({
  component: () => <PatientPanelPages.DashboardPage />,
});
