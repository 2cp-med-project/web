import { DoctorRoutesLayout } from "@/layouts/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/_doctor/patients/$patientId")({
  component: () => <DoctorRoutesLayout.Patients />,
});
