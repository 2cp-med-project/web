import {
  type FilesDoctorFilter,
  type FilesModifiedFilter,
} from "@/features/DoctorPanel/Files/index.ts";
import { usePatients } from "@/hooks/doctor.hooks/index.ts";
import { Route } from "@/routes/_protected/d/_rfid/patients/$patientId/files/index.tsx";
import type { PatientFileType } from "@/types/entities.ts";
import { useMemo, useState } from "react";
import { FilesPageContent } from "./Content.tsx";
import { FilesPageError } from "./Error.tsx";
import { FilesPageSkeleton } from "./Skeleton.tsx";

export function FilesPage() {
  const { patientId } = Route.useParams();

  const { getRecords } = usePatients();
  const { data, isLoading, isError, refetch } = getRecords(patientId);
  const [selectedFileType, setSelectedFileType] = useState<
    PatientFileType | "all"
  >("all");
  const [selectedModifiedRange, setSelectedModifiedRange] =
    useState<FilesModifiedFilter>("all");
  const [selectedDoctor, setSelectedDoctor] =
    useState<FilesDoctorFilter>("all");

  const files = useMemo(() => {
    const source = data || [];
    return source;
  }, [data, selectedDoctor, selectedFileType, selectedModifiedRange]);

  if (isError) {
    return (
      <FilesPageError patientId={patientId} onRetry={() => void refetch()} />
    );
  }

  if (isLoading || !data) return <FilesPageSkeleton />;

  return (
    <FilesPageContent
      patientId={patientId}
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
