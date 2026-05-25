import * as FileViewer from "@/features/DoctorPanel/FileViewer/index.ts";
import type { PatientFileRecord } from "@/types/entities.ts";

type FilePageContentProps = {
  file: PatientFileRecord;
};

const fileTypeLabelMap = {
  consultation: "Consultation",
  analyse: "Analyse",
  ordonnance: "Ordonnance",
} as const;

export function FilePageContent({ file }: FilePageContentProps) {
  return (
    <section className="space-y-6 px-2">
      <div className="flex flex-col gap-2">
        <p className="text-[#37b89d] text-lg font-semibold">Dossier medical</p>
        <h1 className="text-foreground font-medium text-[2rem] leading-tight">
          {file.name}
        </h1>
        <p className="text-muted text-sm font-normal">
          {fileTypeLabelMap[file.type]} - {file.modifiedAt} - {file.doctor.name}
        </p>
      </div>

      <FileViewer.Content file={file} />
    </section>
  );
}
