import { PatientRoutesLayout } from "@/layouts/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/p/_app/settings")({
  component: () => <PatientRoutesLayout.Settings />,
});
