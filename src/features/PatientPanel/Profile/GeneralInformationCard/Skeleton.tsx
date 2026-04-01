import { Skeleton } from "@/components/Skeleton.tsx";

export function GeneralInformationCardSkeleton() {
  const rows = 4;

  return (
    <div className="w-full bg-white shadow-sm rounded-lg p-5 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Skeleton className="w-5 h-5 rounded-sm" />
        <Skeleton className="w-40 h-4 rounded-md" />
      </div>

      {/* Content */}
      <div className="grid grid-cols-2 gap-y-4 gap-x-6">
        {Array.from({ length: rows }).map((_, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <Skeleton className="w-20 h-3 rounded-md" />
            <Skeleton className="w-24 h-4 rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
}
