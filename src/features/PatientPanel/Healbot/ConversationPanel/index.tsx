import { useHealbot } from "@/hooks/patients.hooks/index.ts";
import type { HealbotConversationSummary } from "@/types/healbot.ts";
import { useEffect, useMemo, useState } from "react";
import { useHealbotContext } from "../context.tsx";
import { ConversationPanelContent } from "./Content.tsx";
import { ConversationPanelError } from "./Error.tsx";
import { ConversationPanelSkeleton } from "./Skeleton.tsx";

export function ConversationPanel() {
  const [search, setSearch] = useState("");
  const { fetchConversations } = useHealbot();
  const { data, isLoading, isError, refetch } = fetchConversations();
  const {
    activeConversationId,
    hasInitializedSelection,
    localMessagesByConversation,
    markSelectionAsInitialized,
    selectConversation,
    startNewConversation,
  } = useHealbotContext();

  useEffect(() => {
    if (hasInitializedSelection) return;
    if (!data?.[0]) return;

    selectConversation(data[0].id);
    markSelectionAsInitialized();
  }, [
    data,
    hasInitializedSelection,
    markSelectionAsInitialized,
    selectConversation,
  ]);

  const conversations = useMemo<HealbotConversationSummary[]>(() => {
    const source = data || [];
    const normalizedSearch = search.trim().toLowerCase();

    if (!normalizedSearch) return source;

    return source.filter((conversation) =>
      conversation.title.toLowerCase().includes(normalizedSearch),
    );
  }, [data, localMessagesByConversation, search]);

  if (isLoading) return <ConversationPanelSkeleton />;
  if (isError) return <ConversationPanelError onRetry={() => refetch()} />;

  return (
    <ConversationPanelContent
      activeConversationId={activeConversationId}
      conversations={conversations}
      search={search}
      onConversationSelect={selectConversation}
      onNewDiscussion={startNewConversation}
      onSearchChange={setSearch}
    />
  );
}
