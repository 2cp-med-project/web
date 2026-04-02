import { Skeleton } from "@/components/Skeleton.tsx";
import { Grid } from "@radix-ui/themes";

export function QuickActionsSectionSkeleton() {
  const actionsCount = 4;
  return (
    <div className="w-full rounded-lg space-y-4">
      <div className="flex items-center gap-2">
        <Skeleton className="w-40 h-4 rounded-md" />
      </div>
      <Grid columns={"1"} gapY={"2"}>
        {Array.from({ length: actionsCount }).map((_, index) => (
          <div
            key={index}
            className="border border-black/20 rounded-xl bg-white w-full px-4 py-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <Skeleton className="w-6 h-6 rounded-md" />

              <div className="flex flex-col gap-2">
                <Skeleton className="w-40 h-4 rounded-md" />
                <Skeleton className="w-28 h-3 rounded-md" />
              </div>
            </div>

            <Skeleton className="w-6 h-6 rounded-md" />
          </div>
        ))}
      </Grid>
    </div>
  );
}
