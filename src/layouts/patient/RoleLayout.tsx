import { ROLE } from "@/constants/index.ts";
import { useAuthContext } from "@/context/auth.tsx";
import { Navigate, Outlet } from "@tanstack/react-router";

export function PatientRoutesRoleLayout() {
  const { user } = useAuthContext();
  if (!user?.role) return null;
  if (user?.role === ROLE.PATIENT) return <Outlet />;
  return <Navigate to="/" />;
}
