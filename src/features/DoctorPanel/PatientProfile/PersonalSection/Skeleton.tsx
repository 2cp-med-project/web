import { Skeleton } from "@/components/Skeleton.tsx";

export function PatientPersonalSectionSkeleton() {
  return (
    <div className="border border-black/20 bg-white py-8 rounded-lg shadow-sm">
      <div className="space-y-2 flex flex-col items-center justify-center">
        <div className="p-1 rounded-full w-fit border-foreground border">
          <Skeleton className="w-40 h-40 rounded-full" />
        </div>

        <Skeleton className="w-48 h-6 rounded-md" />
      </div>

      <div className="flex flex-col gap-3 items-center justify-center mt-9">
        <Skeleton className="w-40 h-4 rounded-md" />
        <Skeleton className="w-52 h-4 rounded-md" />
      </div>

      <div className="mt-8 px-6">
        <div className="flex flex-col items-center gap-3">
          <Skeleton className="h-4 w-52 rounded-md" />
          <Skeleton className="h-10 w-full rounded-xl" />
        </div>
      </div>
    </div>
  );
}
