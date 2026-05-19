import { DoctorRoutesLayout } from "@/layouts/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/d/patients/$patientId")({
  component: () => <DoctorRoutesLayout.Patients />,
});
