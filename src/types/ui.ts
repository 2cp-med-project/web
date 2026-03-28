import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  label: string;
  icon: LucideIcon;
  to: string;
};

export type RegexBasedNavigationItem = NavigationItem & {
  regex: RegExp;
};

export type NavigationSection = {
  label: string;
  items: NavigationItem[];
};

export type SettingsNavigationItem = RegexBasedNavigationItem & {
  desc: string;
};

export type SidebarNavigationMenu = NavigationSection[];
