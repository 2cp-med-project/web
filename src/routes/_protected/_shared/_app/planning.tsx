import { ROLE } from "@/constants/index.ts";
import { useAuthContext } from "@/context/auth.tsx";
import { InvalidUserRoleError } from "@/errors/InvalidUserRoleError.ts";
import { DoctorPanelPages, PatientPanelPages } from "@/pages/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/_shared/_app/planning")({
  component: RouteComponent,
});

function RouteComponent() {
  const { user } = useAuthContext();
  if (!user?.id) return null;
  if (user.role === ROLE.DOCTOR) return <DoctorPanelPages.PlanningPage />;
  if (user.role === ROLE.PATIENT) return <PatientPanelPages.PlanningPage />;
  throw new InvalidUserRoleError(user.role);
}
