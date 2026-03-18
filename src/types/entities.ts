import type { BloodType, Gender, Role } from "./index.ts";

export type BaseUser = {
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

export type AuthUser = BaseUser & {
  role: Role;
};

export type Patient = BaseUser & {
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

export type Profile = AuthUser & {
  bio: string;
};
