import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="h-screen bg-linear-to-r from-foreground/10 to-foreground/4">
      <Outlet />
    </main>
  );
}
