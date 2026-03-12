import { PatientLayout } from "@/layouts/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/patients/$patientId")({
  component: () => <PatientLayout />,
});
