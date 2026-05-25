import { APIError, DoctorAPI } from "@/api/index.ts";
import { useAuthContext } from "@/context/auth.tsx";
import { useQuery } from "@tanstack/react-query";

export const useFiles = () => {
  const { user } = useAuthContext();

  const useFetchFiles = (patientId: string | null) => {
    return useQuery({
      queryKey: ["doctor-patient-files", user?.id, patientId],
      queryFn: async () => {
        if (!user?.id) throw new APIError.NotAuthenticatedUserError();
        if (!patientId) throw new APIError.PatientNotFoundError("");

        return DoctorAPI.Files.fetch(patientId);
      },
      enabled: !!user?.id && !!patientId,
    });
  };

  return {
    useFetchFiles,
  };
};
