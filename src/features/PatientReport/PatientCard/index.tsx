import { usePatients } from "@/hooks/usePatients.ts";
import { PatientCardContent } from "./Content.tsx";
import { PatientCardError } from "./Error.tsx";
import { PatientCardSkeleton } from "./Skeleton.tsx";

type PatientCardProps = {
  id: string;
};

export function PatientCard({ id }: PatientCardProps) {
  const { fetchOne } = usePatients();
  const { patient, isLoading, isError, error, refetch } = fetchOne(id);

  if (isError) return <PatientCardError error={error} onRetry={refetch} />;
  if (!patient || isLoading) return <PatientCardSkeleton />;
  return <PatientCardContent patient={patient} />;
}
