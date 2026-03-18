import { PatientsContextProvider } from "@/features/DoctorPanel/Patients/index.ts";
import { DoctorPanelPages } from "@/pages/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/_doctor/_app/patients")({
  component: () => (
    <PatientsContextProvider>
      <DoctorPanelPages.PatientsPage />
    </PatientsContextProvider>
  ),
});
