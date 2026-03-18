import { Skeleton } from "@/components/Skeleton.tsx";

export function PatientCardSkeleton() {
  return (
    <div className="bg-white w-full rounded-lg py-4 shadow-sm">
      <div className="h-full w-full border-l-2 border-l-foreground px-4 space-y-4">
        <div className="flex gap-4 items-center">
          <Skeleton className="w-24 h-24 rounded-lg" />
          <div className="flex flex-col gap-2">
            <Skeleton className="w-34 h-6" />
            <Skeleton className="w-20 h-4" />
            <Skeleton className="w-28 h-4" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2 mt-2 flex-wrap">
            <Skeleton className="w-10 h-4" />
            <Skeleton className="w-6 h-4" />
            {Array.from({ length: 2 }).map((_, index) => (
              <Skeleton key={index} className="w-14 h-4" />
            ))}
          </div>

          <div className="mt-2 text-muted text-sm">
            <Skeleton className="w-40 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
