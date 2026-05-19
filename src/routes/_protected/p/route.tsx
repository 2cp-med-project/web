import { ROLE } from "@/constants/index.ts";
import { ProtectedRoutesLayout } from "@/layouts/ProtectedRoutesLayout.tsx";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/p")({
  component: () => <ProtectedRoutesLayout role={ROLE.PATIENT} />,
});
