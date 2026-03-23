import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  label: string;
  icon: LucideIcon;
  to: string;
};

export type NestedNavigationItem = NavigationItem & {
  regex: RegExp;
};

export type NavigationSection = {
  label: string;
  items: NavigationItem[];
};

export type SettingsNavigationItem = NavigationItem & {
  desc: string;
  regex: RegExp;
};
