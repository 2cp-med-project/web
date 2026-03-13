import { usePatients } from "@/hooks/usePatients.ts";
import { PatientCardContent } from "./Content.tsx";
import { PatientCardSkeleton } from "./Skeleton.tsx";

type PatientCardProps = {
  id: string;
};

export function PatientCard({ id }: PatientCardProps) {
  const { fetchOne } = usePatients();
  const { patient, isLoading, isError } = fetchOne(id);

  if (isLoading) return <PatientCardSkeleton />;
  if (!patient || isError) return <div>error</div>;

  return <PatientCardContent patient={patient} />;
}
