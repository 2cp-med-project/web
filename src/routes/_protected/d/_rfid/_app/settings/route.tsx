import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/d/_rfid/_app/settings")({
  component: () => <Outlet />,
});
