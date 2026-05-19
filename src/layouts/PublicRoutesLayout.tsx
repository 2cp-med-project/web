import { getRoleHomeRoute } from "@/constants/routes.ts";
import { useAuthContext } from "@/context/auth.tsx";
import { Navigate, Outlet, useRouterState } from "@tanstack/react-router";

export function PublicRoutesLayout() {
  const { user, isAuthenticating } = useAuthContext();
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  if (user !== null && !isAuthenticating) {
    return <Navigate to={getRoleHomeRoute(user.role)} />;
  }

  if (user === null && !isAuthenticating && pathname === "/") {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
