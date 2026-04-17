import type { PatientPlanningAppointment } from "@/types/entities.ts";
import { Link2, Plus, TimerReset } from "lucide-react";

type PlanningSidebarProps = {
  appointments: PatientPlanningAppointment[];
  totalToday: number;
  availableHoursLabel: string;
  monthLabel: string;
  calendarDays: number[];
  calendarOffset: number;
  selectedDay: number;
};

const weekDays = ["LU", "MA", "ME", "JE", "VE", "SA", "DI"];

function DoctorAvatar({ shortName }: { shortName: string }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2f8b73] text-xs font-semibold text-white">
      {shortName}
    </div>
  );
}

function formatAppointmentTime(time: string) {
  const [hour, minute] = time.split(":");
  const numericHour = Number.parseInt(hour, 10);
  const meridiem = numericHour >= 12 ? "PM" : "AM";
  const displayHour = numericHour % 12 || 12;
  return `${String(displayHour).padStart(2, "0")}:${minute} ${meridiem}`;
}

export function PlanningSidebar({
  appointments,
  totalToday,
  availableHoursLabel,
  monthLabel,
  calendarDays,
  calendarOffset,
  selectedDay,
}: PlanningSidebarProps) {
  return (
    <aside className="space-y-4">
      <section className="rounded-[18px] border border-[#d8efe8] bg-white px-5 py-4 shadow-[0_10px_25px_-18px_rgba(17,78,62,0.35)]">
        <p className="text-[1.05rem] font-semibold text-[#42bea0]">
          Actions rapides
        </p>

        <div className="mt-3 space-y-2">
          <button
            type="button"
            className="flex w-full items-center justify-between rounded-full bg-[#54c8a9] px-6 py-3 text-lg font-semibold text-white"
          >
            <span>Nouveau rendez-vous</span>
            <Plus size={20} />
          </button>

          <button
            type="button"
            className="flex w-full items-center justify-between rounded-full border border-[#6fd1ba] px-6 py-3 text-lg font-semibold text-[#35b899]"
          >
            <span>Definir un rappel</span>
            <TimerReset size={18} />
          </button>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-[#d8efe8] bg-white px-3 py-2.5">
          <p className="text-sm text-[#7d8483]">Total du jour</p>
          <p className="mt-2 text-2xl font-semibold text-[#43c09f]">
            {totalToday} auj.
          </p>
        </div>

        <div className="rounded-xl border border-[#d8efe8] bg-white px-3 py-2.5">
          <p className="text-sm text-[#7d8483]">Disponible</p>
          <p className="mt-2 text-2xl font-semibold text-[#43c09f]">
            {availableHoursLabel}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {appointments.map((appointment) => (
          <article
            key={appointment.id}
            className="flex items-center justify-between rounded-xl border border-[#d8efe8] bg-white px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <DoctorAvatar shortName={appointment.doctorShortName} />
              <div>
                <p className="text-[1.02rem] font-semibold text-[#27413d]">
                  {appointment.doctorName}
                </p>
                <div className="mt-1 flex items-center gap-1.5 text-sm text-[#808886]">
                  <Link2 size={12} />
                  <span>{formatAppointmentTime(appointment.start)}</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="rounded-md bg-[#26b18c] px-3 py-2 text-base text-white"
            >
              x annuler
            </button>
          </article>
        ))}
      </div>

      <section className="rounded-[18px] border border-[#d8efe8] bg-white px-5 py-5">
        <div className="flex items-center justify-between">
          <p className="text-[1.1rem] font-semibold text-[#303537]">
            {monthLabel}
          </p>
          <div className="flex gap-5 text-2xl text-[#8b8f90]">
            <span>&lsaquo;</span>
            <span>&rsaquo;</span>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-7 gap-y-4 text-center">
          {weekDays.map((day) => (
            <span
              key={day}
              className="text-xs font-medium tracking-wide text-[#989d9e]"
            >
              {day}
            </span>
          ))}

          {Array.from({ length: calendarOffset }).map((_, index) => (
            <span key={`offset-${index}`} />
          ))}

          {calendarDays.map((day) => (
            <span
              key={day}
              className={
                day === selectedDay
                  ? "mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#21b28a] text-base font-semibold text-white"
                  : "mx-auto flex h-10 w-10 items-center justify-center text-base font-medium text-[#4f5557]"
              }
            >
              {day}
            </span>
          ))}
        </div>
      </section>
    </aside>
  );
}
