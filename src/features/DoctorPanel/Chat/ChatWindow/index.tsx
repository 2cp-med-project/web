import { useAuthContext } from "@/context/auth.tsx";
import { useChat } from "@/hooks/doctor.hooks/useChat.ts";
import { cn } from "@/lib/utils.ts";
import { Image, Loader2, SendHorizonal } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useChatContext } from "../context.tsx";
import { ChatWindowHeader } from "./Header/index.tsx";
import { Message } from "./Message.tsx";
import { NoChatSelected } from "./NoChatSelected.tsx";

const MESSAGES_PAGE_SIZE = 40;

export function ChatWindow() {
  const { user } = useAuthContext();
  const { activeContactId } = useChatContext();

  const [search, _] = useState("");

  const { fetchMessages, sendMessage } = useChat();
  const { data, isLoading, isError, refetch } = fetchMessages(
    activeContactId,
    {
      search,
    },
    MESSAGES_PAGE_SIZE,
  );

  const [content, setContent] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const sendMessageMutation = sendMessage();

  const canSendMessage = content.trim().length !== 0;

  const handleMessageSendClick = async () => {
    if (!activeContactId) return;
    if (!canSendMessage) return;

    await sendMessageMutation.mutateAsync({
      contactId: activeContactId,
      content,
      onSuccess: () => {},
      onError: () => {},
    });

    setContent("");
    inputRef.current?.focus();
  };

  const messages = data?.pages.flatMap((page) => page.data) || [];

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
    }
  }, [messages]);

  if (activeContactId === null) return <NoChatSelected />;

  return (
    <main className="rounded-xl overflow-y-hidden bg-white w-full h-full space-y-1">
      <ChatWindowHeader />

      {/* messages */}
      <section
        ref={messagesContainerRef}
        className="my-4 px-3 overflow-y-auto h-[calc(100%-64px-64px-16px-16px)] flex flex-col gap-2"
      >
        {isError && (
          <div className="h-full flex flex-col mt-auto items-center justify-center gap-2 text-center">
            <p className="text-sm text-red-500">
              Impossible de charger les messages
            </p>

            <button
              type="button"
              onClick={() => refetch()}
              className="flex items-center gap-1 text-sm text-red-500 hover:text-red-600"
            >
              Réessayer
            </button>
          </div>
        )}

        {isLoading && (
          <div className="h-full flex items-center justify-center">
            <Loader2 className="animate-spin text-gray-400" />
          </div>
        )}

        {!isLoading && !isError && (
          <div className="hidden border flex-col mt-auto gap-2">
            {messages?.map((message, index) => (
              <Message
                key={index}
                message={message}
                isMine={message.senderId === user?.id}
              />
            ))}
          </div>
        )}
      </section>

      {/* input */}
      <footer className="pl-2 pr-3 py-3 flex items-center gap-2 h-16">
        <button className="p-2 rounded-full bg-white hover:bg-gray-300 transition-colors duration-100">
          <Image className="text-foreground" size={24} />
        </button>

        <div className="flex items-center w-full gap-2">
          <input
            ref={inputRef}
            type="text"
            className="py-1.5 px-3 bg-gray-200 text-black/70 rounded-full w-full focus:ring-0 focus:outline-0"
            placeholder="Aa"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleMessageSendClick();
              }
            }}
          />

          <button disabled={!canSendMessage} onClick={handleMessageSendClick}>
            <SendHorizonal
              className={cn(
                "transition-colors duration-100",
                canSendMessage ? "text-foreground" : "text-gray-400",
              )}
              size={24}
            />
          </button>
        </div>
      </footer>
    </main>
  );
}
