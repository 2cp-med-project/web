import {
  PlanningScheduleBoard,
  PlanningSidebar,
  PlanningToolbar,
} from "@/features/PatientPanel/Planning/index.ts";
import type { PatientPlanningData } from "@/types/dashboard.ts";
import type { PatientPlanningAppointment } from "@/types/entities.ts";

type PlanningView = "day" | "week" | "year";

type PlanningPageContentProps = {
  currentView: PlanningView;
  currentDateLabel: string;
  selectedDay: number;
  appointments: PatientPlanningAppointment[];
  planning: PatientPlanningData;
  onViewChange: (view: PlanningView) => void;
  onPreviousDate: () => void;
  onNextDate: () => void;
  onToday: () => void;
};

export function PlanningPageContent({
  currentView,
  currentDateLabel,
  selectedDay,
  appointments,
  planning,
  onViewChange,
  onPreviousDate,
  onNextDate,
  onToday,
}: PlanningPageContentProps) {
  return (
    <section className="space-y-4">
      <PlanningToolbar
        currentView={currentView}
        currentDateLabel={currentDateLabel}
        onViewChange={onViewChange}
        onPreviousDate={onPreviousDate}
        onNextDate={onNextDate}
        onToday={onToday}
      />

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_300px]">
        <PlanningScheduleBoard.Content appointments={appointments} />

        <PlanningSidebar.Content
          appointments={appointments}
          totalToday={appointments.length}
          availableHoursLabel={`${planning.availableHours} h`}
          monthLabel={planning.miniCalendarMonthLabel}
          calendarDays={planning.miniCalendarDays}
          calendarOffset={planning.miniCalendarOffset}
          selectedDay={selectedDay}
        />
      </div>
    </section>
  );
}
