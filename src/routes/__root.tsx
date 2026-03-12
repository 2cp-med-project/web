import type { RouterContext } from "@/router.tsx";
import { Theme } from "@radix-ui/themes";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <Theme accentColor="green">
      <Outlet />
      <TanStackRouterDevtools />
    </Theme>
  ),
  notFoundComponent: () => <div>Global 404</div>,
});
