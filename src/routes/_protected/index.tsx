import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage } from "../../pages/index.ts";

export const Route = createFileRoute("/_protected/")({
  component: () => <DashboardPage />,
});
