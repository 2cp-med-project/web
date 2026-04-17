import { Skeleton } from "@/components/Skeleton.tsx";

export function ScheduleBoardSkeleton() {
  return (
    <section className="overflow-hidden rounded-[18px] border border-[#d8efe8] bg-white">
      <div className="border-b border-[#c9d9d4] px-4 py-3">
        <Skeleton className="h-5 w-14 bg-[#eef8f5]" />
      </div>

      <div className="grid grid-cols-[110px_1fr]">
        <div className="border-r border-[#bccdc7]">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={`patient-schedule-hour-${index}`}
              className="flex h-[100px] items-start border-b border-[#bccdc7] px-4 py-2"
            >
              <Skeleton className="h-5 w-16 bg-[#eef8f5]" />
            </div>
          ))}
        </div>

        <div>
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={`patient-schedule-grid-${index}`}
              className="h-[100px] border-b border-[#bccdc7]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
