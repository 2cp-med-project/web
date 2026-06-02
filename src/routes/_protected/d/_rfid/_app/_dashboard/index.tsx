import { DoctorPanelPages } from "@/pages/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/d/_rfid/_app/_dashboard/")({
  component: () => <DoctorPanelPages.DashboardPage />,
});
