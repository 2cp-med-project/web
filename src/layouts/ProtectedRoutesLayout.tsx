import { useAuthContext } from "@/context/auth.tsx";
import { Navigate, Outlet } from "@tanstack/react-router";

export function ProtectedRoutesLayout() {
  const { user, isAuthenticating } = useAuthContext();

  if (!isAuthenticating && !user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
