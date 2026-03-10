import { useAuthContext } from "@/context/auth.tsx";
import { Navigate, Outlet } from "@tanstack/react-router";

export function PublicRoutesLayout() {
  const { user, isAuthenticating } = useAuthContext();

  if (user !== null && !isAuthenticating) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
