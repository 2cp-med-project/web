import { AuthRoutesLayout } from "@/layouts/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/_auth")({
  component: () => <AuthRoutesLayout />,
});
