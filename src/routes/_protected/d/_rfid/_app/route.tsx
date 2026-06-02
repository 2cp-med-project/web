import { DoctorRoutesLayout } from "@/layouts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/d/_rfid/_app")({
  component: () => <DoctorRoutesLayout.App />,
});
