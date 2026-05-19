import { PatientRoutesLayout } from "@/layouts/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/p/_protected/_app")({
  component: () => <PatientRoutesLayout.App />,
});
