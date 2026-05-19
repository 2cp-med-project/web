import { getRoleHomeRoute } from "@/constants/routes.ts";
import { useAuthContext } from "@/context/auth.tsx";
import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/")({
  component: RouteComponent,
});

function RouteComponent() {
  const auth = useAuthContext();

  if (auth.isAuthenticating) return null;
  if (!auth.user) return null;

  return <Navigate to={getRoleHomeRoute(auth.user.role)} />;
}
