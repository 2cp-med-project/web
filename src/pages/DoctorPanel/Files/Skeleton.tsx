import { Skeleton } from "@/components/Skeleton.tsx";
import { FilesTable, FilesTitleBlock } from "@/features/DoctorPanel/Files/index.ts";

export function FilesPageSkeleton() {
  return (
    <section className="space-y-6 px-2">
      <FilesTitleBlock />

      <section className="space-y-4 rounded-[28px] bg-[#f5fcf9] px-5 py-6 md:px-8 md:py-8">
        <div className="flex flex-col gap-3 md:flex-row">
          <Skeleton className="h-12 w-32 rounded-full bg-white" />
          <Skeleton className="h-12 w-32 rounded-full bg-white" />
          <Skeleton className="h-12 w-36 rounded-full bg-white" />
        </div>

        <FilesTable.Skeleton />
      </section>
    </section>
  );
}
