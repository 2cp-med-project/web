import { Card } from "@radix-ui/themes";
import { Link } from "@tanstack/react-router";
import { type LucideIcon } from "lucide-react";
import { ROLE } from "../../constants/index.ts";
import type { Role } from "../../types/index.ts";

type RoleCardProps = {
  icon: LucideIcon;
  name: string;
  desc: string;
  role: Role;
};

export function RoleCard(props: RoleCardProps) {
  const Icon = props.icon;
  const to =
    props.role === ROLE.DOCTOR ? "/register/doctor" : "/register/patient";

  return (
    <Card
      style={{
        borderRadius: "var(--radius-6)",
      }}
      variant="ghost"
      className="shadow-3 bg-white w-80"
    >
      <div className="space-y-2 flex flex-col items-center p-4">
        <div className="p-4 w-fit rounded-[50%] bg-linear-to-t from-foreground/15 to-foreground/0">
          <Icon className="text-foreground" strokeWidth={1} size={40} />
        </div>
        <div className="text-center space-y-1">
          <p className="text-2xl font-medium">{props.name}</p>
          <p className="text-sm text-muted">{props.desc}</p>
        </div>
        <Link
          to={to}
          className="gap-2 cursor-pointer group mt-4 bg-linear-to-r from-foreground/45 to-foreground/80 text-white w-full flex items-center justify-center py-2 rounded-xl transition-colors duration-200 hover:bg-foreground/90"
        >
          <Icon size={30} strokeWidth={1} />
          <p>{props.name}</p>
        </Link>
      </div>
    </Card>
  );
}
