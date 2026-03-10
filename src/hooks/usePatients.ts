import { NotAuthenticatedUserError } from "@/api/errors/NotAuthenticatedUserError.ts";
import { PatientsAPI } from "@/api/index.ts";
import { useAuthContext } from "@/context/auth.tsx";
import { Unreachable } from "@/errors/Unreachable.ts";
import type { Patient, PatientDetails } from "@/types/entities.ts";
import type { Page, PaginationAttributes } from "@/types/pagination.ts";
import { useQuery } from "@tanstack/react-query";

export const usePatients = () => {
  const { user } = useAuthContext();

  const fetchPage = (pagination: PaginationAttributes) => {
    const query = useQuery<Page<Patient>, Error>({
      queryKey: ["patients-page", user?.id, pagination.page, pagination.search],
      queryFn: async ({}) => {
        const page = await PatientsAPI.fetchPage(pagination);
        return page;
      },
      enabled: !!user?.id,
    });

    return {
      ...query,
      page: query.data,
    };
  };

  const fetchOne = (id: string | null) => {
    const query = useQuery<PatientDetails | null, Error>({
      queryKey: ["patient", user?.id, id],
      queryFn: async ({}) => {
        if (!user?.id) throw new NotAuthenticatedUserError();
        if (!id) throw new Unreachable();

        const patient = await PatientsAPI.fetchOne(id);
        return patient;
      },
      enabled: !!user?.id && !!id,
    });

    return {
      ...query,
      patient: query.data,
    };
  };

  return {
    fetchPage,
    fetchOne,
  };
};
