import {
  FilesFiltersBar,
  FilesTable,
  FilesTitleBlock,
  type FilesDoctorFilter,
  type FilesModifiedFilter,
} from "@/features/PatientPanel/Files/index.ts";
import type { PatientFileRecord, PatientFileType } from "@/types/entities.ts";

type FilesPageContentProps = {
  files: PatientFileRecord[];
  selectedFileType: PatientFileType | "all";
  selectedModifiedRange: FilesModifiedFilter;
  selectedDoctor: FilesDoctorFilter;
  onFileTypeChange: (value: PatientFileType | "all") => void;
  onModifiedRangeChange: (value: FilesModifiedFilter) => void;
  onDoctorChange: (value: FilesDoctorFilter) => void;
};

export function FilesPageContent({
  files,
  selectedFileType,
  selectedModifiedRange,
  selectedDoctor,
  onFileTypeChange,
  onModifiedRangeChange,
  onDoctorChange,
}: FilesPageContentProps) {
  return (
    <section className="px-2 space-y-6">
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

        <FilesTable.Content files={files} />
      </section>
    </section>
  );
}
