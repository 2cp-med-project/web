import { usePatients } from "@/hooks/usePatients.ts";
import { PatientCardError } from "./Error.tsx";
import { PatientCardSkeleton } from "./Skeleton.tsx";
import { PatientCardContent } from "./Content.tsx";

type PatientCardProps = {
  id: string;
};

export function PatientCard({ id }: PatientCardProps) {
  const { fetchOne } = usePatients();
  const { patient, isLoading, isError, error, refetch } = fetchOne(id);

  if (isLoading) return <PatientCardSkeleton />;
  if (!patient || isError)
    return <PatientCardError error={error} onRetry={refetch} />;

  return <PatientCardContent patient={patient} />;
}
