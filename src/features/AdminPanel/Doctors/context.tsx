import { HookUsageOutOfProviderError } from "@/errors/index.ts";
import { useDoctors } from "@/hooks/admin.hooks/index.ts";
import type { AuthUser } from "@/types/entities.ts";
import { useDebounce } from "@uidotdev/usehooks";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

export type DoctorsContext = {
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

const doctorsContext = createContext<DoctorsContext | undefined>(undefined);
doctorsContext.displayName = "DoctorsContext";

export function DoctorsContextProvider({ children }: PropsWithChildren) {
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

  useEffect(() => {
    refetch();
  }, [debouncedSearch]);

  const doctors = data?.data || [];

  return (
    <doctorsContext.Provider
      value={{
        doctors,
        isLoading,
        isError,
        search,
        statusFilter,
        selectedDoctor,
        onSearchChange: setSearch,
        onStatusFilterChange: setStatusFilter,
        view: (d) => setSelectedDoctor(d),
        clearView: () => setSelectedDoctor(null),
      }}
    >
      {children}
    </doctorsContext.Provider>
  );
}

export const useDoctorsContext = () => {
  const context = useContext(doctorsContext);
  if (context === undefined)
    throw new HookUsageOutOfProviderError(doctorsContext);
  return context;
};
