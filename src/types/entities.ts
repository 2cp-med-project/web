import type { BloodType, Gender } from "./index.ts";

export type User = {
  id: string;
  fullname: string;
  email: string;
  phoneNumber: string;
  avatar: string | null;
  address: string | null;
  nationalId: string;
  age: number;
  gender: Gender;
};

export type Patient = User & {
  lastVisit: Date;
  status: "active" | "inactive";
};

export type PatientDetails = Patient & {
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

export type Profile = User & {
  bio: string;
};
