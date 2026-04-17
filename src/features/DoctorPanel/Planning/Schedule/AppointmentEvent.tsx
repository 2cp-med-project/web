import type { Patient } from "@/types/entities.ts";
import type { CalendarEvent } from "@schedule-x/calendar";

type AppointmentEventProps = {
  calendarEvent: CalendarEvent;
};

export function AppointmentEvent({ calendarEvent }: AppointmentEventProps) {
  const start = calendarEvent.start.toPlainDateTime();
  const end = calendarEvent.end.toPlainDateTime();

  const patient = calendarEvent.patient as Patient;
  const reason = calendarEvent.reason as string;

  const formatTime = (h: number, m: number) =>
    `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;

  return (
    <div className="flex h-full cursor-pointer flex-col justify-between rounded-r-sm border-l-[5px] border-[#69d8c0] bg-[#cfeee6] px-3 py-2 text-[11px] text-[#244744] shadow-sm">
      <div className="truncate font-semibold leading-tight text-[#1e4340]">
        {patient.fullname}
      </div>

      {reason && (
        <div className="truncate text-[10px] opacity-80">{reason}</div>
      )}

      <div className="flex justify-between text-[10px] font-medium opacity-80">
        <span>{formatTime(start.hour, start.minute)}</span>
        <span>{formatTime(end.hour, end.minute)}</span>
      </div>
    </div>
  );
}
