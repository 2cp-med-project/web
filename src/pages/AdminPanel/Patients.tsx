import {
  AdminPatientModal,
  AdminPatientsContextProvider,
  AdminPatientsFilters,
  AdminPatientsPagination,
  AdminPatientsTable,
} from "@/features/AdminPanel/Patients/indext";
import { Flex } from "@radix-ui/themes";
import React from "react";

export function AdminPatientsPage() {
  return (
    <AdminPatientsContextProvider>
      <React.Fragment>
        <section className="px-2">
          <Flex direction="column">
            <h1 className="text-foreground font-medium text-2xl">Patients</h1>
            <p className="text-muted text-sm font-normal">
              Tous les patients enregistrés sur la plateforme
            </p>
          </Flex>
          <AdminPatientsFilters />
          <div className="w-full mt-6">
            <AdminPatientsTable />
            <AdminPatientsPagination />
          </div>
        </section>
        <AdminPatientModal />
      </React.Fragment>
    </AdminPatientsContextProvider>
  );
}