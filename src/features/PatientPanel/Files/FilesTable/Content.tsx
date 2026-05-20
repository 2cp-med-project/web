import type { PatientFileRecord } from "@/types/entities.ts";
import { Link } from "@tanstack/react-router";
import { FolderOpen } from "lucide-react";

type FilesTableContentProps = {
  files: PatientFileRecord[];
};

function DoctorAvatar({ shortName }: { shortName: string }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2f8b73] text-xs font-semibold text-white">
      {shortName}
    </div>
  );
}

function FileRow({ file }: { file: PatientFileRecord }) {
  return (
    <Link
      to="/p/files/$fileId"
      params={{ fileId: file.id }}
      className="grid gap-4 border-t border-[#d7ece5] px-6 py-5 text-[#25493f] transition-colors hover:bg-[#f7fcfa] md:grid-cols-[minmax(0,1.4fr)_180px_minmax(240px,0.9fr)] md:items-center"
    >
      <div className="flex min-w-0 items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#a9dfd1] bg-white text-[#5bc4ab]">
          <FolderOpen size={22} />
        </div>
        <p className="truncate text-base font-medium">{file.name}</p>
      </div>

      <p className="text-sm">{file.modifiedAt}</p>

      <div className="flex items-center gap-3">
        <DoctorAvatar shortName={file.doctor.shortName} />

        <div className="min-w-0">
          <p className="truncate text-sm font-medium">{file.doctor.name}</p>
          <p className="truncate text-xs text-[#8a9d97]">{file.doctor.email}</p>
        </div>
      </div>
    </Link>
  );
}

export function FilesTableContent({ files }: FilesTableContentProps) {
  return (
    <section className="overflow-hidden rounded-sm border border-[#d7ece5] bg-white">
      <header className="hidden grid-cols-[minmax(0,1.4fr)_180px_minmax(240px,0.9fr)] items-center gap-4 bg-[#eef8f5] px-6 py-4 text-sm font-medium text-[#23473d] md:grid">
        <span>Nom</span>
        <span>Derniere modification</span>
        <span>Medecin</span>
      </header>

      {files.length > 0 ? (
        files.map((file) => <FileRow key={file.id} file={file} />)
      ) : (
        <div className="flex h-56 items-center justify-center px-6 text-center text-sm text-[#7f918b]">
          Aucun fichier ne correspond aux filtres selectionnes.
        </div>
      )}
    </section>
  );
}
