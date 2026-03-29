import { useChatContext } from "../../context.tsx";
import { ChatWindowHeaderContent } from "./Content.tsx";
import { ChatWindowHeaderError } from "./Error.tsx";
import { ChatWindowHeaderSkeleton } from "./Skeleton.tsx";

export function ChatWindowHeader() {
  const {
    activeContact,
    isLoadingActiveContactProfile,
    isErrorOnFetchActiveContactProfile,
    toggleDetailsPanel,
    refetchActiveContact,
  } = useChatContext();

  if (isErrorOnFetchActiveContactProfile)
    return <ChatWindowHeaderError onRefetch={refetchActiveContact} />;

  if (isLoadingActiveContactProfile || !activeContact)
    return <ChatWindowHeaderSkeleton />;

  return (
    <ChatWindowHeaderContent
      activeContact={activeContact}
      onToggleDetailsPannel={toggleDetailsPanel}
    />
  );
}
