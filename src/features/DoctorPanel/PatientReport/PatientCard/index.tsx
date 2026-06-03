import { usePatients } from "@/hooks/doctor.hooks/index.ts";
import { PatientCardContent } from "./Content.tsx";
import { PatientCardError } from "./Error.tsx";
import { PatientCardSkeleton } from "./Skeleton.tsx";

type PatientCardProps =
 {
  id: string;
};

export function PatientCard({ id }: PatientCardProps) {
  const { __fetchOne } = usePatients();
  const { patient, isLoading, isError, error, refetch } = __fetchOne(id);

  if (isError) return <PatientCardError error={error} onRetry={refetch} />;
  if (!patient || isLoading) return <PatientCardSkeleton />;
  return <PatientCardContent patient={patient} />;
}
