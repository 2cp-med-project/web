import { Skeleton } from "@/components/Skeleton.tsx";

export function PlanningSidebarSkeleton() {
  return (
    <aside className="space-y-4">
      <section className="rounded-[18px] border border-[#d8efe8] bg-white px-5 py-4">
        <Skeleton className="h-6 w-28 bg-[#eef8f5]" />
        <div className="mt-3 space-y-2">
          <Skeleton className="h-13 w-full rounded-full bg-[#eef8f5]" />
          <Skeleton className="h-13 w-full rounded-full bg-[#f5fcf9]" />
        </div>
      </section>

      <div className="grid grid-cols-2 gap-3">
        <Skeleton className="h-20 rounded-xl bg-white" />
        <Skeleton className="h-20 rounded-xl bg-white" />
      </div>

      <div className="space-y-3">
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={`planning-sidebar-appointment-${index}`}
            className="flex items-center gap-3 rounded-xl border border-[#d8efe8] bg-white px-4 py-3"
          >
            <Skeleton className="h-10 w-10 rounded-full bg-[#eef8f5]" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-28 bg-[#eef8f5]" />
              <Skeleton className="h-4 w-20 bg-[#f5fcf9]" />
            </div>
          </div>
        ))}
      </div>

      <Skeleton className="h-76 rounded-[18px] bg-white" />
    </aside>
  );
}
