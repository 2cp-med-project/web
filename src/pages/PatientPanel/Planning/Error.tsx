import {
  PlanningScheduleBoard,
  PlanningSidebar,
} from "@/features/PatientPanel/Planning/index.ts";

type PlanningPageErrorProps = {
  onRetry: () => void;
};

export function PlanningPageError({ onRetry }: PlanningPageErrorProps) {
  return (
    <section className="space-y-4">
      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_300px]">
        <PlanningScheduleBoard.Error onRetry={onRetry} />
        <PlanningSidebar.Error />
      </div>
    </section>
  );
}
