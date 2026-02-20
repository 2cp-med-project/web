import { Theme } from "@radix-ui/themes";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <Theme accentColor="green">
      <Outlet />
      <TanStackRouterDevtools />
    </Theme>
  ),
});
