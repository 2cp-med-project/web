import { NotAuthenticatedUserError } from "@/api/errors/NotAuthenticatedUserError.ts";
import { useAuthContext } from "@/context/index.ts";
import { useHealbot } from "@/hooks/patients.hooks/index.ts";
import type { HealbotMessage } from "@/types/healbot.ts";
import { useEffect, useState } from "react";
import { useHealbotContext } from "../context.tsx";
import { ChatPanelContent } from "./Content.tsx";
import { ChatPanelEmpty } from "./Empty.tsx";
import { ChatPanelError } from "./Error.tsx";
import { ChatPanelSkeleton } from "./Skeleton.tsx";

export function ChatPanel() {
  const { user } = useAuthContext();
  const { fetchConversation, sendPrompt } = useHealbot();
  const {
    activeConversationId,
    draft,
    localMessagesByConversation,
    appendLocalMessage,
    setDraft,
  } = useHealbotContext();

  const [messages, setMessages] = useState<HealbotMessage[]>([]);

  const { data, isLoading, isError, refetch } =
    fetchConversation(activeConversationId);

  const sendPromptMutation = sendPrompt();

  if (!user) throw new NotAuthenticatedUserError();

  const patientName = user.fullname.split(" ")[0];

  useEffect(() => {
    if (!data) return setMessages([]);
    setMessages([
      ...data.messages,
      ...(localMessagesByConversation[data.id] || []),
    ]);
  }, [data, localMessagesByConversation]);

  if (!activeConversationId) {
    return (
      <ChatPanelEmpty
        draft={draft}
        onDraftChange={setDraft}
        onRefetch={refetch as any}
      />
    );
  }

  const handleSend = async () => {
    const nextMessage = draft.trim();
    if (!nextMessage) return;
    await sendPromptMutation.mutateAsync({
      prompt: nextMessage,
      threadId: activeConversationId,
      onMutate: () => {
        appendLocalMessage(activeConversationId, nextMessage);
      },
      onSuccess: (data) => {
        setMessages((prev) => [
          ...prev,
          {
            content: data.response,
            role: "assistant",
          },
        ]);
      },
    });
  };

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
      onSend={handleSend}
      isAnswering={sendPromptMutation.isPending}
    />
  );
}
