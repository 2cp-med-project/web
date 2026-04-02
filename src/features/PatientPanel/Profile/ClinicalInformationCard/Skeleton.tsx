import { Skeleton } from "@/components/Skeleton.tsx";

export function ClinicalInformationCardSkeleton() {
  return (
    <div className="w-full bg-white shadow-sm rounded-lg p-5 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Skeleton className="w-5 h-5 rounded-sm" />
        <Skeleton className="w-44 h-4 rounded-md" />
      </div>

      {/* Blood type + Allergies */}
      <div className="grid grid-cols-2 gap-y-4 gap-x-6">
        {Array.from({ length: 2 }).map((_, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <Skeleton className="w-24 h-3 rounded-md" />
            <Skeleton className="w-28 h-4 rounded-md" />
          </div>
        ))}
      </div>

      {/* Chronic conditions */}
      <div className="flex flex-col gap-2">
        <Skeleton className="w-40 h-3 rounded-md" />

        <div className="flex items-center gap-2">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Skeleton key={idx} className="w-16 h-6 rounded-full" />
          ))}
        </div>
      </div>
    </div>
  );
}
