import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";

type SettingsNavigationItemProps = {
  icon: LucideIcon;
  label: string;
  desc: string;
  to: string;
};

export function SettingsNavigationItem(props: SettingsNavigationItemProps) {
  const Icon = props.icon;
  return (
    <Link
      to={props.to}
      className="w-full p-3 rounded-lg group flex items-center gap-3 bg-transparent hover:bg-white transition-colors duration-200"
    >
      <div className="p-2 rounded-lg bg-gray-200 group-hover:bg-foreground text-black/60 group-hover:text-white transition-colors duration-200">
        <Icon size={24} className="transition-colors duration-200" />
      </div>
      <div className="flex flex-col">
        <p className="text-black text-lg capitalize font-medium">
          {props.label}
        </p>
        <p className="text-muted text-xs">{props.desc}</p>
      </div>
    </Link>
  );
}
