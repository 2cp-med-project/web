import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_guest/p")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}
