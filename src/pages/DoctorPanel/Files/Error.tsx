import { FilesTable, FilesTitleBlock } from "@/features/DoctorPanel/Files/index.ts";
import { Link } from "@tanstack/react-router";

type FilesPageErrorProps = {
  patientId: string;
  onRetry: () => void;
};

export function FilesPageError({
  patientId,
  onRetry,
}: FilesPageErrorProps) {
  return (
    <section className="space-y-6 px-2">
      <FilesTitleBlock />

      <section className="space-y-4 rounded-[28px] bg-[#f5fcf9] px-5 py-6 md:px-8 md:py-8">
        <FilesTable.Error onRetry={onRetry} />

        <div className="flex justify-center">
          <Link
            to="/d/patients/$patientId/profile"
            params={{ patientId }}
            className="inline-flex rounded-xl border border-[#69ccb5] px-6 py-3 text-sm font-semibold text-[#55bfa6] transition-colors hover:bg-[#f3fbf8]"
          >
            Retour au profil
          </Link>
        </div>
      </section>
    </section>
  );
}
