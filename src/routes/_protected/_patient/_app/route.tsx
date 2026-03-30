import { PatientRoutesLayout } from "@/layouts/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/_patient/_app")({
  component: () => <PatientRoutesLayout.App />,
});
