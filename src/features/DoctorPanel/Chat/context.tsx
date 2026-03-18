import { ChatUI } from "@/constants/ui/index.ts";
import { useAuthContext } from "@/context/auth.tsx";
import { HookUsageOutOfProviderError } from "@/errors/index.ts";
import type { Message, BaseUser } from "@/types/entities.ts";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

export type ChatContext = {
  contacts: BaseUser[];
  activeContact: BaseUser | null;
  activeContactId: string | null;
  messages: Message[] | null;
  search: string;
  isDetailsPanelOpen: boolean;
  selectContact: (contactId: string) => void;
  clearContact: () => void;
  sendMessage: (to: string, content: string) => void;
  onSearchChange: (search: string) => void;
  toggleDetailsPanel: () => void;
};

export const chatContext = createContext<ChatContext | undefined>(undefined);
chatContext.displayName = "ChatContext";

type ChatContextProviderProps = PropsWithChildren & {};

export function ChatContextProvider({ children }: ChatContextProviderProps) {
  const { user } = useAuthContext();

  const [contacts, setContacts] = useState<BaseUser[]>([]);
  const [messages, setMessages] = useState<Message[] | null>(null);
  const [activeContact, setActiveContact] = useState<BaseUser | null>(null);
  const [isDetailsPanelOpen, setIsDetailsPanelOpen] = useState(false);

  const [search, setSearch] = useState("");

  useEffect(() => {
    setContacts(
      ChatUI.contacts.filter(
        (contact) =>
          contact.fullname.includes(search) || contact.email.includes(search),
      ),
    );
  }, [search]);

  const selectContact = (contactId: string) =>
    setActiveContact((prev) => {
      if (prev?.id === contactId) return prev;
      setMessages([]);
      return contacts.find((contact) => contact.id === contactId) ?? null;
    });

  const clearContact = () => {
    setActiveContact(null);
    setIsDetailsPanelOpen(false);
    setMessages(null);
  };

  const sendMessage = (to: string, content: string) => {
    if (activeContact?.id !== to) return;
    setMessages((prev) => [
      ...(prev ?? []),
      { senderId: user?.id! as string, receiverId: to, content },
    ]);
  };

  const toggleDetailsPanel = () => setIsDetailsPanelOpen((prev) => !prev);

  return (
    <chatContext.Provider
      value={{
        contacts,
        activeContact,
        activeContactId: activeContact?.id ?? null,
        messages,
        search,
        isDetailsPanelOpen,
        selectContact,
        clearContact,
        sendMessage,
        onSearchChange: setSearch,
        toggleDetailsPanel,
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
