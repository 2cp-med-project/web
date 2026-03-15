import { useAuthContext } from "@/context/auth.tsx";
import { useProfile } from "@/hooks/useProfile.ts";
import { ProfilePopoverContent } from "./Content.tsx";
import { ProfilePopoverError } from "./Error.tsx";
import { ProfilePopoverSkeleton } from "./Skeleton.tsx";

export function ProfilePopover() {
  const { logout } = useAuthContext();

  const { fetchMe } = useProfile();
  const { profile, isLoading, isError, refetch } = fetchMe();

  if (isError) return <ProfilePopoverError onRetry={refetch} />;
  if (isLoading || !profile) return <ProfilePopoverSkeleton />;
  return <ProfilePopoverContent profile={profile} onLogout={logout} />;
}
