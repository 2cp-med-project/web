import {
  CalendarDays,
  LayoutDashboard,
  MessagesSquare,
  Settings,
  Users,
} from "lucide-react";
import type { NavigationSection } from "../types/ui.ts";

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
