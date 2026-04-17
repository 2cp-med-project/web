import type { PatientPlanningAppointment } from "@/types/entities.ts";

type ScheduleBoardContentProps = {
  appointments: PatientPlanningAppointment[];
};

const hours = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
];

function getHourFromTime(time: string) {
  return Number.parseInt(time.split(":")[0], 10);
}

function getDurationInHours(start: string, end: string) {
  return getHourFromTime(end) - getHourFromTime(start);
}

function getAppointmentTop(start: string) {
  const startHour = getHourFromTime(start);
  return (startHour - 8) * 100;
}

function getAppointmentHeight(start: string, end: string) {
  return getDurationInHours(start, end) * 100;
}

export function ScheduleBoardContent({
  appointments,
}: ScheduleBoardContentProps) {
  return (
    <section className="overflow-hidden rounded-[18px] border border-[#d8efe8] bg-white">
      <div className="border-b border-[#c9d9d4] px-4 py-3">
        <p className="text-[1.05rem] font-semibold text-[#1d2625]">Heure</p>
      </div>

      <div className="relative grid grid-cols-[110px_1fr]">
        <div className="border-r border-[#bccdc7] bg-white">
          {hours.map((hour) => (
            <div
              key={hour}
              className="h-[100px] border-b border-[#bccdc7] px-4 py-2 text-[0.95rem] text-[#767978]"
            >
              {hour}
            </div>
          ))}
        </div>

        <div className="relative bg-white">
          {hours.map((hour) => (
            <div key={hour} className="h-[100px] border-b border-[#bccdc7]" />
          ))}

          {appointments.map((appointment) => (
            <article
              key={appointment.id}
              className="absolute left-1.5 right-1.5 rounded-r-sm border-l-[6px] border-[#69d8c0] bg-[#cfeee6] px-4 py-3 text-[#244744]"
              style={{
                top: `${getAppointmentTop(appointment.start) + 4}px`,
                height: `${getAppointmentHeight(appointment.start, appointment.end) - 8}px`,
              }}
            >
              <div className="flex items-start justify-between">
                <p className="text-[1.05rem] font-semibold">
                  {appointment.title}
                </p>
                <span className="text-sm font-semibold text-[#82908a]">
                  {appointment.durationLabel}
                </span>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2f8b73] text-xs font-semibold text-white">
                  {appointment.doctorShortName}
                </div>
                <p className="text-base text-[#284643]">
                  {appointment.status === "confirmed" ? "confirme" : "en attente"}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
