import { Skeleton } from "@/components/Skeleton.tsx";

export function ChatDetailsSkeleton() {
  return (
    <div className="bg-white rounded-xl flex flex-col h-full w-full">
      <div className="mt-4 flex flex-col items-center space-y-4">
        <Skeleton className="h-24 w-24 rounded-full" />

        <div className="space-y-2 text-center flex flex-col items-center">
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-4 w-56" />
        </div>

        <Skeleton className="h-3 w-32" />

        <div className="flex items-center justify-center gap-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>
      </div>
    </div>
  );
}
