import {
  PatientsTable,
  PatientsTableFilters,
  PatientsTablePagination,
  PatientViewer,
} from "@/features/DoctorPanel/Patients";
import { Flex } from "@radix-ui/themes";
import React from "react";

export function PatientsPage() {
  return (
    <React.Fragment>
      <section className="px-2">
        <Flex direction={"column"}>
          <h1 className="text-foreground font-medium text-2xl">
            Gestion des Patients
          </h1>
          <p className="text-muted text-sm font-normal">
            Gérez les patients et demandez l'accès à leurs dossiers médicaux.
          </p>
        </Flex>
        <PatientsTableFilters />
        <div className="w-full mt-6">
          <PatientsTable />
          <PatientsTablePagination />
        </div>
      </section>
      <PatientViewer />
    </React.Fragment>
  );
}
