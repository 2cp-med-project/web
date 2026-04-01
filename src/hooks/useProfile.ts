import { APIError, DoctorAPI, PatientAPI } from "@/api/index.ts";
import { ROLE } from "@/constants/index.ts";
import { useAuthContext } from "@/context/auth.tsx";
import { InvalidInputError } from "@/errors/InvalidInputError.ts";
import { InvalidUserRoleError } from "@/errors/InvalidUserRoleError.ts";
import { useQuery } from "@tanstack/react-query";

export const useProfile = () => {
  const { user } = useAuthContext();

  const fetchMe = () => {
    const query = useQuery({
      queryKey: ["my-profile", user?.id],
      queryFn: async () => {
        if (!user?.id) throw new APIError.NotAuthenticatedUserError();

        if (user.role === ROLE.DOCTOR) return DoctorAPI.Profile.fetch(user.id);
        if (user.role === ROLE.PATIENT)
          return PatientAPI.Profile.fetch(user.id);
        if (user.role === ROLE.ADMIN) return user;

        throw new InvalidUserRoleError(user.role);
      },
      enabled: !!user?.id,
    });

    return {
      ...query,
      profile: query.data,
    };
  };

  const fetchOneMaybe = (profileId: string | null) => {
    const query = useQuery({
      queryKey: ["profile", user?.id, profileId],
      queryFn: async () => {
        if (!user?.id) throw new APIError.NotAuthenticatedUserError();
        if (!profileId) throw new InvalidInputError("profileId");

        if (user.role === ROLE.DOCTOR)
          return DoctorAPI.Profile.fetch(profileId);

        if (user.role === ROLE.PATIENT)
          return PatientAPI.Profile.fetch(user.id);

        if (user.role === ROLE.ADMIN) return user;
        throw new InvalidUserRoleError(user.role);
      },
      enabled: !!user?.id && !!profileId,
    });

    return {
      ...query,
      profile: query.data,
    };
  };

  const fetchOne = (profileId: string) => fetchOneMaybe(profileId);

  return {
    fetchMe,
    fetchOneMaybe,
    fetchOne,
  };
};
