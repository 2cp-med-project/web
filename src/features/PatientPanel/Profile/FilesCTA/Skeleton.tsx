import { Skeleton } from "@/components/Skeleton.tsx";

export function FilesCTASkeleton() {
  return (
    <div className="bg-white shadow-sm w-full rounded-lg p-4">
      <div className="flex flex-col gap-2">
        <Skeleton className="w-90 h-7 rounded-md" />
        <Skeleton className="w-56 h-4 rounded-md" />
      </div>

      <div className="w-full flex items-center justify-end gap-2 mt-4">
        <Skeleton className="w-40 h-9 rounded-xl" />
        <Skeleton className="w-42 h-9 rounded-xl" />
      </div>
    </div>
  );
}
