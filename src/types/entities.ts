import type { BloodType, Gender, Role } from "./index.ts";

export type BaseUser = {
  id: string;
  fullname: string;
  email: string;
  phoneNumber: string;
  avatar: string | null;
  address: string | null;
  nationalId: string | null;
  age: number;
  gender: Gender;
};

export type AuthUser = BaseUser & {
  role: Role;
};

export type Patient = BaseUser & {
  status: "active" | "inactive";
  lastVisit: Date;
};

export type PatientDetails = Patient & {
  bloodType: BloodType;
  allergies: string[];
  chronicConditions: string[];
};

export type PartialPatientDetails = Omit<
  PatientDetails,
  "bloodType" | "allergies" | "chronicConditions"
> & {
  bloodType?: BloodType;
  allergies?: string[];
  chronicConditions?: string[];
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

export type PatientFileType = "consultation" | "analyse" | "ordonnance";

export type PatientFileRecord = {
  id: string;
  name: string;
  type: PatientFileType;
  modifiedAt: string;
  modifiedDaysAgo: number;
  doctor: {
    key: string;
    name: string;
    email: string;
    shortName: string;
  };
};

export type PatientPlanningAppointmentStatus = "confirmed" | "pending";

export type PatientPlanningAppointment = {
  id: string;
  title: string;
  doctorName: string;
  doctorEmail: string;
  doctorAvatar: string | null;
  doctorShortName: string;
  date: string;
  start: string;
  end: string;
  status: PatientPlanningAppointmentStatus;
  durationLabel: string;
};
