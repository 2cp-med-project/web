import {
  PlanningScheduleBoard,
  PlanningSidebar,
} from "@/features/PatientPanel/Planning/index.ts";
import { Skeleton } from "@/components/Skeleton.tsx";

export function PlanningPageSkeleton() {
  return (
    <section className="space-y-4">
      <div className="rounded-[18px] border border-[#d8efe8] bg-white px-3 py-3">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Skeleton className="h-11 w-22 rounded-2xl bg-[#eef8f5]" />
            <Skeleton className="h-11 w-22 rounded-2xl bg-[#f5fcf9]" />
            <Skeleton className="h-11 w-22 rounded-2xl bg-[#f5fcf9]" />
          </div>
          <Skeleton className="h-8 w-32 bg-[#eef8f5]" />
          <Skeleton className="h-8 w-16 bg-[#eef8f5]" />
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_300px]">
        <PlanningScheduleBoard.Skeleton />
        <PlanningSidebar.Skeleton />
      </div>
    </section>
  );
}
