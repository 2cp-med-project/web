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
    <div className="cursor-pointer h-full flex flex-col justify-between rounded-md border border-black/20 bg-gray-100 p-1 text-[11px] text-black/60 shadow-sm">
      <div className="font-semibold leading-tight truncate">
        {patient.fullname}
      </div>

      {reason && (
        <div className="text-[10px] opacity-80 truncate">{reason}</div>
      )}

      <div className="flex justify-between text-[10px] font-medium opacity-80">
        <span>{formatTime(start.hour, start.minute)}</span>
        <span>{formatTime(end.hour, end.minute)}</span>
      </div>
    </div>
  );
}
