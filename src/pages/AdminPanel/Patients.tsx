import {
  PatientModal,
  PatientsContextProvider,
  PatientsFilters,
  PatientsPagination,
  PatientsTable,
} from "@/features/AdminPanel/Patients";
import { Flex } from "@radix-ui/themes";
import React from "react";

function PatientsPageContent() {
  return (
    <React.Fragment>
      <section className="px-2">
        <Flex direction="column">
          <h1 className="text-foreground font-medium text-2xl">Patients</h1>
          <p className="text-muted text-sm font-normal">
            Tous les patients enregistrés sur la plateforme
          </p>
        </Flex>
        <PatientsFilters />
        <div className="w-full mt-6">
          <PatientsTable />
          <PatientsPagination />
        </div>
      </section>
      <PatientModal />
    </React.Fragment>
  );
}

export const PatientsPage = () => (
  <PatientsContextProvider>
    <PatientsPageContent />
  </PatientsContextProvider>
);
