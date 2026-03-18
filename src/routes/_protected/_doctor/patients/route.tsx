import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/_doctor/patients")({
  component: () => <Outlet />,
});
