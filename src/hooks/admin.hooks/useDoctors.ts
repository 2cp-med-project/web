import { AdminAPI } from "@/api/index.ts";
import { useAuthContext } from "@/context/auth.tsx";
import type { AuthUser } from "@/types/entities.ts";
import type { Page, PaginationAttributes } from "@/types/pagination.ts";
import { useQuery } from "@tanstack/react-query";

export const useDoctors = () => {
  const { user } = useAuthContext();

  const fetchPage = (pagination: PaginationAttributes) => {
    const query = useQuery<Page<AuthUser>, Error>({
      queryKey: ["admin-doctors-page", user?.id, pagination.page, pagination.search],
      queryFn: async () => {
        return await AdminAPI.Doctors.fetchPage(pagination);
      },
      enabled: !!user?.id,
    });
    return { ...query, page: query.data };
  };

  return { fetchPage };
};