import { APIError, PatientAPI } from "@/api/index.ts";
import { useAuthContext } from "@/context/auth.tsx";
import { useQuery } from "@tanstack/react-query";

export const useFiles = () => {
  const { user } = useAuthContext();

  const fetchFiles = () => {
    return useQuery({
      queryKey: ["patient-files", user?.id],
      queryFn: async () => {
        if (!user?.id) throw new APIError.NotAuthenticatedUserError();
        return PatientAPI.Files.fetch(user.id);
      },
      enabled: !!user?.id,
    });
  };

  return {
    fetchFiles,
  };
};
