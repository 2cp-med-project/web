import type { PopulatedAppointment } from "@/types/entities.ts";
import { getInitials } from "@/utils/index.ts";
import { Avatar, Badge } from "@radix-ui/themes";

type AppointmentCardContentProps = PopulatedAppointment & {};

export function AppointmentCardContent(props: AppointmentCardContentProps) {
  return (
    <div className="font-archivo border border-black/20 bg-white py-4 px-4 flex justify-between rounded-xl w-full">
      <div className="flex items-center gap-2">
        <Avatar
          src={props.patient.avatar ?? undefined}
          fallback={getInitials(props.patient.fullname)}
          radius="full"
          size={"5"}
        />
        <div>
          <p className="text-black font-semibold text-base">
            {props.patient.fullname}
          </p>
          <p className="text-muted text-xs">{props.reason}</p>
          <Badge color="green" className="mt-1 w-fit" radius="full">
            <p className="text-foreground">Checked-in</p>
          </Badge>
        </div>
      </div>
      <div className="flex flex-col items-start">
        <p className="font-medium text-foreground">
          {props.start.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })}
        </p>
      </div>
    </div>
  );
}
