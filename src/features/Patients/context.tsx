import { HookUsageOutOfProviderError } from "@/errors/HookUsageOutOfProviderError.tsx";
import {
  createContext,
  useContext,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import { PatientsUI } from "../../constants/ui/index.ts";
import type { Patient } from "../../types/entities.ts";

export type PatientsTableContext = {
  patients: Patient[];
  page: number;
  pageSize: number;
  count: number;
  totalPages: number;
  search: string;
  onNextPage: () => void;
  onPrevPage: () => void;
  onSearchChange: (search: string) => void;
};

export const patientsTableContext = createContext<
  PatientsTableContext | undefined
>(undefined);
patientsTableContext.displayName = "PatientsTableContext";

type PatientsTableContextProviderProps = PropsWithChildren & {};

const PATIENTS_TABLE_PAGE_SIZE = 6;

export function PatientsTableContextProvider({
  children,
}: PatientsTableContextProviderProps) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const filteredPatients = useMemo(() => {
    if (!search) return PatientsUI.patients;
    return PatientsUI.patients.filter((p) =>
      p.fullname.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const count = filteredPatients.length;
  const totalPages = Math.ceil(count / PATIENTS_TABLE_PAGE_SIZE);

  const patients = useMemo(() => {
    const start = (page - 1) * PATIENTS_TABLE_PAGE_SIZE;
    const end = start + PATIENTS_TABLE_PAGE_SIZE;
    return filteredPatients.slice(start, end);
  }, [filteredPatients, page]);

  const onNextPage = () => {
    if (page >= totalPages) return;
    setPage((prev) => prev + 1);
  };

  const onPrevPage = () => {
    if (page <= 1) return;
    setPage((prev) => prev - 1);
  };

  return (
    <patientsTableContext.Provider
      value={{
        patients,
        page,
        pageSize: PATIENTS_TABLE_PAGE_SIZE,
        count,
        totalPages,
        search,
        onNextPage,
        onPrevPage,
        onSearchChange: setSearch,
      }}
    >
      {children}
    </patientsTableContext.Provider>
  );
}

export const usePatientsTableContext = () => {
  const context = useContext(patientsTableContext);
  if (context === undefined) {
    throw new HookUsageOutOfProviderError(patientsTableContext);
  }
  return context;
};
