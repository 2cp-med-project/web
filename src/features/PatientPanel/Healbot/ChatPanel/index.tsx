import { useAuthContext } from "@/context/index.ts";
import { useHealbot } from "@/hooks/patients.hooks/index.ts";
import { useMemo } from "react";
import { useHealbotContext } from "../context.tsx";
import { ChatPanelContent } from "./Content.tsx";
import { ChatPanelEmpty } from "./Empty.tsx";
import { ChatPanelError } from "./Error.tsx";
import { ChatPanelSkeleton } from "./Skeleton.tsx";

export function ChatPanel() {
  const { user } = useAuthContext();
  const { fetchConversation } = useHealbot();
  const {
    activeConversationId,
    draft,
    localMessagesByConversation,
    appendLocalMessage,
    setDraft,
  } = useHealbotContext();
  const { data, isLoading, isError, refetch } =
    fetchConversation(activeConversationId);

  const patientName = user?.fullname?.split(" ")[0] ?? "Sarah";

  const messages = useMemo(() => {
    if (!data) return [];

    return [...data.messages, ...(localMessagesByConversation[data.id] || [])];
  }, [data, localMessagesByConversation]);

  if (!activeConversationId) {
    return <ChatPanelEmpty draft={draft} onDraftChange={setDraft} />;
  }

  if (isLoading) return <ChatPanelSkeleton />;
  if (isError || !data) return <ChatPanelError onRetry={() => refetch()} />;

  return (
    <ChatPanelContent
      conversation={data}
      draft={draft}
      messages={messages}
      patientName={patientName}
      onDraftChange={setDraft}
      onPromptSelect={setDraft}
      onSend={() => {
        const nextMessage = draft.trim();
        if (!nextMessage) return;

        appendLocalMessage(data.id, nextMessage);
      }}
    />
  );
}
