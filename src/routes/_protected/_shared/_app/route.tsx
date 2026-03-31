import { ROLE } from "@/constants/index.ts";
import { useAuthContext } from "@/context/auth.tsx";
import { InvalidUserRoleError } from "@/errors/InvalidUserRoleError.ts";
import { AdminRoutesLayout, DoctorRoutesLayout, PatientRoutesLayout } from "@/layouts/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/_shared/_app")({
  component: () => <RouteComponent />,
});

function RouteComponent() {
  const { user } = useAuthContext();
  console.log("user role:", user?.role);
  console.log("ROLE.ADMIN:", ROLE.ADMIN);
  if (user === null) return null;
  if (user.role === ROLE.DOCTOR) return <DoctorRoutesLayout.App />;
  if (user.role === ROLE.PATIENT) return <PatientRoutesLayout.App />;
  if (user.role === ROLE.ADMIN) return <AdminRoutesLayout.App />;
  throw new InvalidUserRoleError(user.role);
}
