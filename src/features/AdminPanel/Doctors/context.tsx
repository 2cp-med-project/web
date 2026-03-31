import { HookUsageOutOfProviderError } from "@/errors/index.ts";
import { useDoctors } from "@/hooks/admin.hooks/index.ts";
import type { AuthUser } from "@/types/entities.ts";
import { useDebounce } from "@uidotdev/usehooks";
import {
  createContext, useContext, useEffect, useState, type PropsWithChildren,
} from "react";

export type AdminDoctorsContext = {
  doctors: AuthUser[];
  isLoading: boolean;
  isError: boolean;
  search: string;
  statusFilter: string;
  selectedDoctor: AuthUser | null;
  onSearchChange: (s: string) => void;
  onStatusFilterChange: (s: string) => void;
  view: (doctor: AuthUser) => void;
  clearView: () => void;
};

const adminDoctorsContext = createContext<AdminDoctorsContext | undefined>(undefined);
adminDoctorsContext.displayName = "AdminDoctorsContext";

export function AdminDoctorsContextProvider({ children }: PropsWithChildren) {
  const { fetchPage } = useDoctors();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedDoctor, setSelectedDoctor] = useState<AuthUser | null>(null);
  const debouncedSearch = useDebounce(search, 300);

  const { data, refetch, isLoading, isError } = fetchPage({
    page: 1,
    pageSize: 20,
    search: debouncedSearch,
  });

  useEffect(() => { refetch(); }, [debouncedSearch]);

  const doctors = data?.data || [];

  return (
    <adminDoctorsContext.Provider value={{
      doctors, isLoading, isError, search, statusFilter,
      selectedDoctor,
      onSearchChange: setSearch,
      onStatusFilterChange: setStatusFilter,
      view: (d) => setSelectedDoctor(d),
      clearView: () => setSelectedDoctor(null),
    }}>
      {children}
    </adminDoctorsContext.Provider>
  );
}

export const useAdminDoctorsContext = () => {
  const context = useContext(adminDoctorsContext);
  if (context === undefined) throw new HookUsageOutOfProviderError(adminDoctorsContext);
  return context;
};