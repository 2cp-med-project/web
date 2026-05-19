import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/a/_app/settings")({
  component: () => <Outlet />,
});