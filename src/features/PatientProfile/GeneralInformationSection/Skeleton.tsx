import { Skeleton } from "@/components/Skeleton.tsx";
import { cn } from "@/lib/utils.ts";
import { Eye } from "lucide-react";

export function PatientGeneralInformationSectionSkeleton() {
  const rows = 5; // ID, CIN, Address, Age, Gender, (optionally more)

  return (
    <div className="bg-white border border-black/20 rounded-lg px-4 py-4 flex-1 shadow-sm h-full">
      {/* Header */}
      <div className="flex gap-4 items-center mb-4">
        <Skeleton className="w-48 h-6 rounded-md" />
        <Eye className="text-gray-400" />
      </div>

      {/* Rows */}
      <div className="flex flex-col mt-5">
        {Array.from({ length: rows }).map((_, idx) => (
          <div
            key={idx}
            className={cn(
              "py-4 grid grid-cols-2 w-full items-center",
              idx !== rows - 1 ? "border-b-3 border-gray-200" : "",
            )}
          >
            <Skeleton className="w-32 h-4 rounded-md" />
            <Skeleton className="w-full h-4 rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
}
