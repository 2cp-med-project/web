import { APIError, PatientAPI } from "@/api/index.ts";
import { useAuthContext } from "@/context/auth.tsx";
import { useQuery } from "@tanstack/react-query";

export const useDashboard = () => {
  const { user } = useAuthContext();

  const query = useQuery({
    queryKey: ["dashboard", user?.id],
    queryFn: async () => {
      if (!user?.id) throw new APIError.NotAuthenticatedUserError();
      const data = await PatientAPI.Dashboard.fetch(user?.id);
      return data;
    },
    enabled: !!user?.id,
  });

  return query;
};
