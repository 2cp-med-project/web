import { AdminRoutesLayout } from "@/layouts/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/a/_app/settings/")({
  component: () => <AdminRoutesLayout.Settings />,
});
