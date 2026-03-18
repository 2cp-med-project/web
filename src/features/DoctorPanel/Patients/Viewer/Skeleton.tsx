import { Skeleton } from "@/components/Skeleton.tsx"; // your own Skeleton component
import { BriefcaseMedical, Eye } from "lucide-react";

export function PatientViewerSkeleton() {
  const generalInfoRows = 3;
  const clinicalRows = 3;

  return (
    <div>
      <section className="space-y-10 w-full h-full">
        {/* Top section: avatar + fullname + email + phone */}
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="p-1 rounded-full border border-black/10">
            <Skeleton className="w-30 h-30 rounded-full" />
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <Skeleton className="w-40 h-6 rounded-md" />
            <Skeleton className="w-32 h-4 rounded-md" />
            <Skeleton className="w-32 h-4 rounded-md" />
          </div>
        </div>

        {/* Bottom section: general info + clinical basics */}
        <div className="flex items-start justify-between gap-4">
          {/* General Information */}
          <div className="border border-black/20 rounded-lg px-4 py-4 flex-1 shadow-sm">
            <div className="flex gap-4 items-center mb-2">
              <Skeleton className="w-48 h-6 rounded-md" />
              <Eye className="text-gray-400" />
            </div>
            <div className="flex flex-col gap-2">
              {Array.from({ length: generalInfoRows }).map((_, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-2 items-center py-3 border-b border-gray-200"
                >
                  <Skeleton className="w-24 h-4 rounded-md" />
                  <Skeleton className="w-full h-4 rounded-md" />
                </div>
              ))}
            </div>
          </div>

          {/* Clinical Basics */}
          <div className="border border-black/20 rounded-lg px-4 py-4 flex-1 shadow-sm">
            <div className="flex gap-4 items-center mb-2">
              <Skeleton className="w-48 h-6 rounded-md" />
              <BriefcaseMedical className="text-gray-400" />
            </div>
            <div className="flex flex-col gap-2">
              {Array.from({ length: clinicalRows }).map((_, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-2 items-center py-3 border-b border-gray-200"
                >
                  <Skeleton className="w-32 h-4 rounded-md" />
                  <Skeleton className="w-full h-4 rounded-md" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Action button */}
      <div className="mt-8 w-full max-w-100 mx-auto flex justify-center">
        <Skeleton className="w-full h-10 rounded-xl" />
      </div>
    </div>
  );
}
