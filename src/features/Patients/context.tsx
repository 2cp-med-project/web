import { HookUsageOutOfProviderError } from "@/errors/HookUsageOutOfProviderError.tsx";
import {
  createContext,
  useContext,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import { PatientsUI } from "../../constants/ui/index.ts";
import type { Patient, PatientDetails } from "../../types/entities.ts";

export type PatientsContext = {
  patients: Patient[];
  page: number;
  pageSize: number;
  count: number;
  totalPages: number;
  search: string;
  onViewPatient: PatientDetails | null;
  onNextPage: () => void;
  onPrevPage: () => void;
  onSearchChange: (search: string) => void;
  view: (patientId: string) => void;
  clearView: () => void;
};

export const patientsContext = createContext<PatientsContext | undefined>(
  undefined,
);
patientsContext.displayName = "PatientsContext";

type PatientsContextProviderProps = PropsWithChildren & {};

const PATIENTS__PAGE_SIZE = 6;

export function PatientsContextProvider({
  children,
}: PatientsContextProviderProps) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const [onViewPatientId, setOnViewPatientId] = useState<string | null>(null);

  const filteredPatients = useMemo(() => {
    if (!search) return PatientsUI.patients;
    return PatientsUI.patients.filter((p) =>
      p.fullname.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const count = filteredPatients.length;
  const totalPages = Math.ceil(count / PATIENTS__PAGE_SIZE);

  const patients = useMemo(() => {
    const start = (page - 1) * PATIENTS__PAGE_SIZE;
    const end = start + PATIENTS__PAGE_SIZE;
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

  const view = (patientId: string) => {
    setOnViewPatientId(patientId);
  };

  const clearView = () => setOnViewPatientId(null);

  const onViewPatient = useMemo(() => {
    if (onViewPatientId === null) return null;
    return (
      PatientsUI.patientsWithDetails.find((p) => p.id === onViewPatientId) ??
      null
    );
  }, [onViewPatientId]);

  return (
    <patientsContext.Provider
      value={{
        patients,
        page,
        pageSize: PATIENTS__PAGE_SIZE,
        count,
        totalPages,
        search,
        onViewPatient,
        onNextPage,
        onPrevPage,
        onSearchChange: setSearch,
        view,
        clearView,
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
