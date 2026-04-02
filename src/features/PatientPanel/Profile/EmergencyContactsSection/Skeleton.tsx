import { Skeleton } from "@/components/Skeleton.tsx";

export function EmergencyContactsSectionSkeleton() {
  const rows = 2;

  return (
    <div className="w-full rounded-lg space-y-4">
      {/* Header */}
      <div className="flex items-center gap-2">
        <Skeleton className="w-40 h-4 rounded-md" />
      </div>

      {/* List */}
      <div className="space-y-3">
        {Array.from({ length: rows }).map((_, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between border border-red-200 rounded-xl p-3 bg-red-50/40"
          >
            {/* Left */}
            <div className="flex items-center gap-3">
              <Skeleton className="w-10 h-10 rounded-xl" />

              <div className="flex flex-col gap-2">
                <Skeleton className="w-28 h-4 rounded-md" />
                <Skeleton className="w-36 h-3 rounded-md" />
              </div>
            </div>

            {/* Call button */}
            <Skeleton className="w-9 h-9 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
