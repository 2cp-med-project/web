import { AlertCircle, RefreshCw } from "lucide-react";

type ChatPanelErrorProps = {
  onRetry: () => void;
};

export function ChatPanelError({ onRetry }: ChatPanelErrorProps) {
  return (
    <section className="flex min-w-0 flex-1 flex-col items-center justify-center gap-4 bg-[#eefdf8] px-6 text-center">
      <div className="rounded-full bg-red-100 p-3">
        <AlertCircle className="text-red-500" size={20} />
      </div>

      <div>
        <p className="font-archivo text-lg font-medium text-[#33403c]">
          Impossible de charger cette discussion
        </p>
        <p className="mt-1 text-sm text-muted">
          Réessayez pour afficher les messages de la conversation sélectionnée.
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
    </section>
  );
}
