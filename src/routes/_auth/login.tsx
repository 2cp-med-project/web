import { createFileRoute } from "@tanstack/react-router";
import { LoginPage } from "../../pages/index.ts";

export const Route = createFileRoute("/_auth/login")({
  component: () => <LoginPage />,
});
