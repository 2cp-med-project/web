import { Skeleton } from "@/components/Skeleton.tsx";
import * as FileViewer from "@/features/DoctorPanel/FileViewer/index.ts";

export function FilePageSkeleton() {
  return (
    <section className="space-y-6 px-2">
      <div className="space-y-2">
        <Skeleton className="h-4 w-24 bg-[#edf7f4]" />
        <Skeleton className="h-6 w-32 bg-[#dff5ee]" />
        <Skeleton className="h-9 w-64 bg-[#edf7f4]" />
        <Skeleton className="h-4 w-72 bg-[#f3faf8]" />
      </div>

      <FileViewer.Skeleton />
    </section>
  );
}
