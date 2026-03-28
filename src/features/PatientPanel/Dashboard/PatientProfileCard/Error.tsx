import { AlertCircle, RefreshCw } from "lucide-react";

type PatientProfileCardErrorProps = {
  onRetry?: () => void;
};

export function PatientProfileCardError({
  onRetry,
}: PatientProfileCardErrorProps) {
  return (
    <div className="relative bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Top background */}
      <div className="absolute inset-x-0 top-0 h-20 bg-foreground"></div>

      <div className="relative z-10 flex flex-col items-center justify-center my-6 px-4 gap-4">
        {/* Icon */}
        <div className="p-3 rounded-full bg-red-100">
          <AlertCircle className="w-6 h-6 text-red-500" />
        </div>

        {/* Message */}
        <div className="text-center">
          <p className="text-black text-lg font-medium font-archivo">
            Une erreur est survenue
          </p>
          <p className="text-muted text-sm">
            Impossible de charger le profil du patient
          </p>
        </div>

        {/* Retry Button */}
        <button
          onClick={onRetry}
          className="group text-red-500 bg-red-100 px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <RefreshCw className="group-hover:animate-spin w-4 h-4" />
          Réessayer
        </button>
      </div>
    </div>
  );
}
