import { PatientsContextProvider } from "@/features/Patients/index.ts";
import { createFileRoute } from "@tanstack/react-router";
import { PatientsPage } from "../../pages";

export const Route = createFileRoute("/_protected/patients")({
  component: () => (
    <PatientsContextProvider>
      <PatientsPage />
    </PatientsContextProvider>
  ),
});
