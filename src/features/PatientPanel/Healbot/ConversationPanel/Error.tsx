import { AlertCircle, RefreshCw } from "lucide-react";

type ConversationPanelErrorProps = {
  onRetry: () => void;
};

export function ConversationPanelError({
  onRetry,
}: ConversationPanelErrorProps) {
  return (
    <aside className="flex h-full w-full max-w-72 flex-col items-center justify-center gap-4 border-r border-[#d8efe8] bg-white px-6 text-center">
      <div className="rounded-full bg-red-100 p-3">
        <AlertCircle className="text-red-500" size={20} />
      </div>

      <div>
        <p className="font-archivo text-lg font-medium text-[#33403c]">
          Impossible de charger les discussions
        </p>
        <p className="mt-1 text-sm text-muted">
          Réessayez pour récupérer la liste des conversations Healbot.
        </p>
      </div>

      <button
        type="button"
        onClick={onRetry}
        className="flex items-center gap-2 rounded-lg bg-red-100 px-4 py-2 text-red-500"
      >
        <RefreshCw size={14} />
        Réessayer
      </button>
    </aside>
  );
}
