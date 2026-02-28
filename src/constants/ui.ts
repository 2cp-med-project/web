import type { LucideIcon } from "lucide-react";
import { AlertCircle, Calendar, MessageSquare, Send } from "lucide-react";

export interface OverviewCard {
  icon: LucideIcon;
  iconColor: string;
  label: string;
  value: number;
  desc: string;
}

export const overviewCards: OverviewCard[] = [
  {
    icon: Calendar,
    iconColor: "text-green-500",
    label: "Rendez-vous Aujourd'hui",
    value: 16,
    desc: "Rendez-vous prévus aujourd'hui",
  },
  {
    icon: AlertCircle,
    iconColor: "text-red-500",
    label: "Demandes en attente",
    value: 8,
    desc: "Requêtes à traiter",
  },
  {
    icon: Send,
    iconColor: "text-teal-500",
    label: "Messages envoyés",
    value: 5,
    desc: "Messages envoyés aujourd'hui",
  },
  {
    icon: MessageSquare,
    iconColor: "text-blue-500",
    label: "Messages reçus",
    value: 3,
    desc: "Messages reçus aujourd'hui",
  },
];
