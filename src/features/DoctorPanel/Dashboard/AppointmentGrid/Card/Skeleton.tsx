import { Skeleton } from "@/components/Skeleton.tsx";

export function AppointmentCardSkeleton() {
  return (
    <div className="font-archivo border border-black/20 bg-white py-4 px-4 flex justify-between rounded-xl w-full">
      {/* Left side */}
      <div className="flex items-center gap-2">
        {/* Avatar */}
        <Skeleton className="w-10 h-10 rounded-full" />

        <div className="space-y-1">
          {/* Name */}
          <Skeleton className="w-32 h-4 rounded-md" />

          {/* Reason */}
          <Skeleton className="w-40 h-3 rounded-md" />

          {/* Badge */}
          <Skeleton className="w-24 h-5 rounded-full mt-1" />
        </div>
      </div>

      {/* Right side (time) */}
      <div className="flex flex-col items-start justify-center">
        <Skeleton className="w-12 h-4 rounded-md" />
      </div>
    </div>
  );
}
