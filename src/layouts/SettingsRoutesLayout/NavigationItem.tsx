import { cn } from "@/lib/utils.ts";
import type { SettingsNavigationItem } from "@/types/ui.ts";
import { Link } from "@tanstack/react-router";

type SettingsNavigationItemProps = SettingsNavigationItem & {
  selected: boolean;
};

export function SettingsNavigationItem(props: SettingsNavigationItemProps) {
  const Icon = props.icon;

  return (
    <Link
      to={props.to}
      className={cn(
        "w-full p-3 rounded-lg group flex items-center gap-3 transition-colors duration-200",
        props.selected
          ? "bg-foreground text-white"
          : "bg-transparent hover:bg-white",
      )}
    >
      <div
        className={cn(
          "p-2 rounded-lg transition-colors duration-200",
          props.selected
            ? "bg-white text-foreground"
            : "bg-gray-200 text-black/60 group-hover:bg-foreground group-hover:text-white",
        )}
      >
        <Icon size={24} />
      </div>

      <div className="flex flex-col">
        <p
          className={cn(
            "text-lg capitalize font-medium",
            props.selected ? "text-white" : "text-black",
          )}
        >
          {props.label}
        </p>
        <p
          className={cn(
            "text-xs",
            props.selected ? "text-white/70" : "text-muted",
          )}
        >
          {props.desc}
        </p>
      </div>
    </Link>
  );
}
