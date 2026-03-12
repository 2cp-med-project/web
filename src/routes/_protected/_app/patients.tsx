import { PatientsContextProvider } from "@/features/Patients/index.ts";
import { PatientsPage } from "@/pages/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/_app/patients")({
  component: () => (
    <PatientsContextProvider>
      <PatientsPage />
    </PatientsContextProvider>
  ),
});
