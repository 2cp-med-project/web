import { createFileRoute } from "@tanstack/react-router";
import { RegisterPage } from "../../../pages/Register.tsx";

export const Route = createFileRoute("/_auth/register/")({
  component: () => <RegisterPage />,
});
