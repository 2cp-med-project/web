import { useAuthContext } from "@/context/auth.tsx";
import { useProfile } from "@/hooks/useProfile.ts";
import { ProfilePopoverContent } from "./Content.tsx";
import { ProfilePopoverError } from "./Error.tsx";
import { ProfilePopoverSkeleton } from "./Skeleton.tsx";

export function ProfilePopover() {
  const { logout } = useAuthContext();

  const { fetchMe } = useProfile();
  const { profile, isLoading, isError, refetch } = fetchMe();

  if (isLoading) return <ProfilePopoverSkeleton />;
  if (isError || !profile) return <ProfilePopoverError onRetry={refetch} />;
  return <ProfilePopoverContent profile={profile} onLogout={logout} />;
}
