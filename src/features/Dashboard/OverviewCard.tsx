import { Card } from "@radix-ui/themes";
import type { LucideIcon } from "lucide-react";
import { cn } from "../../utils/cn.ts";

type OverviewCardProps = {
  label: string;
  icon: LucideIcon;
  iconColor: string;
  desc: string;
  value: number;
};

export function OverviewCard(props: OverviewCardProps) {
  const Icon = props.icon;

  return (
    <Card className="rounded-lg shadow-sm hover:shadow-md transition-shadow space-y-2 bg-white">
      <div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-500">{props.label}</p>
          <div
            className={cn(
              props.iconColor,
              "p-2 rounded-xl bg-gray-100 flex items-center justify-center",
            )}
          >
            <Icon className="w-5 h-5" />
          </div>
        </div>

        <p className="text-2xl font-semibold text-gray-900">{props.value}</p>
        <p className="text-sm text-gray-400">{props.desc}</p>
      </div>
    </Card>
  );
}
