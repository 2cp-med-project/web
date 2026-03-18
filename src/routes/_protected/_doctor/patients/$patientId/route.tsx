import { PatientsRoutesLayout } from "@/layouts/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/_doctor/patients/$patientId")({
  component: () => <PatientsRoutesLayout />,
});
