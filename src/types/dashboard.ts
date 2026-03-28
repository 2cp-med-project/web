import type { LucideIcon } from "lucide-react";
import type {
  EmergencyContact,
  Patient,
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

export type QuickAction = {
  label: string;
  desc: string;
  icon: LucideIcon;
  action: () => void;
};

export type OverviewCardContent = {
  icon: LucideIcon;
  iconColor: string;
  label: string;
  desc: string;
  value: number;
};
