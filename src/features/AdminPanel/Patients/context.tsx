import { HookUsageOutOfProviderError } from "@/errors/index.ts";
import { usePatients } from "@/hooks/admin.hooks/index.ts";
import type { Patient } from "@/types/entities.ts";
import type { Page } from "@/types/pagination.ts";
import type { QueryObserverResult } from "@tanstack/react-query";
import { useDebounce } from "@uidotdev/usehooks";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

export type PatientsContext = {
  patients: Patient[];
  isLoading: boolean;
  isError: boolean;
  page: number;
  pageSize: number;
  count: number;
  totalPages: number;
  search: string;
  onViewPatientId: string | null;
  onNextPage: () => void;
  onPrevPage: () => void;
  onSearchChange: (search: string) => void;
  view: (patientId: string) => void;
  clearView: () => void;
  refetch: () => Promise<QueryObserverResult<Page<Patient>, Error>>;
};

const patientsContext = createContext<PatientsContext | undefined>(undefined);
patientsContext.displayName = "PatientsContext";

const PAGE_SIZE = 6;

export function PatientsContextProvider({ children }: PropsWithChildren) {
  const { fetchPage } = usePatients();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);
  const [onViewPatientId, setOnViewPatientId] = useState<string | null>(null);

  const { data, refetch, isLoading, isError } = fetchPage({
    page,
    pageSize: PAGE_SIZE,
    search: debouncedSearch,
  });

  const count = data?.count || 0;
  const totalPages = Math.ceil(count / PAGE_SIZE);
  const patients = data?.data || [];

  useEffect(() => {
    refetch();
  }, [page, debouncedSearch]);

  return (
    <patientsContext.Provider
      value={{
        patients,
        page,
        pageSize: PAGE_SIZE,
        count,
        totalPages,
        search,
        isLoading,
        isError,
        onViewPatientId,
        onNextPage: () => {
          if (page < totalPages) setPage((p) => p + 1);
        },
        onPrevPage: () => {
          if (page > 1) setPage((p) => p - 1);
        },
        onSearchChange: setSearch,
        view: (id) => setOnViewPatientId(id),
        clearView: () => setOnViewPatientId(null),
        refetch,
      }}
    >
      {children}
    </patientsContext.Provider>
  );
}

export const usePatientsContext = () => {
  const context = useContext(patientsContext);
  if (context === undefined)
    throw new HookUsageOutOfProviderError(patientsContext);
  return context;
};
