import type { LucideIcon } from "lucide-react";
import type {
  EmergencyContact,
  Patient,
  PatientPlanningAppointment,
  PopulatedAppointment,
} from "./entities.ts";

export type DoctorDashboardData = {
  todayAppointmentCount: number;
  pendingRequestsCount: number;
  totalMessagesCount: number;
  recentlyOpenedPatients: Patient[];
  nextAppointments: PopulatedAppointment[];
};

export type PatientDashboardData = {
  emergencyContacts: EmergencyContact[];
  todayAppointmentsCount: number;
  pendingRequestsCount: number;
  newFileEntriesCount: number;
};

export type PatientPlanningData = {
  selectedDate: string;
  availableHours: number;
  miniCalendarMonthLabel: string;
  miniCalendarDays: number[];
  miniCalendarOffset: number;
  appointments: PatientPlanningAppointment[];
};

export type OverviewCardContent = {
  icon: LucideIcon;
  iconColor: string;
  label: string;
  desc: string;
  value: number;
};

export type PendingDoctor = {
  id: string;
  fullname: string;
  email: string;
  phoneNumber: string;
  address: string;
  nationalId: string | null;
  age: number;
  specialty: string;
  experience: string;
  submittedAt: string;
};

export type RecentUser = {
  id: string;
  fullname: string;
  role: string;
  joinedDate: string;
  status: "active" | "pending";
};

export type AdminDashboardData = {
  totalPatientsCount: number;
  totalDoctorsCount: number;
  totalAppointmentsCount: number;
  newRegistrationsCount: number;
  monthlyRegistrations: { month: string; count: number }[];
  doctorsBySpecialty: { specialty: string; count: number }[];
  recentUsers: RecentUser[];
  pendingDoctors: PendingDoctor[];
};
