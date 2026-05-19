import { AdminRoutesLayout } from "@/layouts/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/a/_protected/_app/settings/")({
  component: () => <AdminRoutesLayout.Settings />,
});
