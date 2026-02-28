import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  label: string;
  icon: LucideIcon;
  to: string;
};

export type NavigationSection = {
  label: string;
  items: NavigationItem[];
};
