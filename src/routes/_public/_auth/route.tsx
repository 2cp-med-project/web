import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/_auth")({
  beforeLoad: ({ context }) => {
    if (context.auth.user !== null && !context.auth.isAuthenticating) {
      throw redirect({
        to: "/",
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="h-screen bg-linear-to-r from-foreground/10 to-foreground/4">
      <Outlet />
    </main>
  );
}
