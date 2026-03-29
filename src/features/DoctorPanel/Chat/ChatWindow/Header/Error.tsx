import { RefreshCcw } from "lucide-react";

type ChatWindowHeaderErrorProps = {
  onRefetch: () => void;
};

export function ChatWindowHeaderError({
  onRefetch,
}: ChatWindowHeaderErrorProps) {
  return (
    <header className="py-2 px-4 border-b border-b-gray-300 flex justify-between items-center h-16">
      <div className="flex flex-col">
        <p className="text-sm text-red-500 font-medium">
          Impossible de charger le contact
        </p>
        <p className="text-xs text-muted">
          Les informations du profil ne sont pas disponibles
        </p>
      </div>

      <button
        onClick={onRefetch}
        className="group flex items-center gap-1 text-sm text-red-500 hover:text-red-600"
      >
        <RefreshCcw size={16} className="group-hover:animate-spin" />
        Réessayer
      </button>
    </header>
  );
}
