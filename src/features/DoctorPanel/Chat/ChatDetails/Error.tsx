import { RefreshCcw } from "lucide-react";

type ChatDetailsErrorProps = {
  onRefetch: () => void;
};

export function ChatDetailsError({ onRefetch }: ChatDetailsErrorProps) {
  return (
    <div className="bg-white rounded-xl flex flex-col h-full w-full">
      <div className="mt-4 flex flex-col items-center space-y-4 text-center px-4">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-red-500 font-medium">
            Impossible de charger les informations du contact
          </p>
          <p className="text-xs text-muted">
            Une erreur est survenue lors du chargement du profil
          </p>
        </div>

        <button
          onClick={onRefetch}
          className="group flex items-center gap-1 text-sm text-red-500 hover:text-red-600"
        >
          <RefreshCcw size={16} className="group-hover:animate-spin" />
          Réessayer
        </button>
      </div>
    </div>
  );
}
