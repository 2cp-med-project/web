import { DoctorPanelPages } from "@/pages/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/d/_app/scan")({
  component: () => <DoctorPanelPages.ScanPage />,
});
