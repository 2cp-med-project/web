type PatientCardErrorProps = {
  error: unknown;
  onRetry: () => void;
};

export function PatientCardError({ onRetry }: PatientCardErrorProps) {
  return (
    <div className="bg-white w-full rounded-lg py-6 shadow-sm border border-red-300 flex flex-col items-center justify-center gap-2">
      <p className="text-red-600 font-semibold text-lg flex items-center gap-2">
        Échec du chargement des données du patient
      </p>

      <p className="text-muted text-sm text-center max-w-xs">
        Une erreur inconnue est survenue
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-2 px-4 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition-colors shadow-sm"
        >
          Réessayer
        </button>
      )}
    </div>
  );
}
