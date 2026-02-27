import { createFileRoute } from "@tanstack/react-router";
import { RegisterPatientPage } from "../../../pages/RegisterPatient.tsx";

export const Route = createFileRoute("/_auth/register/patient")({
  component: () => <RegisterPatientPage />,
});
