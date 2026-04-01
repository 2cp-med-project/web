import { AdminData } from "@/constants/ui/index.ts";
import type { AuthUser } from "@/types/entities.ts";
import type { Page, PaginationAttributes } from "@/types/pagination.ts";

export const fetchPage = (pagination: PaginationAttributes) => {
  return new Promise<Page<AuthUser>>((res) => {
    setTimeout(() => {
      const start = (pagination.page - 1) * pagination.pageSize;
      const end = start + pagination.pageSize;
      const filteredDoctors = AdminData.Doctors.doctors.filter((d) =>
        d.fullname.toLowerCase().includes(pagination.search.trim().toLowerCase()),
      );
      const doctors = filteredDoctors.slice(start, end);
      const nextPage =
        doctors.length === filteredDoctors.length ? null : pagination.page + 1;
      const count = filteredDoctors.length;
      return res({ data: doctors, nextPage, count });
    }, 400);
  });
};



// DELETE /admin/doctors/<id>
export const deleteOne = (id: string) => {
  return new Promise<void>((res) =>
    setTimeout(() => {
      const index = AdminData.Doctors.doctors.findIndex((d) => d.id === id);
      if (index !== -1) AdminData.Doctors.doctors.splice(index, 1);
      return res();
    }, 500),
  );
};