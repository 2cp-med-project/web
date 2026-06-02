import { useFiles } from "@/hooks/doctor.hooks/index.ts";
import { Route } from "@/routes/_protected/d/_rfid/patients/$patientId/files/$fileId.tsx";
import { FilePageContent } from "./Content.tsx";
import { FilePageError } from "./Error.tsx";
import { FilePageSkeleton } from "./Skeleton.tsx";

export function FilePage() {
  const { patientId, fileId } = Route.useParams();
  const { useFetchFiles } = useFiles();
  const { data, isLoading, isError } = useFetchFiles(patientId);

  if (isLoading || !data) return <FilePageSkeleton />;
  if (isError) return <FilePageError patientId={patientId} />;

  const file = data.find((item) => item.id === fileId);
  if (!file) return <FilePageError patientId={patientId} />;

  return <FilePageContent file={file} />;
}
