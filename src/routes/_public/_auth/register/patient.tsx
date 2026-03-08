import { createFileRoute } from "@tanstack/react-router";
import { RegisterPatientPage } from "../../../../pages/index.ts";

export const Route = createFileRoute("/_public/_auth/register/patient")({
  component: () => <RegisterPatientPage />,
});
