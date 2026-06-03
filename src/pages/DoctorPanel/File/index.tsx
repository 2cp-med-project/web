import { usePatients } from "@/hooks/doctor.hooks/index.ts";
import { Route } from "@/routes/_protected/d/_rfid/patients/$patientId/files/$fileId.tsx";
import { FilePageContent } from "./Content.tsx";
import { FilePageError } from "./Error.tsx";
import { FilePageSkeleton } from "./Skeleton.tsx";

export function FilePage() {
  const { patientId, fileId } = Route.useParams();

  const { getSingleRecord } = usePatients();
  const { data, isLoading, isError } = getSingleRecord(fileId);

  if (isLoading || !data) return <FilePageSkeleton />;
  if (isError) return <FilePageError patientId={patientId} />;

  const file = data;
  if (!file) return <FilePageError patientId={patientId} />;

  return <FilePageContent file={file} />;
}
