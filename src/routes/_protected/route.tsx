import { ProtectedRoutesLayout } from "@/layouts/ProtectedRoutesLayout.tsx";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected")({
  component: () => <ProtectedRoutesLayout />,
});
