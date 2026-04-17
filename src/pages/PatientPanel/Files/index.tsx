import {
  type FilesDoctorFilter,
  type FilesModifiedFilter,
} from "@/features/PatientPanel/Files/index.ts";
import { useFiles } from "@/hooks/patients.hooks/index.ts";
import type { PatientFileType } from "@/types/entities.ts";
import { useMemo, useState } from "react";
import { FilesPageContent } from "./Content.tsx";
import { FilesPageError } from "./Error.tsx";
import { FilesPageSkeleton } from "./Skeleton.tsx";

export function FilesPage() {
  const { fetchFiles } = useFiles();
  const { data, isLoading, isError, refetch } = fetchFiles();
  const [selectedFileType, setSelectedFileType] =
    useState<PatientFileType | "all">("all");
  const [selectedModifiedRange, setSelectedModifiedRange] =
    useState<FilesModifiedFilter>("all");
  const [selectedDoctor, setSelectedDoctor] = useState<FilesDoctorFilter>("all");

  const files = useMemo(() => {
    const source = data || [];

    return source.filter((file) => {
      if (selectedFileType !== "all" && file.type !== selectedFileType) {
        return false;
      }

      if (selectedDoctor !== "all" && file.doctor.key !== selectedDoctor) {
        return false;
      }

      if (selectedModifiedRange === "recent" && file.modifiedDaysAgo > 7) {
        return false;
      }

      if (selectedModifiedRange === "month" && file.modifiedDaysAgo > 30) {
        return false;
      }

      return true;
    });
  }, [data, selectedDoctor, selectedFileType, selectedModifiedRange]);

  if (isError) return <FilesPageError onRetry={() => void refetch()} />;
  if (isLoading || !data) return <FilesPageSkeleton />;

  return (
    <FilesPageContent
      files={files}
      selectedFileType={selectedFileType}
      selectedModifiedRange={selectedModifiedRange}
      selectedDoctor={selectedDoctor}
      onFileTypeChange={setSelectedFileType}
      onModifiedRangeChange={setSelectedModifiedRange}
      onDoctorChange={setSelectedDoctor}
    />
  );
}
