import { Link } from "@tanstack/react-router";

export function FilesCTAContent() {
  return (
    <div className="bg-white shadow-sm w-full rounded-lg p-4">
      <div className="flex flex-col">
        <p className="text-xl font-medium">Consultez vos fichiers et vos médecins</p>
        <p className="text-muted text-sm">
          Votre parcours de santé se déroule bien
        </p>
      </div>

      <div className="mt-2 w-full flex items-center justify-end gap-2">
        <Link
          to="/files"
          className="bg-foreground text-white rounded-xl px-8 py-2 text-lg"
        >
          Voir les fichiers
        </Link>

        <Link
          to="/files"
          className="bg-white border border-foreground text-foreground rounded-xl px-8 py-2 text-lg"
        >
          Partager les fichiers
        </Link>
      </div>
    </div>
  );
}
