import { PatientPanelPages } from "@/pages/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/p/_app/files/")({
  component: () => <PatientPanelPages.FilesPage />,
});
