import { Skeleton } from "@/components/Skeleton.tsx";

export function ChatWindowHeaderSkeleton() {
  return (
    <header className="p-2 border-b border-b-gray-300 flex justify-between items-center h-16">
      <div className="flex items-center gap-2">
        <Skeleton className="h-10 w-10 rounded-full" />

        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-20" />
        </div>
      </div>

      <Skeleton className="h-9 w-9 rounded-full" />
    </header>
  );
}
