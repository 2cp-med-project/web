import { Paperclip, Send } from "lucide-react";

type ChatboxInputProps = {
  message: string;
  onMessageChange: (newMessage: string) => void;
  onMessageSend: () => void;
  onFileUpload: (file: File) => void;
};

export function ChatboxInput({
  message,
  onMessageSend,
  onMessageChange,
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
        disabled={message.trim().length === 0}
      >
        <Send size={16} />
      </button>
    </div>
  );
}
