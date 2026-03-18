import { PlanningContextProvider } from "@/features/DoctorPanel/Planning";
import { DoctorPanelPages } from "@/pages/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/_doctor/_app/planning")({
  component: () => (
    <PlanningContextProvider>
      <DoctorPanelPages.PlanningPage />
    </PlanningContextProvider>
  ),
});
