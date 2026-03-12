import {
  CalendarDays,
  Edit3,
  File,
  History,
  LayoutDashboard,
  MessagesSquare,
  Settings,
  UserRound,
  Users,
} from "lucide-react";
import type { NavigationSection, NestedNavigationItem } from "../types/ui.ts";

export const NAVIGATION_MENU: NavigationSection[] = [
  {
    label: "Général",
    items: [
      {
        label: "Tableau de bord",
        icon: LayoutDashboard,
        to: "/",
      },
      {
        label: "Patients",
        icon: Users,
        to: "/patients",
      },
      {
        label: "Messagerie",
        icon: MessagesSquare,
        to: "/chat",
      },
      {
        label: "Planning",
        icon: CalendarDays,
        to: "/planning",
      },
    ],
  },
  {
    label: "Configuration",
    items: [
      {
        label: "Paramètres",
        icon: Settings,
        to: "/settings",
      },
    ],
  },
];

export const PATIENT_NAVIGATION_MENU: NestedNavigationItem[] = [
  {
    label: "Profil",
    icon: UserRound,
    to: "/patients/$patientId/profile",
    regex: /^\/patients\/[^/]+\/profile$/,
  },
  {
    label: "Dossier Médical",
    icon: File,
    to: "/patients/$patientId/file",
    regex: /^\/patients\/[^/]+\/file$/,
  },
  {
    label: "Ajouter Rapport",
    icon: Edit3,
    to: "/patients/$patientId/report",
    regex: /^\/patients\/[^/]+\/report$/,
  },
  {
    label: "Drafts et Historique",
    icon: History,
    to: "/patients/$patientId/drafts",
    regex: /^\/patients\/[^/]+\/drafts$/,
  },
];
