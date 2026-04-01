import { AdminRoutesLayout } from "@/layouts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/_admin")({
  component: () => <AdminRoutesLayout.Role />,
});