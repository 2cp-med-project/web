import { ROLE } from "@/constants/index.ts";
import { useAuthContext } from "@/context/auth.tsx";
import { Navigate, Outlet } from "@tanstack/react-router";

export function PatientRoutesLayout() {
  const { user } = useAuthContext();
  if (user?.role === ROLE.PATIENT) return <Outlet />;
  return <Navigate to="/" />;
}
