import { useAuthContext } from "@/context/auth.tsx";
import type { Role } from "@/types/index.ts";
import { Navigate, Outlet } from "@tanstack/react-router";

type ProtectedRoutesLayoutProps = {
  role: Role;
};

export function ProtectedRoutesLayout({ role }: ProtectedRoutesLayoutProps) {
  const { user, isAuthenticating } = useAuthContext();
  if (isAuthenticating) return null;
  if (!user) return <Navigate to="/login" />;
  if (user.role !== role) return <Navigate to="/unauthorized" />;
  return <Outlet />;
}
