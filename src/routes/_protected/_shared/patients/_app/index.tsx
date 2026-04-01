import { ROLE } from "@/constants/index.ts";
import { useAuthContext } from "@/context/auth.tsx";
import { InvalidUserRoleError } from "@/errors/InvalidUserRoleError.ts";
import { AdminPanelPages, DoctorPanelPages } from "@/pages/index.ts";
import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/_shared/patients/_app/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { user } = useAuthContext();
  if (!user?.role) return null;

  if (user.role === ROLE.ADMIN) return <AdminPanelPages.PatientsPage />;
  if (user.role === ROLE.DOCTOR) return <DoctorPanelPages.PatientsPage />;

  const roles = Object.values(ROLE);
  const isValidRole = roles.includes(user.role);

  if (isValidRole) return <Navigate to="/" />;
  throw new InvalidUserRoleError(user.role);
}
