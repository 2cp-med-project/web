import { Link } from "@tanstack/react-router";
import { AlertTriangle } from "lucide-react";

export function PatientProfilePageNotFoundError() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 gap-6">
      <AlertTriangle className="h-10 w-10 text-red-500" />

      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-foreground">
          Patient introuvable
        </h1>

        <p className="text-muted-foreground max-w-md">
          Le patient que vous essayez de consulter n'existe pas ou a été
          supprimé. Il est possible que l'identifiant du patient soit incorrect
          ou que le dossier ne soit plus disponible.
        </p>
      </div>

      <Link to="/patients" className="px-4 py-2 rounded text-white bg-red-500">
        Retour à la liste des patients
      </Link>
    </section>
  );
}
