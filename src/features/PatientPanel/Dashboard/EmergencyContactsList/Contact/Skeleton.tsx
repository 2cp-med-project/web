import { Skeleton } from "@/components/Skeleton.tsx";

export function EmergencyContactSkeleton() {
  return (
    <div className="py-1 px-3 rounded-lg bg-white flex items-center justify-between">
      {/* Left content */}
      <div className="flex flex-col gap-1 items-start justify-start w-full">
        {/* Name + label */}
        <Skeleton className="w-3/5 h-4 rounded-md" />

        {/* Phone number */}
        <Skeleton className="w-2/5 h-3 rounded-md" />
      </div>

      {/* Right button */}
      <Skeleton className="w-6 h-6 rounded-md" />
    </div>
  );
}
