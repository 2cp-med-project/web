import { Skeleton } from "@/components/Skeleton.tsx";

export function PatientProfileCardSkeleton() {
  return (
    <div className="relative bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Top background */}
      <div className="absolute inset-x-0 top-0 h-20 bg-foreground"></div>

      <div className="relative z-10 flex justify-center my-4 px-4">
        <div className="flex flex-col w-full">
          {/* Avatar + Name */}
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="mx-auto p-1 w-fit rounded-full border border-foreground bg-white">
              <Skeleton className="w-20 h-20 rounded-full" />
            </div>

            <div className="text-center flex flex-col items-center gap-2">
              <Skeleton className="w-40 h-5 rounded-md" />
              <Skeleton className="w-24 h-3 rounded-md" />
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 w-full flex items-center justify-center gap-2">
            {/* Blood type */}
            <div className="py-2 w-full bg-gray-100 text-center rounded-lg flex flex-col items-center gap-2">
              <Skeleton className="w-24 h-4 rounded-md" />
              <Skeleton className="w-16 h-8 rounded-md" />
            </div>

            {/* Age */}
            <div className="py-2 w-full bg-gray-100 text-center rounded-lg flex flex-col items-center gap-2">
              <Skeleton className="w-16 h-4 rounded-md" />
              <Skeleton className="w-12 h-8 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
