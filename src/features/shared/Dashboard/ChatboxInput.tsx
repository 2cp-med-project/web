import { Loader2, Paperclip, Send } from "lucide-react";

type ChatboxInputProps = {
  message: string;
  onMessageChange: (newMessage: string) => void;
  onMessageSend: () => void;
  onFileUpload: (file: File) => void;
  isPending: boolean;
};

export function ChatboxInput({
  message,
  onMessageSend,
  onMessageChange,
  isPending,
}: ChatboxInputProps) {
  return (
    <div className="py-1 px-2 bg-white flex gap-x-2 rounded-lg">
      <button type="button" className="bg-white text-gray-400">
        <Paperclip size={16} />
      </button>
      <input
        type="text"
        placeholder="Écrire un message..."
        className="border w-full outline-none border-none text-base"
        value={message}
        onChange={(e) => onMessageChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            return onMessageSend();
          }
        }}
      />
      <button
        type="button"
        className="bg-foreground text-white p-2 rounded-full"
        onClick={onMessageSend}
        disabled={isPending && message.trim().length === 0}
      >
        {isPending ? (
          <Loader2 className="animate-spin" size={16} />
        ) : (
          <Send size={16} />
        )}
      </button>
    </div>
  );
}
