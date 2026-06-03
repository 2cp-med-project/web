import type { Patient, PatientDetails } from "@/types/entities.ts";
import type { Gender } from "@/types/index.ts";
import type { Page, PaginationAttributes } from "@/types/pagination.ts";
import { api, request } from "../client.ts";
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

type FetchOneResponseBody = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: Gender;
  placeOfBirth: string;
  dateOfBirth: string;
  allergies?: string[];
  chronicDiseases?: string[];
  medicalResume?: string;
};

// GET /users/patient/:id
export const __fetchOne = (id: string) => {
  return request(async () => {
    const route = `/users/patient/${id}`;
    const res = await api.get<FetchOneResponseBody>(route);
    return res.data;
  });
};

type RequestAccessResponseBody = {
  _id: string;
  doctor: string;
  patient: string;
  status: "pending" | "active" | "rejected" | "expired";
  createdAt: string;
  updatedAt: string;
  __v: number;
};

// POST /access/request
export const requestAccess = (id: string) => {
  return request(async () => {
    const res = await api.post<RequestAccessResponseBody>("/access/request", {
      patientId: id,
    });
    return res.data;
  });
};
