import { cn } from "@/lib/utils";
import type { Message } from "@/types/entities";

type MessageProps = {
  message: Message;
  isMine: boolean;
};

export function Message({ message, isMine }: MessageProps) {
  return (
    <div
      className={cn("flex w-full", isMine ? "justify-end" : "justify-start")}
    >
      <div
        className={cn(
          "max-w-[70%] px-3 py-2 rounded-2xl text-sm",
          isMine
            ? "bg-foreground text-white rounded-br-md"
            : "bg-gray-200 text-black/80 rounded-bl-md",
        )}
      >
        {message.content}
      </div>
    </div>
  );
}
