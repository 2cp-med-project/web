import { APIError, ProfileAPI } from "@/api/index.ts";
import { useAuthContext } from "@/context/auth.tsx";
import { useQuery } from "@tanstack/react-query";

export const useProfile = () => {
  const { user } = useAuthContext();

  const fetchMe = () => {
    const query = useQuery({
      queryKey: ["my-profile", user?.id],
      queryFn: async () => {
        if (!user?.id) throw new APIError.NotAuthenticatedUserError();
        const profile = await ProfileAPI.fetch(user?.id);
        return profile;
      },
      enabled: !!user?.id,
    });

    return {
      ...query,
      profile: query.data,
    };
  };

  return {
    fetchMe,
  };
};
