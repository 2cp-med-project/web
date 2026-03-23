import { Skeleton } from "@/components/Skeleton.tsx";
import { Card } from "@radix-ui/themes";

export function OverviewCardSkeleton() {
  return (
    <Card className="rounded-lg shadow-sm space-y-2 bg-white">
      <div>
        {/* Top row */}
        <div className="flex items-center justify-between">
          <Skeleton className="w-24 h-4 rounded-md" />

          <div className="p-2 rounded-xl bg-gray-100 flex items-center justify-center">
            <Skeleton className="w-5 h-5 rounded-md" />
          </div>
        </div>

        {/* Value */}
        <Skeleton className="w-20 h-7 mt-2 rounded-md" />

        {/* Description */}
        <Skeleton className="w-32 h-4 mt-1 rounded-md" />
      </div>
    </Card>
  );
}
