import { useAuthContext } from "@/context/auth.tsx";
import { cn } from "@/lib/utils.ts";
import { getInitials } from "@/utils/index.ts";
import { Avatar } from "@radix-ui/themes";
import { Ellipsis, Image, SendHorizonal } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useChatContext } from "../context.tsx";
import { Message } from "./Message.tsx";
import { NoChatSelected } from "./NoChatSelected.tsx";

export function ChatWindow() {
  const { activeContact, toggleDetailsPanel, sendMessage, messages } =
    useChatContext();

  const { user } = useAuthContext();

  const [content, setContent] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const canSendMessage = content.trim().length !== 0;

  const handleMessageSendClick = () => {
    if (!activeContact?.id) return;
    if (!canSendMessage) return;

    sendMessage(activeContact.id, content);
    setContent("");

    inputRef.current?.focus();
  };

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
    }
  }, [messages]);

  if (activeContact === null) return <NoChatSelected />;

  return (
    <main className="rounded-xl overflow-y-hidden bg-white w-full h-full space-y-1">
      <header className="p-2 border-b border-b-gray-300 flex justify-between items-center h-16">
        <div className="flex items-center gap-2">
          <Avatar
            src={activeContact.avatar ?? undefined}
            fallback={getInitials(activeContact.fullname)}
            radius="full"
          />
          <div className="flex flex-col">
            <p className="text-lg font-medium text-black/70">
              {activeContact.fullname}
            </p>
            <p className="text-muted text-xs">Actif il y a 35 minutes</p>
          </div>
        </div>

        <button
          className="hover:bg-gray-200 p-1.5 rounded-full"
          onClick={toggleDetailsPanel}
        >
          <Ellipsis
            className="bg-foreground text-white rounded-full p-1"
            size={26}
          />
        </button>
      </header>

      {/* messages */}
      <section
        ref={messagesContainerRef}
        className="my-4 px-3 overflow-y-auto h-[calc(100%-64px-64px-16px-16px)] flex flex-col gap-2"
      >
        <div className="flex flex-col mt-auto gap-2">
          {messages?.map((message, index) => (
            <Message
              key={index}
              message={message}
              isMine={message.senderId === user?.id}
            />
          ))}
        </div>
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
