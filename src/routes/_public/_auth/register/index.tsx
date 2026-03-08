import { createFileRoute } from "@tanstack/react-router";
import { RegisterPage } from "../../../../pages/index.ts";

export const Route = createFileRoute("/_public/_auth/register/")({
  component: () => <RegisterPage />,
});
