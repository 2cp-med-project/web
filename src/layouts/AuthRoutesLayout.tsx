import { Outlet } from "@tanstack/react-router";

export function AuthRoutesLayout() {
  return (
    <main className="h-screen bg-linear-to-r from-foreground/10 to-foreground/4">
      <Outlet />
    </main>
  );
}
