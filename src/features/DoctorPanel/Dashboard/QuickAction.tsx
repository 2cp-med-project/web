import { ChevronRight, type LucideIcon } from "lucide-react";

type QuickActionProps = {
  icon: LucideIcon;
  label: string;
  desc: string;
  action: () => void;
};

export function QuickAction({ icon, label, desc, action }: QuickActionProps) {
  const Icon = icon;
  return (
    <button
      className="border border-black/20 rounded-xl bg-white hover:bg-[#1FAF87]/25 transition-colors duration-300 w-full px-4 py-4 flex items-center justify-between"
      onClick={action}
    >
      <div className="flex items-center gap-4">
        <Icon className="text-foreground" size={26} />
        <div className="flex flex-col">
          <p className="font-medium text-black text-base text-start">{label}</p>
          <p className="text-muted text-xs text-start">{desc}</p>
        </div>
      </div>
      <ChevronRight className="text-gray-400" size={26} />
    </button>
  );
}
