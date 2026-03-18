import { AppLayout } from "@/layouts/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/_shared/_app")({
  component: () => <AppLayout />,
});
