import { Link } from "@tanstack/react-router";
import { AlertCircle, RefreshCcw } from "lucide-react";

type PatientProfilePageErrorProps = {
  error: Error;
  reset: () => void;
};

export function PatientProfilePageGenericError({
  reset,
}: PatientProfilePageErrorProps) {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 gap-6">
      <AlertCircle className="h-10 w-10 text-red-500" />

      <div className="space-y-2 max-w-md">
        <h1 className="text-2xl font-semibold text-foreground">
          Une erreur est survenue
        </h1>

        <p className="text-muted-foreground">
          Impossible de charger le profil du patient pour le moment. Veuillez
          réessayer ou retourner à la liste des patients.
        </p>
      </div>

      <div className="flex gap-3">
        <button
          className="group px-4 py-2 bg-foreground text-white flex gap-2 items-center rounded"
          onClick={reset}
        >
          <RefreshCcw size={16} className="group-hover:animate-spin" />
          Réessayer
        </button>

        <Link
          className="px-4 py-2 bg-transparent text-foreground border-2 border-foreground flex gap-2 items-center rounded"
          to="/d/patients"
        >
          Retour aux patients
        </Link>
      </div>
    </section>
  );
}
