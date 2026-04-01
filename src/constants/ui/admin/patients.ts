import { BLOOD_TYPE, GENDER } from "@/constants/index.ts";
import type { Patient, PatientDetails } from "@/types/entities.ts";

export type PatientWithMeta = Patient & { joinedDate: string };

export const patients: PatientWithMeta[] = [
  { id: "p-001", fullname: "Sara Johnson", email: "sara.j@gmail.com", avatar: null, phoneNumber: "0550 12 34 56", address: "Oran", nationalId: "DZ19980101", age: 23, gender: GENDER.FEMALE, lastVisit: new Date("2026-03-01"), status: "active", joinedDate: "Mar 3" },
  { id: "p-002", fullname: "Lucas Bernard", email: "lucas.b@gmail.com", avatar: null, phoneNumber: "0661 23 45 67", address: "Alger", nationalId: "DZ19710515", age: 55, gender: GENDER.MALE, lastVisit: new Date("2026-02-20"), status: "inactive", joinedDate: "May 2" },
  { id: "p-003", fullname: "Amina Khelif", email: "amina.k@gmail.com", avatar: null, phoneNumber: "0770 34 56 78", address: "Constantine", nationalId: "DZ19960303", age: 30, gender: GENDER.FEMALE, lastVisit: new Date("2026-01-15"), status: "active", joinedDate: "May 19" },
  { id: "p-004", fullname: "Karim Hadj", email: "karim.h@gmail.com", avatar: null, phoneNumber: "0662 98 76 54", address: "Annaba", nationalId: "DZ19880720", age: 38, gender: GENDER.MALE, lastVisit: new Date("2026-03-10"), status: "active", joinedDate: "Mar 22" },
  { id: "p-005", fullname: "Nadia Bensalem", email: "nadia.b@gmail.com", avatar: null, phoneNumber: "0556 11 22 33", address: "Sétif", nationalId: "DZ20010909", age: 25, gender: GENDER.FEMALE, lastVisit: new Date("2026-03-20"), status: "active", joinedDate: "Mar 27" },
];

const patientDetailsData = [
  { bloodType: BLOOD_TYPE.O_POS, allergies: ["Penicillin"], chronicConditions: ["Asthma"] },
  { bloodType: BLOOD_TYPE.AB_NEG, allergies: [], chronicConditions: ["Diabetes"] },
  { bloodType: BLOOD_TYPE.O_POS, allergies: ["Aspirin"], chronicConditions: [] },
  { bloodType: BLOOD_TYPE.A_POS, allergies: [], chronicConditions: ["Hypertension"] },
  { bloodType: BLOOD_TYPE.B_POS, allergies: ["Peanuts"], chronicConditions: [] },
];

export const patientsWithDetails: PatientDetails[] = patients.map((p, i) => ({
  ...p,
  ...patientDetailsData[i],
}));