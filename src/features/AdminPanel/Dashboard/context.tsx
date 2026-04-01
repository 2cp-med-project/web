import { HookUsageOutOfProviderError } from "@/errors/HookUsageOutOfProviderError.ts";
import { useDashboard } from "@/hooks/admin.hooks/index.ts";
import type {
  AdminDashboardData,
  OverviewCardContent,
  RecentUser,
} from "@/types/dashboard.ts";
import { AlertCircle, Stethoscope, UserPlus, Users } from "lucide-react";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";

type VerificationStatus = "pending" | "verified" | "rejected";

export type DoctorWithStatus = {
  id: string;
  fullname: string;
  email: string;
  phoneNumber: string;
  address: string;
  nationalId: string;
  age: number;
  specialty: string;
  experience: string;
  submittedAt: string;
  status: VerificationStatus;
};

type DashboardContext = {
  overviewCardsContents: OverviewCardContent[];
  data: AdminDashboardData | undefined;
  doctors: DoctorWithStatus[];
  recentUsers: RecentUser[];
  handleAccept: (id: string) => void;
  handleReject: (id: string) => void;
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
};

const dashboardContext = createContext<DashboardContext | undefined>(undefined);
dashboardContext.displayName = "DashboardContext";

export function DashboardContextProvider({ children }: PropsWithChildren) {
  const { data, isLoading, isError, refetch } = useDashboard();
  const [doctors, setDoctors] = useState<DoctorWithStatus[]>([]);

  useEffect(() => {
    if (data?.pendingDoctors) {
      setDoctors(
        data.pendingDoctors.map((d) => ({
          ...d,
          status: "pending" as VerificationStatus,
        })),
      );
    }
  }, [data]);

  const handleAccept = (id: string) => {
    setDoctors((prev) =>
      prev.map((d) => (d.id === id ? { ...d, status: "verified" } : d)),
    );
  };

  const handleReject = (id: string) => {
    setDoctors((prev) =>
      prev.map((d) => (d.id === id ? { ...d, status: "rejected" } : d)),
    );
  };

  const overviewCardsContents = useMemo(
    () => [
      {
        icon: Users,
        iconColor: "text-green-500",
        label: "Total Patients",
        desc: "Patients enregistrés",
        value: data?.totalPatientsCount ?? 0,
      },
      {
        icon: Stethoscope,
        iconColor: "text-blue-500",
        label: "Total Médecins",
        desc: "Médecins enregistrés",
        value: data?.totalDoctorsCount ?? 0,
      },
      {
        icon: AlertCircle,
        iconColor: "text-yellow-500",
        label: "Vérifications en attente",
        desc: "Demandes à traiter",
        value: data?.totalAppointmentsCount ?? 0,
      },
      {
        icon: UserPlus,
        iconColor: "text-purple-500",
        label: "Nouvelles inscriptions",
        desc: "Ce mois-ci",
        value: data?.newRegistrationsCount ?? 0,
      },
    ],
    [data],
  );

  return (
    <dashboardContext.Provider
      value={{
        overviewCardsContents,
        data,
        doctors,
        recentUsers: data?.recentUsers ?? [],
        handleAccept,
        handleReject,
        isLoading,
        isError,
        refetch,
      }}
    >
      {children}
    </dashboardContext.Provider>
  );
}

export const useDashboardContext = () => {
  const context = useContext(dashboardContext);
  if (context === undefined)
    throw new HookUsageOutOfProviderError(dashboardContext);
  return context;
};
