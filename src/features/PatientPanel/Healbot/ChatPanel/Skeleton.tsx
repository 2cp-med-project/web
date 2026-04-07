import { Skeleton } from "@/components/Skeleton.tsx";

export function ChatPanelSkeleton() {
  return (
    <section className="relative flex min-w-0 flex-1 flex-col overflow-hidden bg-[#eefdf8]">
      <div className="flex items-center gap-4 border-b border-[#d8efe8] bg-white px-5 py-3.5">
        <Skeleton className="h-11 w-11 rounded-2xl bg-[#dff4ee]" />
        <div className="space-y-2">
          <Skeleton className="h-5 w-32 bg-[#e6f5f0]" />
          <Skeleton className="h-4 w-40 bg-[#eef9f5]" />
        </div>
      </div>

      <div className="flex-1 space-y-6 px-7 py-5">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={`healbot-chat-skeleton-${index}`}
            className={
              index % 2 === 0 ? "flex justify-start" : "flex justify-end"
            }
          >
            <div className="max-w-[26rem] space-y-3 rounded-[22px] bg-white px-5 py-4 shadow-[0_12px_30px_-26px_rgba(28,87,70,0.45)]">
              <Skeleton className="h-4 w-56 bg-[#e6f5f0]" />
              <Skeleton className="h-4 w-48 bg-[#eef9f5]" />
              <Skeleton className="h-3 w-12 bg-[#eef9f5]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
