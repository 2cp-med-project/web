import { PlanningContextProvider } from "@/features/Planning";
import { PlanningPage } from "@/pages";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/planning")({
  component: () => (
    <PlanningContextProvider>
      <PlanningPage />
    </PlanningContextProvider>
  ),
});
