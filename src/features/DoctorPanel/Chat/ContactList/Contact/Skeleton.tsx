import { Skeleton } from "@/components/Skeleton.tsx";

export function ContactSkeleton() {
  return (
    <div className="rounded-xl px-2 py-2 w-full flex gap-2">
      <div className="flex items-center justify-center">
        <Skeleton className="w-10 h-10 rounded-full" />
      </div>

      <div className="flex flex-col h-full justify-between w-full gap-2">
        <div className="flex items-center justify-between">
          <Skeleton className="w-2/5 h-4 rounded-md" />
          <Skeleton className="w-10 h-3 rounded-md" />
        </div>

        <div className="flex items-center gap-2">
          <Skeleton className="w-4 h-4 rounded-sm" />
          <Skeleton className="w-3/5 h-3 rounded-md" />
        </div>
      </div>
    </div>
  );
}
