import { useProfile } from "@/hooks/index.ts";
import type { PatientProfile } from "@/types/entities.ts";
import { PatientProfileCardContent } from "./Content.tsx";
import { PatientProfileCardSkeleton } from "./Skeleton.tsx";

export function PatientProfileCard() {
  const { fetchMe } = useProfile();

  const { data, isLoading, isError } = fetchMe();

  if (isError) return <div className="text-red-500">error</div>;
  if (isLoading || !data) return <PatientProfileCardSkeleton />;

  const profile = data as PatientProfile;
  return <PatientProfileCardContent profile={profile} />;
}
