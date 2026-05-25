import {
  FilesFiltersBar,
  FilesTable,
  FilesTitleBlock,
  type FilesDoctorFilter,
  type FilesModifiedFilter,
} from "@/features/DoctorPanel/Files/index.ts";
import type { PatientFileRecord, PatientFileType } from "@/types/entities.ts";

type FilesPageContentProps = {
  patientId: string;
  files: PatientFileRecord[];
  selectedFileType: PatientFileType | "all";
  selectedModifiedRange: FilesModifiedFilter;
  selectedDoctor: FilesDoctorFilter;
  onFileTypeChange: (value: PatientFileType | "all") => void;
  onModifiedRangeChange: (value: FilesModifiedFilter) => void;
  onDoctorChange: (value: FilesDoctorFilter) => void;
};

export function FilesPageContent({
  patientId,
  files,
  selectedFileType,
  selectedModifiedRange,
  selectedDoctor,
  onFileTypeChange,
  onModifiedRangeChange,
  onDoctorChange,
}: FilesPageContentProps) {
  return (
    <section className="space-y-6 px-2">
      <FilesTitleBlock />

      <section className="space-y-4 rounded-[28px] bg-[#f5fcf9]">
        <FilesFiltersBar
          selectedFileType={selectedFileType}
          selectedModifiedRange={selectedModifiedRange}
          selectedDoctor={selectedDoctor}
          onFileTypeChange={onFileTypeChange}
          onModifiedRangeChange={onModifiedRangeChange}
          onDoctorChange={onDoctorChange}
        />

        <FilesTable.Content patientId={patientId} files={files} />
      </section>
    </section>
  );
}
