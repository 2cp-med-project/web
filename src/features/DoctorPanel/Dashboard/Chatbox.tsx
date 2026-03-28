import { useAuthContext } from "@/context/auth.tsx";
import { ChatboxInput } from "@/features/shared/Dashboard/index.ts";
import { useState } from "react";

export function Chatbox() {
  const { user } = useAuthContext();

  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  const onMessageSend = () => {};
  const onFileUpload = (file: File) => {
    return setFiles((prev) => [...prev, file]);
  };

  return (
    <div className="space-y-2 bg-foreground w-full rounded-lg py-4 px-4">
      <p className="text-white font-archivo font-medium text-lg">
        Bonjour, {user?.fullname}
      </p>
      <ChatboxInput
        message={message}
        onMessageChange={setMessage}
        onMessageSend={onMessageSend}
        onFileUpload={onFileUpload}
      />

      {/* for files state usage */}
      <ul className="hidden">
        {files.map((file) => (
          <li>{file.name}</li>
        ))}
      </ul>
    </div>
  );
}
