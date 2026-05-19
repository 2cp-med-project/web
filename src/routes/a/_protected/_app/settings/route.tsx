import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/a/_protected/_app/settings")({
  component: () => <Outlet />,
});