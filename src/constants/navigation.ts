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
  ScanLine,
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
            to: "/d",
          },
          {
            label: "Patients",
            icon: Users,
            to: "/d/patients",
          },
          {
            label: "Messagerie",
            icon: MessagesSquare,
            to: "/d/chat",
          },
          {
            label: "Planning",
            icon: CalendarDays,
            to: "/d/planning",
          },
          {
            label: "Scan",
            icon: ScanLine,
            to: "/d/scan",
          },
        ],
      },
      {
        label: "Configuration",
        items: [
          {
            label: "Paramètres",
            icon: Settings,
            to: "/d/settings",
          },
        ],
      },
    ],

    patients: [
      {
        label: "Profil",
        icon: UserRound,
        to: "/d/patients/$patientId/profile",
        regex: /^\/d\/patients\/[^/]+\/profile$/,
      },
      {
        label: "Dossier Médical",
        icon: File,
        to: "/d/patients/$patientId/files",
        regex: /^\/d\/patients\/[^/]+\/files(?:\/[^/]+)?$/,
      },
      {
        label: "Ajouter Rapport",
        icon: Edit3,
        to: "/d/patients/$patientId/report",
        regex: /^\/d\/patients\/[^/]+\/report$/,
      },
      {
        label: "Drafts et Historique",
        icon: History,
        to: "/d/patients/$patientId/drafts",
        regex: /^\/d\/patients\/[^/]+\/drafts$/,
      },
    ],
  },

  internal: {
    settings: [
      {
        label: "Compte",
        desc: "Gérer votre compte et vos informations publiques",
        icon: User,
        to: "/d/settings/account",
        regex: /^\/d\/settings\/account/,
      },
      {
        label: "Notifications",
        desc: "Gérer vos préférences de notification",
        icon: Bell,
        to: "/d/settings/notifications",
        regex: /^\/d\/settings\/notifications/,
      },
      {
        label: "Informations de la clinique",
        desc: "Gérer les informations de votre clinique",
        icon: Building2,
        to: "/d/settings/clinic",
        regex: /^\/d\/settings\/clinic/,
      },
      {
        label: "Sécurité",
        desc: "Gérer les paramètres de sécurité de votre compte",
        icon: Shield,
        to: "/d/settings/security",
        regex: /^\/d\/settings\/security/,
      },
      {
        label: "Apparence",
        desc: "Personnaliser l’apparence de l’application",
        icon: Palette,
        to: "/d/settings/appearance",
        regex: /^\/d\/settings\/appearance/,
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
            to: "/p",
          },
          {
            label: "Profil",
            icon: User,
            to: "/p/profile",
          },
          {
            label: "Fichiers",
            icon: Folder,
            to: "/p/files",
          },
          {
            label: "Planning",
            icon: Calendar,
            to: "/p/planning",
          },
          {
            label: "HealBot",
            icon: MessageCircle,
            to: "/p/healbot",
          },
        ],
      },
      {
        label: "Configuration",
        items: [
          {
            label: "Paramètres",
            icon: Settings,
            to: "/p/settings",
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
          { label: "Tableau de bord", icon: LayoutDashboard, to: "/a" },
          { label: "Patients", icon: Users, to: "/a/patients" },
          { label: "Médecins", icon: UserRound, to: "/a/doctors" },
        ],
      },
      {
        label: "Configuration",
        items: [{ label: "Paramètres", icon: Settings, to: "/a/settings" }],
      },
    ],
  },
  internal: {
    settings: [
      {
        label: "Compte",
        desc: "Gérer votre compte et vos informations publiques",
        icon: User,
        to: "/a/settings/account",
        regex: /^\/a\/settings\/account/,
      },
      {
        label: "Sécurité",
        desc: "Gérer les paramètres de sécurité de votre compte",
        icon: Shield,
        to: "/a/settings/security",
        regex: /^\/a\/settings\/security/,
      },
    ],
  },
};
