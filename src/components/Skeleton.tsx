import { cn } from "@/lib/utils.ts";

type SkeletonProps = {
  className?: string;
};

export function Skeleton({ className = "w-5 h-5" }: SkeletonProps) {
  return (
    <div className={cn("rounded bg-gray-200 animate-pulse", className)}></div>
  );
}
