import { cn } from "@/lib/utils.ts";
import type { HealbotConversationSummary } from "@/types/healbot.ts";
import { Edit3, Menu, Search } from "lucide-react";

type ConversationPanelContentProps = {
  activeConversationId: string | null;
  conversations: HealbotConversationSummary[];
  search: string;
  onConversationSelect: (conversationId: string) => void;
  onNewDiscussion: () => void;
  onSearchChange: (value: string) => void;
};

export function ConversationPanelContent({
  activeConversationId,
  conversations,
  search,
  onConversationSelect,
  onNewDiscussion,
  onSearchChange,
}: ConversationPanelContentProps) {
  return (
    <aside className="flex h-full w-full max-w-72 flex-col border-r border-[#d8efe8] bg-white">
      <div className="space-y-6 px-5 py-6">
        <label className="relative block">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#7bbfae]"
            size={16}
          />
          <input
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Recherche"
            className="h-11 w-full rounded-full bg-[#eef9f5] pl-11 pr-4 text-sm text-[#4d8f81] outline-none placeholder:text-[#a7d8cc]"
          />
        </label>

        <button
          type="button"
          onClick={onNewDiscussion}
          className="flex items-center gap-2 text-sm font-medium text-foreground transition-opacity hover:opacity-80"
        >
          <Edit3 size={15} />
          Nouvelle discussion
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-3 pb-3">
        <p className="px-2 pb-2 text-center text-xs font-semibold uppercase tracking-[0.12em] text-[#74cbb8]">
          Discussions
        </p>

        <ul className="space-y-1.5">
          {conversations.map((conversation) => {
            const isActive = conversation.id === activeConversationId;

            return (
              <li key={conversation.id}>
                <button
                  type="button"
                  onClick={() => onConversationSelect(conversation.id)}
                  className={cn(
                    "flex w-full items-start justify-between rounded-2xl px-3 py-3 text-left transition-colors",
                    isActive ? "bg-[#f3fbf8]" : "hover:bg-[#f8fcfa]",
                  )}
                >
                  <div className="min-w-0 pr-3">
                    <p className="truncate text-[15px] font-medium text-[#3d4b47]">
                      {conversation.title}
                    </p>
                    <p className="mt-1 truncate text-xs text-[#89a49d]">
                      {conversation.preview}
                    </p>
                  </div>

                  <Menu
                    className={cn(
                      "mt-0.5 shrink-0",
                      isActive ? "text-[#6ac8b5]" : "text-[#c0d8d1]",
                    )}
                    size={14}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
