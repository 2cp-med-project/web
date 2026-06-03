import { PatientNotFoundError } from "@/api/errors/PatientNotFoundError.ts";
import { usePatients } from "@/hooks/doctor.hooks/usePatients.ts";
import { Route } from "@/routes/_protected/d/_rfid/patients/$patientId/profile.tsx";
import { PatientProfilePageContent as Content } from "./Content.tsx";
import * as Error from "./Error/index.ts";
import { PatientProfilePageSkeleton as Skeleton } from "./Skeleton.tsx";

export function PatientProfilePage() {
  const params = Route.useParams();

  const { __fetchOne } = usePatients();
  const { data, isLoading, isError, error } = __fetchOne(params.patientId);

  if (isError) {
    if (error instanceof PatientNotFoundError) return <Error.NotFound />;
    return <Error.NotFound />;
  }

  if (isLoading || !data) return <Skeleton />;

  const patient = data;
  return <Content patient={patient} />;
}
