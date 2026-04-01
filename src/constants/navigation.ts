import type {
  NavigationSection,
  RegexBasedNavigationItem,
  SettingsNavigationItem,
} from "@/types/ui.ts";
import {
  Bell,
  Building2,
  Calendar,
  CalendarDays,
  Edit3,
  File,
  Folder,
  History,
  Home,
  LayoutDashboard,
  MessageCircle,
  MessagesSquare,
  Palette,
  Settings,
  Shield,
  User,
  UserRound,
  Users,
} from "lucide-react";

export const DOCTOR_NAVIGATION: {
  external: {
    default: NavigationSection[];
    patients: RegexBasedNavigationItem[];
  };
  internal: {
    settings: SettingsNavigationItem[];
  };
} = {
  external: {
    default: [
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
    ],

    patients: [
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
    ],
  },

  internal: {
    settings: [
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
    ],
  },
};

export const PATIENT_NAVIGATION: {
  external: {
    default: NavigationSection[];
  };
  internal: {
    settings: SettingsNavigationItem[];
  };
} = {
  external: {
    default: [
      {
        label: "Général",
        items: [
          {
            label: "Accueil",
            icon: Home,
            to: "/",
          },
          {
            label: "Profil",
            icon: User,
            to: "/profile",
          },
          {
            label: "Fichiers",
            icon: Folder,
            to: "/files",
          },
          {
            label: "Planning",
            icon: Calendar,
            to: "/planning",
          },
          {
            label: "HealBot",
            icon: MessageCircle,
            to: "/healbot",
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
    ],
  },
  internal: {
    settings: [],
  },
};
export const ADMIN_NAVIGATION: {
  external: { default: NavigationSection[] };
  internal: { settings: SettingsNavigationItem[] };
} = {
  external: {
    default: [
      {
        label: "Général",
        items: [
          { label: "Tableau de bord", icon: LayoutDashboard, to: "/" },
          { label: "Patients", icon: Users, to: "/patients" },
          { label: "Médecins", icon: UserRound, to: "/doctors" },
        ],
      },
      {
        label: "Configuration",
        items: [{ label: "Paramètres", icon: Settings, to: "/settings" }],
      },
    ],
  },
  internal: {
    settings: [
      {
        label: "Compte",
        desc: "Gérer votre compte et vos informations publiques",
        icon: User,
        to: "/settings/account",
        regex: /^\/settings\/account/,
      },
      {
        label: "Sécurité",
        desc: "Gérer les paramètres de sécurité de votre compte",
        icon: Shield,
        to: "/settings/security",
        regex: /^\/settings\/security/,
      },
    ],
  },
};
