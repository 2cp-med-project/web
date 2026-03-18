import { DoctorRoutesLayout } from "@/layouts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/_doctor")({
  component: () => <DoctorRoutesLayout />,
});
