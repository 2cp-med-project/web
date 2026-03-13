import { PatientReportPage } from "@/pages/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/patients/$patientId/report")({
  component: () => <PatientReportPage />,
});
