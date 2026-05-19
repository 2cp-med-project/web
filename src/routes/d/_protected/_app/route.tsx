import { DoctorRoutesLayout } from "@/layouts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/d/_protected/_app")({
  component: () => <DoctorRoutesLayout.App />,
});
