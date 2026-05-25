import { DoctorPanelPages } from "@/pages/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_protected/d/patients/$patientId/files/$fileId",
)({
  component: () => <DoctorPanelPages.FilePage />,
});
