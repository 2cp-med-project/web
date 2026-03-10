import { PatientsUI } from "@/constants/ui/index.ts";
import type { Patient, PatientDetails } from "@/types/entities.ts";
import type { Page, PaginationAttributes } from "@/types/pagination.ts";
import { PatientNotFoundError } from "./errors/PatientNotFoundError.ts";

export const fetchPage = (pagination: PaginationAttributes) => {
  return new Promise<Page<Patient>>((res) => {
    setTimeout(() => {
      const start = (pagination.page - 1) * pagination.pageSize;
      const end = start + pagination.pageSize;

      if (!pagination.search) {
        const patients = PatientsUI.patients.slice(start, end);
        const nextPage =
          end - start === patients.length ? null : pagination.page + 1;
        const count = patients.length;

        return res({
          data: patients,
          nextPage,
          count,
        });
      }

      const filteredPatients = PatientsUI.patients.filter((p) =>
        p.fullname.toLowerCase().includes(pagination.search.toLowerCase()),
      );

      const patients = filteredPatients.slice(start, end);
      const nextPage =
        patients.length === filteredPatients.length
          ? null
          : pagination.page + 1;
      const count = filteredPatients.length;

      return res({
        data: patients,
        nextPage,
        count,
      });
    }, 400);
  });
};

export const fetchOne = (id: string) => {
  return new Promise<PatientDetails | null>((res, rej) =>
    setTimeout(() => {
      const patient = PatientsUI.patientsWithDetails.find((p) => p.id === id);
      if (patient === undefined) return rej(new PatientNotFoundError(id));
      return res(patient);
    }, 200),
  );
};
