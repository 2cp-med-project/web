import { ROLE } from "@/constants/index.ts";
import { useAuthContext } from "@/context/auth.tsx";
import { InvalidUserRoleError } from "@/errors/InvalidUserRoleError.ts";
import { DoctorRoutesLayout, PatientRoutesLayout } from "@/layouts/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/_shared/_app/settings")({
  component: () => <RouteComponent />,
});

function RouteComponent() {
  const { user } = useAuthContext();
  if (user === null) return null;
  if (user.role === ROLE.DOCTOR) return <DoctorRoutesLayout.Settings />;
  if (user.role === ROLE.PATIENT) return <PatientRoutesLayout.Settings />;
  throw new InvalidUserRoleError(user.role);
}
