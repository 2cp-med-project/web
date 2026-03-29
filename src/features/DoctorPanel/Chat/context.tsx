import { HookUsageOutOfProviderError } from "@/errors/index.ts";
import { useProfile } from "@/hooks/index.ts";
import type { BaseUser } from "@/types/entities.ts";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

export type ChatContext = {
  activeContactId: string | null;
  isDetailsPanelOpen: boolean;
  activeContact: BaseUser | undefined;
  isLoadingActiveContactProfile: boolean;
  isErrorOnFetchActiveContactProfile: boolean;
  selectContact: (contactId: string) => void;
  clearContact: () => void;
  toggleDetailsPanel: () => void;
  refetchActiveContact: () => void;
};

export const chatContext = createContext<ChatContext | undefined>(undefined);
chatContext.displayName = "ChatContext";

type ChatContextProviderProps = PropsWithChildren & {};

export function ChatContextProvider({ children }: ChatContextProviderProps) {
  const [activeContactId, setActiveContactId] = useState<string | null>(null);
  const [isDetailsPanelOpen, setIsDetailsPanelOpen] = useState(false);

  const { fetchOneMaybe } = useProfile();
  const {
    profile: activeContact,
    isLoading: isLoadingActiveContactProfile,
    isError: isErrorOnFetchActiveContactProfile,
    refetch: refetchActiveContact,
  } = fetchOneMaybe(activeContactId);

  const selectContact = (contactId: string) => setActiveContactId(contactId);

  const clearContact = () => {
    setActiveContactId(null);
    setIsDetailsPanelOpen(false);
  };

  const toggleDetailsPanel = () => setIsDetailsPanelOpen((prev) => !prev);

  useEffect(() => {
    refetchActiveContact();
  }, [activeContactId]);

  return (
    <chatContext.Provider
      value={{
        activeContactId,
        isDetailsPanelOpen,
        activeContact,
        isLoadingActiveContactProfile,
        isErrorOnFetchActiveContactProfile,
        selectContact,
        clearContact,
        toggleDetailsPanel,
        refetchActiveContact,
      }}
    >
      {children}
    </chatContext.Provider>
  );
}

export const useChatContext = () => {
  const context = useContext(chatContext);
  if (context === undefined) {
    throw new HookUsageOutOfProviderError(chatContext);
  }
  return context;
};
