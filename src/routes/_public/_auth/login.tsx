import { createFileRoute } from "@tanstack/react-router";
import { LoginPage } from "../../../pages/index.ts";

export const Route = createFileRoute("/_public/_auth/login")({
  component: () => <LoginPage />,
});
