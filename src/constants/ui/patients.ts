import type { Patient, PatientDetails } from "../../types/entities.ts";
import { BLOOD_TYPE, GENDER } from "../index.ts";

export const patients: Patient[] = [
  {
    id: "1",
    fullname: "Ahmed Benali",
    email: "ahmed.benali@example.com",
    phoneNumber: "0551 23 45 67",
    avatar: null,
    lastVisit: new Date("2026-02-12"),
    status: "active",
    age: 34,
    gender: GENDER.MALE,
    nationalId: "DZ19890321",
    address: "Oran, Algeria",
  },
  {
    id: "2",
    fullname: "Fatima Zahra Bensalem",
    email: "fatima.bensalem@example.com",
    phoneNumber: "0662 14 89 33",
    avatar: null,
    lastVisit: new Date("2026-01-30"),
    status: "active",
    age: 29,
    gender: GENDER.FEMALE,
    nationalId: "DZ19960712",
    address: "Algiers, Algeria",
  },
];

const patientDetailsData = [
  {
    bloodType: BLOOD_TYPE.O_POS,
    allergies: ["Penicillin"],
    chronicConditions: ["Hypertension"],
  },
  {
    bloodType: BLOOD_TYPE.A_POS,
    allergies: ["Peanuts"],
    chronicConditions: [],
  },
];

export const patientsWithDetails: PatientDetails[] = patients.map((p, i) => ({
  ...p,
  ...patientDetailsData[i],
}));

export const patientReportFormSteps = [
  {
    label: "Consultation",
  },
  {
    label: "Symptômes",
  },
  {
    label: "Signes Vitaux",
  },
  {
    label: "Évaluation",
  },
  {
    label: "Traitement",
  },
];
