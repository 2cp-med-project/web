import { ROLE } from "@/constants/index.ts";
import { useAuthContext } from "@/context/auth.tsx";
import { DoctorPanelPages } from "@/pages/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/_shared/_app/_dashboard/")({
  component: RouteComponent,
});

export function RouteComponent() {
  const { user } = useAuthContext();
  if (user?.role === ROLE.DOCTOR) return <DoctorPanelPages.DashboardPage />;
  if (user?.role === ROLE.PATIENT) return <div>patient dashboard page</div>;
  return null;
}
