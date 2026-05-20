import { Skeleton } from "@/components/Skeleton.tsx";

function ViewerSidebarCardSkeleton() {
  return (
    <div className="rounded-[24px] border border-[#dcefe9] bg-white p-4 shadow-sm">
      <div className="border-b border-[#edf5f2] pb-3">
        <Skeleton className="h-4 w-32 bg-[#edf7f4]" />
      </div>
      <div className="space-y-3 pt-4">
        <Skeleton className="h-4 w-full bg-[#f3faf8]" />
        <Skeleton className="h-4 w-5/6 bg-[#edf7f4]" />
        <Skeleton className="h-4 w-2/3 bg-[#f3faf8]" />
      </div>
    </div>
  );
}

function PageThumbnailSkeleton({ active }: { active: boolean }) {
  return (
    <div
      className={
        active
          ? "rounded-[18px] border border-[#69ccb5] bg-[#e8f7f2] p-3"
          : "rounded-[18px] border border-[#e4f3ee] bg-white p-3"
      }
    >
      <Skeleton className="h-2 w-20 bg-[#d9eee7]" />
      <Skeleton className="mt-2 h-2 w-14 bg-[#edf7f4]" />
      <Skeleton className="mt-2 h-2 w-16 bg-[#edf7f4]" />
      <Skeleton className="mt-4 h-14 rounded-xl bg-[#e3ece9]" />
      <Skeleton className="mt-4 h-2 w-16 bg-[#edf7f4]" />
      <Skeleton className="mt-2 h-2 w-20 bg-[#edf7f4]" />
      <Skeleton className="mt-2 h-2 w-14 bg-[#edf7f4]" />
    </div>
  );
}

export function FileViewerSkeleton() {
  return (
    <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
      <section className="overflow-hidden rounded-[32px] border border-[#dcefe9] bg-white">
        <div className="flex items-center justify-between border-b border-[#dcefe9] px-4 py-3">
          <Skeleton className="h-4 w-24 bg-[#edf7f4]" />
          <div className="flex items-center gap-3">
            <Skeleton className="h-4 w-4 rounded-full bg-[#edf7f4]" />
            <Skeleton className="h-4 w-10 bg-[#f3faf8]" />
            <Skeleton className="h-4 w-4 rounded-full bg-[#edf7f4]" />
          </div>
        </div>

        <div className="grid min-h-[720px] bg-[#eef7f4] md:grid-cols-[128px_minmax(0,1fr)]">
          <aside className="border-r border-[#dcefe9] bg-[#f1f8f5] p-3">
            <Skeleton className="h-4 w-16 bg-[#dcefe9]" />
            <div className="mt-4 space-y-3">
              <PageThumbnailSkeleton active />
              <PageThumbnailSkeleton active={false} />
              <PageThumbnailSkeleton active={false} />
            </div>
          </aside>

          <div className="overflow-auto p-5">
            <div className="mx-auto max-w-[720px] rounded-[28px] border border-[#dcefe9] bg-white px-8 py-8">
              <div className="border-b border-[#ebf5f2] pb-6">
                <Skeleton className="h-3 w-32 bg-[#edf7f4]" />
                <Skeleton className="mt-4 h-8 w-56 bg-[#edf7f4]" />
                <Skeleton className="mt-3 h-4 w-64 bg-[#f3faf8]" />
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <Skeleton className="h-28 rounded-2xl bg-[#f3faf8]" />
                <Skeleton className="h-28 rounded-2xl bg-[#edf7f4]" />
              </div>

              <div className="mt-8 space-y-4">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={`viewer-copy-skeleton-${index}`} className="space-y-2">
                    <Skeleton className="h-3 w-full bg-[#edf7f4]" />
                    <Skeleton className="h-3 w-5/6 bg-[#f3faf8]" />
                    <Skeleton className="h-3 w-2/3 bg-[#edf7f4]" />
                  </div>
                ))}
              </div>

              <Skeleton className="mt-8 h-80 rounded-[24px] bg-[#f3faf8]" />
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-4">
        <div className="flex flex-col gap-3 md:flex-row xl:flex-col">
          <Skeleton className="h-12 flex-1 rounded-full bg-white" />
          <Skeleton className="h-12 flex-1 rounded-full bg-[#dff5ee]" />
        </div>
        {Array.from({ length: 4 }).map((_, index) => (
          <ViewerSidebarCardSkeleton key={`viewer-sidebar-skeleton-${index}`} />
        ))}
      </div>
    </section>
  );
}
