import { usePlanning } from "@/hooks/patients.hooks/index.ts";
import { useMemo, useState } from "react";
import { PlanningPageContent } from "./Content.tsx";
import { PlanningPageError } from "./Error.tsx";
import { PlanningPageSkeleton } from "./Skeleton.tsx";

type PlanningView = "day" | "week" | "year";

function formatHeaderDate(date: Date) {
  const month = date.toLocaleDateString("fr-FR", { month: "short" });
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

function addDays(source: Date, amount: number) {
  const next = new Date(source);
  next.setDate(next.getDate() + amount);
  return next;
}

export function PlanningPage() {
  const { fetchPlanning } = usePlanning();
  const { data, isLoading, isError, refetch } = fetchPlanning();
  const [currentView, setCurrentView] = useState<PlanningView>("day");

  const defaultDate = data?.selectedDate ?? "2026-02-24";
  const [currentDate, setCurrentDate] = useState<Date>(new Date(defaultDate));

  const appointments = useMemo(() => {
    if (!data) return [];

    const selectedDate = currentDate.toISOString().slice(0, 10);

    return data.appointments.filter((appointment) => {
      if (currentView === "day") {
        return appointment.date === selectedDate;
      }

      if (currentView === "week") {
        return true;
      }

      return appointment.date.startsWith(selectedDate.slice(0, 4));
    });
  }, [currentDate, currentView, data]);

  if (isError) return <PlanningPageError onRetry={() => void refetch()} />;
  if (isLoading || !data) return <PlanningPageSkeleton />;

  return (
    <PlanningPageContent
      currentView={currentView}
      currentDateLabel={formatHeaderDate(currentDate)}
      selectedDay={currentDate.getDate()}
      appointments={appointments}
      planning={data}
      onViewChange={setCurrentView}
      onPreviousDate={() =>
        setCurrentDate((value) => addDays(value, currentView === "day" ? -1 : -7))
      }
      onNextDate={() =>
        setCurrentDate((value) => addDays(value, currentView === "day" ? 1 : 7))
      }
      onToday={() => setCurrentDate(new Date(data.selectedDate))}
    />
  );
}
