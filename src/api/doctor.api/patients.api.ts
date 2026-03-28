import type { Patient, PatientDetails } from "@/types/entities.ts";
import type { Page, PaginationAttributes } from "@/types/pagination.ts";
import { PatientNotFoundError } from "../errors/PatientNotFoundError.ts";
import { DoctorData } from "./dashboard.api.ts";

// GET /patients?page=<page>&limit=<pageSize>&search=<search>
export const fetchPage = (pagination: PaginationAttributes) => {
  return new Promise<Page<Patient>>((res) => {
    setTimeout(() => {
      const start = (pagination.page - 1) * pagination.pageSize;
      const end = start + pagination.pageSize;

      const filteredPatients = DoctorData.Patients.patients.filter((p) =>
        p.fullname
          .toLowerCase()
          .includes(pagination.search.trim().toLowerCase()),
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

// GET /patients/<id>
export const fetchOne = (id: string) => {
  return new Promise<PatientDetails | null>((res, rej) =>
    setTimeout(() => {
      const patient = DoctorData.Patients.patientsWithDetails.find(
        (p) => p.id === id,
      );
      if (patient === undefined) return rej(new PatientNotFoundError(id));
      return res(patient);
    }, 1000),
  );
};
