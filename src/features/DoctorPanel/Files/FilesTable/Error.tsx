import { AlertCircle, RefreshCw } from "lucide-react";

type FilesTableErrorProps = {
  onRetry?: () => void;
};

export function FilesTableError({ onRetry }: FilesTableErrorProps) {
  return (
    <div className="flex min-h-72 flex-col items-center justify-center gap-4 rounded-sm border border-[#d7ece5] bg-white px-6 text-center">
      <div className="rounded-full bg-red-100 p-3">
        <AlertCircle className="text-red-500" size={20} />
      </div>

      <div className="space-y-2">
        <p className="text-xl font-medium text-[#25493f]">
          Impossible de charger les fichiers
        </p>
        <p className="text-sm text-[#7f918b]">
          Reessayez dans un instant.
        </p>
      </div>

      {onRetry ? (
        <button
          type="button"
          onClick={onRetry}
          className="flex items-center gap-2 rounded-lg bg-red-100 px-4 py-2 text-sm font-medium text-red-500"
        >
          <RefreshCw size={14} />
          Reessayer
        </button>
      ) : null}
    </div>
  );
}
