import { RegisterPatientPage } from "@/pages/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/_auth/register/patient")({
  component: () => <RegisterPatientPage />,
});
