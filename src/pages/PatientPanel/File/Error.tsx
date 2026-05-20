import { Link } from "@tanstack/react-router";

export function FilePageError() {
  return (
    <section className="px-2">
      <div className="rounded-[28px] border border-[#dcefe9] bg-white px-8 py-12 text-center">
        <p className="text-xl font-semibold text-[#24433b]">
          Fichier introuvable
        </p>
        <p className="mt-2 text-sm text-[#7d9590]">
          Le fichier demande n&apos;existe pas encore dans les donnees mockees.
        </p>
        <Link
          to="/p/files"
          className="mt-6 inline-flex rounded-xl bg-[#5bc4ab] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#4db69d]"
        >
          Retour aux fichiers
        </Link>
      </div>
    </section>
  );
}
