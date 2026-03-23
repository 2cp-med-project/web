import type { LucideIcon } from "lucide-react";
import type { Patient, PopulatedAppointment } from "./entities.ts";

export type DashboardData = {
  todayAppointmentCount: number;
  pendingRequestsCount: number;
  totalMessagesCount: number;
  recentlyOpenedPatients: Patient[];
  nextAppointments: PopulatedAppointment[];
};

export type QuickAction = {
  label: string;
  desc: string;
  icon: LucideIcon;
  action: () => void;
};
