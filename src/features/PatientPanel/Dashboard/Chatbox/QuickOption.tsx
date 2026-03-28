import type { LucideIcon } from "lucide-react";

type QuickOptionProps = {
  icon: LucideIcon;
  label: string;
  onSelect: () => void;
};

export function QuickOption(props: QuickOptionProps) {
  const Icon = props.icon;
  return (
    <button
      className="flex items-center gap-2 bg-white rounded-lg px-3 py-1 text-center"
      onClick={props.onSelect}
    >
      <Icon className="text-foreground" size={16} />
      <p className="text-black/70 text-base">{props.label}</p>
    </button>
  );
}
