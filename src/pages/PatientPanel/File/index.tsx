import { useFiles } from "@/hooks/patients.hooks/index.ts";
import { Route } from "@/routes/_protected/p/_app/files/$fileId.tsx";
import { FilePageContent } from "./Content.tsx";
import { FilePageError } from "./Error.tsx";
import { FilePageSkeleton } from "./Skeleton.tsx";

export function FilePage() {
  const { fileId } = Route.useParams();
  console.log(fileId);

  const { fetchFiles } = useFiles();
  const { data, isLoading, isError } = fetchFiles();

  if (isLoading || !data) return <FilePageSkeleton />;
  if (isError) return <FilePageError />;

  const file = data.find((item) => item.id === fileId);
  if (!file) return <FilePageError />;

  return <FilePageContent file={file} />;
}
