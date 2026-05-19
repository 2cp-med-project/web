import { AdminRoutesLayout } from "@/layouts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/a/_protected/_app")({
  component: () => <AdminRoutesLayout.App />,
});