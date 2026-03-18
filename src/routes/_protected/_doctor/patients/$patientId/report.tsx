import { DoctorPanelPages } from "@/pages/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/_doctor/patients/$patientId/report")({
  component: () => <DoctorPanelPages.PatientReportPage />,
});
