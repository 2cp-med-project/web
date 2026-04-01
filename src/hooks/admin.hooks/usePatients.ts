import { AdminAPI } from "@/api/index.ts";
import { useAuthContext } from "@/context/auth.tsx";
import type { Patient, PatientDetails } from "@/types/entities.ts";
import type { Page, PaginationAttributes } from "@/types/pagination.ts";
import { useQuery } from "@tanstack/react-query";

export const usePatients = () => {
  const { user } = useAuthContext();

  const fetchPage = (pagination: PaginationAttributes) => {
    const query = useQuery<Page<Patient>, Error>({
      queryKey: ["admin-patients-page", user?.id, pagination.page, pagination.search],
      queryFn: async () => {
        const page = await AdminAPI.Patients.fetchPage(pagination);
        return page;
      },
      enabled: !!user?.id,
    });
    return { ...query, page: query.data };
  };

  const fetchOne = (id: string | null) => {
    const query = useQuery<PatientDetails | null, Error>({
      queryKey: ["admin-patient", user?.id, id],
      queryFn: async () => {
        if (!id) return null;
        return await AdminAPI.Patients.fetchOne(id);
      },
      enabled: !!user?.id && !!id,
    });
    return { ...query, patient: query.data };
  };

  return { fetchPage, fetchOne };
};