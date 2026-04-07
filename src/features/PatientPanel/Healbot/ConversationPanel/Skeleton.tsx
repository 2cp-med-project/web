import { Skeleton } from "@/components/Skeleton.tsx";

export function ConversationPanelSkeleton() {
  return (
    <aside className="flex h-full w-full max-w-72 flex-col border-r border-[#d8efe8] bg-white px-5 py-6">
      <Skeleton className="h-11 w-full rounded-full bg-[#e6f5f0]" />
      <Skeleton className="mt-6 h-5 w-40 bg-[#e6f5f0]" />

      <div className="mt-8 space-y-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={`healbot-conversation-skeleton-${index}`}
            className="rounded-2xl border border-[#edf7f3] p-3"
          >
            <Skeleton className="h-4 w-40 bg-[#e6f5f0]" />
            <Skeleton className="mt-2 h-3 w-28 bg-[#eef9f5]" />
          </div>
        ))}
      </div>
    </aside>
  );
}
