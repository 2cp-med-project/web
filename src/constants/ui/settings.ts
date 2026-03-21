import type { SettingsNavigationItem } from "@/types/ui.ts";
import { Bell, Building2, Palette, Shield, User } from "lucide-react";

export const navigationItems: SettingsNavigationItem[] = [
  {
    label: "Compte",
    desc: "Gérer votre compte et vos informations publiques",
    icon: User,
    to: "/settings/account",
  },
  {
    label: "Notifications",
    desc: "Gérer vos préférences de notification",
    icon: Bell,
    to: "/settings/notifications",
  },
  {
    label: "Informations de la clinique",
    desc: "Gérer les informations de votre clinique",
    icon: Building2,
    to: "/settings/clinic",
  },
  {
    label: "Sécurité",
    desc: "Gérer les paramètres de sécurité de votre compte",
    icon: Shield,
    to: "/settings/security",
  },
  {
    label: "Apparence",
    desc: "Personnaliser l’apparence de l’application",
    icon: Palette,
    to: "/settings/appearance",
  },
];
