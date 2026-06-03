import { GRAVITY_MAP } from "@/constants/index.ts";
import type { PatientRecordFormData } from "@/features/DoctorPanel/PatientReport/Form/schema.ts";
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

// POST /records/consultation
export const createRecord = (id: string, data: PatientRecordFormData) => {
  return request(async () => {
    const res = await api.post("/records/consultation", {
      patientId: id,
      date: new Date().toISOString(),
      status: "completed",
      typeofvisit: data.visitType,
      motive: data.reason,
      symptoms: data.symptoms,
      severity: GRAVITY_MAP[data.gravity as keyof typeof GRAVITY_MAP],
      followUpDate: data.followUpDate?.toISOString() || undefined,
      diagnosis: data.diagnosis,
      treatmentPlan: data.treatmentDetails,
      notes: data.notes,
      bloodPressure: data.bloodPressure,
      heartRate: data.heartRate,
      respiratoryRate: data.respiratoryRate,
      temperature: data.temperature,
      weight: data.weight,
      systemReview: data.systemExam,
      additionalTests: data.additionalActions,
    });
    return res.data;
  });
};

type GetPatientRecordsResponseBody = {
  _id: string;
  doctorId: string;
  patientId: string;
  date: string;
  status: "completed" | string;
  typeofvisit: string;
  bloodPressure: string;
  heartRate: string;
  respiratoryRate: string;
  temperature: string;
  weight: string;
  motive: string;
  symptoms: string;
  severity: "mild" | "moderate" | "severe" | string;
  systemReview: string;
  diagnosis: string;
  treatmentPlan: string;
  additionalTests: string;
  notes: string;
  attachments: unknown[];
  resume: string | null;
  followUpDate: string | null;
  createdAt: string;
  updatedAt: string;
  __v: number;
}[];

// GET /records/:id
export const getRecords = (id: string) => {
  return request(async () => {
    const route = `/records/${id}`;
    const res = await api.get<GetPatientRecordsResponseBody>(route);
    return res.data;
  });
};

type GetPatientSingleRecordResponseBody = {
  _id: string;
  doctorId: string;
  patientId: string;
  date: string;
  status: "completed" | string;
  typeofvisit: string;
  bloodPressure: string;
  heartRate: string;
  respiratoryRate: string;
  temperature: string;
  weight: string;
  motive: string;
  symptoms: string;
  severity: "mild" | "moderate" | "severe" | string;
  systemReview: string;
  diagnosis: string;
  treatmentPlan: string;
  additionalTests: string;
  notes: string;
  attachments: unknown[];
  resume: string | null;
  followUpDate: string | null;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

// GET /records/consultation/:id
export const getSingleRecord = (id: string) => {
  return request(async () => {
    const route = `/records/consultation/${id}`;
    const res = await api.get<GetPatientSingleRecordResponseBody>(route);
    return res.data;
  });
};

type GenerateSummaryResponseBody = {
  resume: string;
};

// POST /summary/:id
export const generateSummary = (id: string) => {
  return request(async () => {
    const route = `/summary/${id}`;
    const res = await api.post<GenerateSummaryResponseBody>(route);
    return res.data;
  });
};
