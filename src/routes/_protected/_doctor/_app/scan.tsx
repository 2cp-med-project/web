import { DoctorPanelPages } from "@/pages/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/_doctor/_app/scan")({
  component: () => <DoctorPanelPages.ScanPage />,
});
