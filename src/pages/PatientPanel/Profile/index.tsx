import { PatientProfileContextProvider } from "@/features/PatientPanel/Profile/context.tsx";
import { useProfile } from "@/hooks/index.ts";
import type { PatientProfile } from "@/types/entities.ts";
import { ProfilePageContent } from "./Content.tsx";
import { ProfilePageError } from "./Error.tsx";
import { ProfilePageSkeleton } from "./Skeleton.tsx";

export function ProfilePage() {
  const { fetchMe } = useProfile();
  const { data, isLoading, isError } = fetchMe();

  if (isError) return <ProfilePageError />;
  if (isLoading || !data) return <ProfilePageSkeleton />;

  const profile = data as PatientProfile;
  return (
    <PatientProfileContextProvider>
      <ProfilePageContent profile={profile} />
    </PatientProfileContextProvider>
  );
}
