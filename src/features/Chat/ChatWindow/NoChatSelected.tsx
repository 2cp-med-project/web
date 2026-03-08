import { MessageSquare } from "lucide-react";

export function NoChatSelected() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center gap-2 text-gray-500">
      <MessageSquare size={48} />
      <span>Aucun chat sélectionné</span>
    </main>
  );
}
