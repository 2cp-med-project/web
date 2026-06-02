import { HookUsageOutOfProviderError } from "@/errors/index.ts";
import type { HealbotMessage } from "@/types/healbot.ts";
import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";

type HealbotContext = {
  activeConversationId: string | null;
  draft: string;
  hasInitializedSelection: boolean;
  localMessagesByConversation: Record<string, HealbotMessage[]>;
  markSelectionAsInitialized: () => void;
  selectConversation: (conversationId: string) => void;
  startNewConversation: () => void;
  setDraft: (value: string) => void;
  appendLocalMessage: (conversationId: string, content: string) => void;
};

const healbotContext = createContext<HealbotContext | undefined>(undefined);
healbotContext.displayName = "HealbotContext";

export function HealbotContextProvider({ children }: PropsWithChildren) {
  const [activeConversationId, setActiveConversationId] = useState<
    string | null
  >(null);
  const [draft, setDraft] = useState("");
  const [hasInitializedSelection, setHasInitializedSelection] = useState(false);
  const [localMessagesByConversation, setLocalMessagesByConversation] =
    useState<Record<string, HealbotMessage[]>>({});

  const selectConversation = (conversationId: string) => {
    setActiveConversationId(conversationId);
    setDraft("");
  };

  const startNewConversation = () => {
    setActiveConversationId(null);
    setDraft("");
  };

  const markSelectionAsInitialized = () => setHasInitializedSelection(true);

  const appendLocalMessage = (conversationId: string, content: string) => {
    const message: HealbotMessage = {
      role: "user",
      content,
    };

    setLocalMessagesByConversation((previous) => ({
      ...previous,
      [conversationId]: [...(previous[conversationId] || []), message],
    }));
    setDraft("");
  };

  return (
    <healbotContext.Provider
      value={{
        activeConversationId,
        draft,
        hasInitializedSelection,
        localMessagesByConversation,
        markSelectionAsInitialized,
        selectConversation,
        startNewConversation,
        setDraft,
        appendLocalMessage,
      }}
    >
      {children}
    </healbotContext.Provider>
  );
}

export const useHealbotContext = () => {
  const context = useContext(healbotContext);

  if (context === undefined) {
    throw new HookUsageOutOfProviderError(healbotContext);
  }

  return context;
};
