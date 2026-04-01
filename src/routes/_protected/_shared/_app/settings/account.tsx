import { ROLE } from "@/constants/index.ts";
import { useAuthContext } from "@/context/index.ts";
import { InvalidUserRoleError } from "@/errors/index.ts";
import { DoctorPanelPages, AdminPanelPages } from "@/pages/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_protected/_shared/_app/settings/account",
)({
  component: RouteComponent,
});

export function RouteComponent() {
  const { user } = useAuthContext();
  if (!user) return null;
  if (user.role === ROLE.DOCTOR) return <DoctorPanelPages.AccountSettingsPage />;
  if (user.role === ROLE.PATIENT) return <div>patient settings page</div>;
  if (user.role === ROLE.ADMIN) return <AdminPanelPages.AccountSettingsPage />;
  throw new InvalidUserRoleError(user.role);
}