import { HookUsageOutOfProviderError } from "@/errors/index.ts";
import { usePatients } from "@/hooks/index.ts";
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
import type { Patient } from "@/types/entities.ts";

export type PatientsContext = {
  patients: Patient[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
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

export const patientsContext = createContext<PatientsContext | undefined>(
  undefined,
);
patientsContext.displayName = "PatientsContext";

type PatientsContextProviderProps = PropsWithChildren & {};

const PATIENTS_PAGE_SIZE = 6;

export function PatientsContextProvider({
  children,
}: PatientsContextProviderProps) {
  const { fetchPage } = usePatients();

  const [page, setPage] = useState(1);

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  const [onViewPatientId, setOnViewPatientId] = useState<string | null>(null);

  const { data, refetch, isLoading, isError, error } = fetchPage({
    page,
    pageSize: PATIENTS_PAGE_SIZE,
    search,
  });

  const count = data?.count || 0;
  const totalPages = Math.ceil(count / PATIENTS_PAGE_SIZE);
  const patients = data?.data || [];

  const onNextPage = () => {
    if (page >= totalPages) return;
    setPage((prev) => prev + 1);
  };

  const onPrevPage = () => {
    if (page <= 1) return;
    setPage((prev) => prev - 1);
  };

  const view = (patientId: string) => {
    setOnViewPatientId(patientId);
  };

  const clearView = () => setOnViewPatientId(null);

  useEffect(() => {
    refetch();
  }, [page, debouncedSearch]);

  return (
    <patientsContext.Provider
      value={{
        patients,
        page,
        pageSize: PATIENTS_PAGE_SIZE,
        count,
        totalPages,
        search,
        isLoading,
        isError,
        error,
        onViewPatientId,
        onNextPage,
        onPrevPage,
        onSearchChange: setSearch,
        view,
        clearView,
        refetch,
      }}
    >
      {children}
    </patientsContext.Provider>
  );
}

export const usePatientsContext = () => {
  const context = useContext(patientsContext);
  if (context === undefined) {
    throw new HookUsageOutOfProviderError(patientsContext);
  }
  return context;
};
