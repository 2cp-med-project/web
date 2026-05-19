import { DoctorRoutesLayout } from "@/layouts/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/d/_protected/patients/$patientId")({
  component: () => <DoctorRoutesLayout.Patients />,
});
