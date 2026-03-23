import type { DashboardData } from "@/types/dashboard.ts";
import type { LucideIcon } from "lucide-react";
import { AlertCircle, Calendar, MessageSquare } from "lucide-react";

export type OverviewCard = {
  icon: LucideIcon;
  iconColor: string;
  label: string;
  desc: string;
};

export type ValuedOverivewCard = OverviewCard & {
  value: number;
};

export const overviewCards: OverviewCard[] = [
  {
    icon: Calendar,
    iconColor: "text-green-500",
    label: "Rendez-vous Aujourd'hui",
    desc: "Rendez-vous prévus aujourd'hui",
  },
  {
    icon: AlertCircle,
    iconColor: "text-red-500",
    label: "Demandes en attente",
    desc: "Requêtes à traiter",
  },
  {
    icon: MessageSquare,
    iconColor: "text-blue-500",
    label: "Messages reçus",
    desc: "Messages reçus aujourd'hui",
  },
];

export const dashboardData: DashboardData = {
  todayAppointmentCount: 10,
  pendingRequestsCount: 2,
  totalMessagesCount: 4,
  recentlyOpenedPatients: [],
  nextAppointments: [],
};
