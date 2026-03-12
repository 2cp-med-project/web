import { DashboardPage } from "@/pages/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/_app/_dashboard/")({
  component: () => <DashboardPage />,
});
