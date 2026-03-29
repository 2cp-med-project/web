import { useChatContext } from "../context.tsx";
import { ChatDetailsContent } from "./Content.tsx";
import { ChatDetailsError } from "./Error.tsx";
import { ChatDetailsSkeleton } from "./Skeleton.tsx";

export function ChatDetails() {
  const {
    isDetailsPanelOpen,
    activeContact,
    isLoadingActiveContactProfile,
    isErrorOnFetchActiveContactProfile,
    refetchActiveContact,
  } = useChatContext();

  if (!isDetailsPanelOpen) return null;

  if (isErrorOnFetchActiveContactProfile)
    return <ChatDetailsError onRefetch={refetchActiveContact} />;

  if (isLoadingActiveContactProfile || !activeContact)
    return <ChatDetailsSkeleton />;

  return <ChatDetailsContent activeContact={activeContact} />;
}
