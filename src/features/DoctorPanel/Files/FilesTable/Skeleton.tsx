import { Skeleton } from "@/components/Skeleton.tsx";

export function FilesTableSkeleton() {
  return (
    <div className="overflow-hidden rounded-sm border border-[#d7ece5] bg-white">
      <div className="hidden h-14 bg-[#eef8f5] md:block" />

      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={`doctor-file-skeleton-${index}`}
          className="grid gap-4 border-t border-[#d7ece5] px-6 py-5 md:grid-cols-[minmax(0,1.4fr)_180px_minmax(240px,0.9fr)]"
        >
          <div className="flex items-center gap-4">
            <Skeleton className="h-12 w-12 rounded-2xl bg-[#eef8f5]" />
            <Skeleton className="h-5 w-36 bg-[#eef8f5]" />
          </div>
          <Skeleton className="h-5 w-24 bg-[#eef8f5]" />
          <div className="flex items-center gap-3">
            <Skeleton className="h-11 w-11 rounded-full bg-[#eef8f5]" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-32 bg-[#eef8f5]" />
              <Skeleton className="h-3 w-40 bg-[#f3faf8]" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
