import { PlanningContextProvider } from "@/features/Planning";
import { PlanningPage } from "@/pages/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/_app/planning")({
  component: () => (
    <PlanningContextProvider>
      <PlanningPage />
    </PlanningContextProvider>
  ),
});
