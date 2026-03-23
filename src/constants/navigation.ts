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

import type { SettingsNavigationItem } from "@/types/ui.ts";
import { Bell, Building2, Palette, Shield, User } from "lucide-react";

export const SETTINGS_NAVIGATION_ITEMS: SettingsNavigationItem[] = [
  {
    label: "Compte",
    desc: "Gérer votre compte et vos informations publiques",
    icon: User,
    to: "/settings/account",
    regex: /^\/settings\/account/,
  },
  {
    label: "Notifications",
    desc: "Gérer vos préférences de notification",
    icon: Bell,
    to: "/settings/notifications",
    regex: /^\/settings\/notifications/,
  },
  {
    label: "Informations de la clinique",
    desc: "Gérer les informations de votre clinique",
    icon: Building2,
    to: "/settings/clinic",
    regex: /^\/settings\/clinic/,
  },
  {
    label: "Sécurité",
    desc: "Gérer les paramètres de sécurité de votre compte",
    icon: Shield,
    to: "/settings/security",
    regex: /^\/settings\/security/,
  },
  {
    label: "Apparence",
    desc: "Personnaliser l’apparence de l’application",
    icon: Palette,
    to: "/settings/appearance",
    regex: /^\/settings\/appearance/,
  },
];
