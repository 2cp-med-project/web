import * as FileViewer from "@/features/DoctorPanel/FileViewer/index.ts";
import type { PatientFileRecordWithDoctor } from "@/types/entities.ts";
import { formatDate } from "@/utils/index.ts";

type FilePageContentProps = {
  file: PatientFileRecordWithDoctor;
};

export function FilePageContent({ file }: FilePageContentProps) {
  return (
    <section className="space-y-6 px-2">
      <div className="flex flex-col gap-2">
        <p className="text-[#37b89d] text-lg font-semibold">Dossier medical</p>
        <h1 className="text-foreground font-medium text-[2rem] leading-tight">
          {file.reason}
        </h1>
        <p className="text-muted text-sm font-normal">
          {formatDate(file.modifiedAt)} -
          {file.doctor?.fullname ?? file.doctorId}
        </p>
      </div>

      <FileViewer.Content file={file} />
    </section>
  );
}
