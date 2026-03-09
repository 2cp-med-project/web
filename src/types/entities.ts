import type { BloodType, Gender } from "./index.ts";

export type User = {
  id: string;
  fullname: string;
  email: string;
  phoneNumber: string;
  avatar: string | null;
};

export type Patient = User & {
  lastVisit: Date;
  status: "active" | "inactive";
};

export type PatientDetails = Patient & {
  age: number;
  gender: Gender;
  nationalId: string;
  address: string;
  bloodType: BloodType;
  allergies: string[];
  chronicConditions: string[];
};

export type Message = {
  senderId: string;
  receiverId: string;
  content: string;
};

export type RawAppointment = {
  id: string;
  patientId: string;
  start: Date;
  end: Date;
  reason: string | null;
};

export type PopulatedAppointment = Omit<RawAppointment, "patientId"> & {
  patient: Patient;
};
