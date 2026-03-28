import { ROLE } from "@/constants/index.ts";
import { useAuthContext } from "@/context/auth.tsx";
import { Navigate, Outlet } from "@tanstack/react-router";

export function DoctorRoutesRoleLayout() {
  const { user } = useAuthContext();
  if (user === null) return null;
  if (user?.role === ROLE.DOCTOR) return <Outlet />;
  return <Navigate to="/" />;
}
