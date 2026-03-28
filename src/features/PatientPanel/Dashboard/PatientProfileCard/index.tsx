import { useProfile } from "@/hooks/index.ts";
import type { PatientProfile } from "@/types/entities.ts";
import { PatientProfileCardContent } from "./Content.tsx";
import { PatientProfileCardError } from "./Error.tsx";
import { PatientProfileCardSkeleton } from "./Skeleton.tsx";

export function PatientProfileCard() {
  const { fetchMe } = useProfile();
  const { data, isLoading, isError, refetch } = fetchMe();

  if (isError) return <PatientProfileCardError onRetry={refetch} />;

  if (isLoading || !data) return <PatientProfileCardSkeleton />;

  const profile = data as PatientProfile;
  return <PatientProfileCardContent profile={profile} />;
}
