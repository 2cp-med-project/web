import { cn } from "@/lib/utils.ts";

type SkeletonProps = {
  className?: string;
};

export function Skeleton({ className }: SkeletonProps) {
  return <div className={cn("bg-gray-200 animate-pulse", className)}></div>;
}
