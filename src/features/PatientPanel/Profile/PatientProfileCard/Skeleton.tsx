import { Skeleton } from "@/components/Skeleton.tsx";

type PatientProfileCardSkeletonProps = {};

export function PatientProfileCardSkeleton({}: PatientProfileCardSkeletonProps) {
  const infoRows = 3;

  return (
    <div className="space-y-6 bg-white rounded-lg shadow-sm w-full px-6 py-8">
      {/* Avatar */}
      <div className="w-full flex items-center justify-center">
        <div className="relative w-fit">
          <Skeleton className="w-40 h-40 rounded-full" />
        </div>
      </div>

      {/* Name + ID */}
      <div className="text-center flex flex-col gap-2">
        <Skeleton className="w-40 h-5 rounded-md mx-auto" />
        <Skeleton className="w-24 h-3 rounded-md mx-auto" />
      </div>

      {/* Divider */}
      <div className="border-t border-black/10" />

      {/* Info */}
      <ul className="flex flex-col">
        {Array.from({ length: infoRows }).map((_, idx) => (
          <li key={idx} className="flex items-center gap-3 py-3">
            <Skeleton className="w-12 h-9 rounded-xl" />
            <Skeleton className="w-full h-6 rounded-md" />
          </li>
        ))}
      </ul>

      {/* Button */}
      <div className="pt-2">
        <Skeleton className="mx-auto w-full max-w-80 h-10 rounded-lg" />
      </div>
    </div>
  );
}
