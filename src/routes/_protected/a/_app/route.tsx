import { AdminRoutesLayout } from "@/layouts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/a/_app")({
  component: () => <AdminRoutesLayout.App />,
});