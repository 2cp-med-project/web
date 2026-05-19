import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/d/_protected/_app/settings")({
  component: () => <Outlet />,
});
