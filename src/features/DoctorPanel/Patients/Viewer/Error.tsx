import { AlertCircle } from "lucide-react";

export function PatientViewerError({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 w-full h-full text-center space-y-4">
      {/* Icon */}
      <div className="p-4 rounded-full bg-red-100">
        <AlertCircle size={40} className="text-red-600" />
      </div>

      {/* Title */}
      <p className="text-2xl font-semibold text-red-600">Patient introuvable</p>

      {/* Description */}
      <p className="text-muted text-sm max-w-xs">
        Nous n’avons pas pu trouver les informations de ce patient. Vérifiez que
        le patient existe ou essayez de rafraîchir la page.
      </p>

      {/* Retry button (optional, you can handle onRetry) */}
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          Réessayer
        </button>
      )}
    </div>
  );
}
