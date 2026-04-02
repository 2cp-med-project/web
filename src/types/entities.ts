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
  id: string;
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

export type BaseProfile = AuthUser;

export type DoctorProfile = BaseProfile & {
  bio: string;
};

export type PatientProfile = BaseProfile & {
  bloodType: BloodType;
  allergies: string[];
  chronicConditions: string[];
  emergencyContacts: EmergencyContact[];
};

export type EmergencyContact = {
  id: string;
  label: string;
  fullname: string;
  phoneNumber: string;
};
