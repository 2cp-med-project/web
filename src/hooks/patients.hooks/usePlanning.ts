import { APIError, PatientAPI } from "@/api/index.ts";
import { useAuthContext } from "@/context/auth.tsx";
import { useQuery } from "@tanstack/react-query";

export const usePlanning = () => {
  const { user } = useAuthContext();

  const fetchPlanning = () => {
    return useQuery({
      queryKey: ["patient-planning", user?.id],
      queryFn: async () => {
        if (!user?.id) throw new APIError.NotAuthenticatedUserError();
        return PatientAPI.Planning.fetch(user.id);
      },
      enabled: !!user?.id,
    });
  };

  return {
    fetchPlanning,
  };
};
