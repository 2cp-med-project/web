import { APIError, DoctorAPI, PatientAPI } from "@/api/index.ts";
import { ROLE } from "@/constants/index.ts";
import { useAuthContext } from "@/context/auth.tsx";
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
        throw new InvalidUserRoleError(user.role);
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
