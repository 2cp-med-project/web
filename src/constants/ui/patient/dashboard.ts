import type { PatientDashboardData } from "@/types/dashboard.ts";
import type { EmergencyContact } from "@/types/entities.ts";

export const emergencyContacts: EmergencyContact[] = [
  {
    id: "1",
    label: "Father",
    fullname: "Ahmed Bouhadda",
    phoneNumber: "+213550123456",
  },
  {
    id: "2",
    label: "Mother",
    fullname: "Fatima Bouhadda",
    phoneNumber: "+213661234567",
  },
  {
    id: "3",
    label: "Brother",
    fullname: "Yacine Bouhadda",
    phoneNumber: "+213770345678",
  },
  {
    id: "4",
    label: "Friend",
    fullname: "Karim Benali",
    phoneNumber: "+213556789012",
  },
  {
    id: "5",
    label: "Doctor",
    fullname: "Dr. Samir Haddad",
    phoneNumber: "+213660987654",
  },
];

export const dashboardData: PatientDashboardData = {
  emergencyContacts,
  todayAppointmentsCount: 1,
  pendingRequestsCount: 8,
  newFileEntriesCount: 5,
};

import { Calendar, FileText, Pill, Star } from "lucide-react";

export const promptOptions = [
  {
    icon: FileText,
    label: "Mes rapports",
    prompt: "Afficher et résumer mes rapports médicaux récents",
  },
  {
    icon: Pill,
    label: "Mes médicaments",
    prompt: "Lister mes médicaments et expliquer leur utilisation",
  },
  {
    icon: Calendar,
    label: "Les rendez-vous d'aujourd'hui",
    prompt: "Afficher mes rendez-vous prévus pour aujourd'hui",
  },
  {
    icon: Star,
    label: "Médecins communs",
    prompt: "Afficher les médecins les plus consultés ou recommandés",
  },
];
