import { AdminPatientsContextProvider } from "@/features/AdminPanel/Patients/indext";
import { AdminPanelPages } from "@/pages/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/_admin/_app/pat")({
  component: () => (
    <AdminPatientsContextProvider>
      <AdminPanelPages.AdminPatientsPage />
    </AdminPatientsContextProvider>
  ),
});