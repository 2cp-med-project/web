import { PatientData } from "@/constants/ui/index.ts";
import { useAuthContext } from "@/context/index.ts";
import { ChatboxInput } from "@/features/shared/Dashboard/ChatboxInput.tsx";
import { useState } from "react";
import { QuickOption } from "./QuickOption.tsx";

export function Chatbox() {
  const { user } = useAuthContext();

  const [message, setMessage] = useState("");
  const onMessageSend = () => {};

  const [files, setFiles] = useState<File[]>([]);
  const onFileUpload = (file: File) => {
    return setFiles((prev) => [...prev, file]);
  };

  return (
    <div className="space-y-2 bg-foreground w-full rounded-lg py-4 px-4">
      <p className="text-white font-archivo font-medium text-lg">
        Bonjour, {user?.fullname}
      </p>

      <div className="flex items-center gap-2">
        {PatientData.Dasboard.promptOptions.map((option) => (
          <QuickOption
            key={option.label}
            onSelect={() => {
              setMessage(option.prompt);
              return onMessageSend();
            }}
            {...option}
          />
        ))}
      </div>

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
