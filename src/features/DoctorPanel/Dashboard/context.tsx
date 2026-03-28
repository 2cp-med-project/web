import { HookUsageOutOfProviderError } from "@/errors/HookUsageOutOfProviderError.ts";
import { useDashboard } from "@/hooks/doctor.hooks/index.ts";
import type { OverviewCardContent, QuickAction } from "@/types/dashboard.ts";
import type { Patient, PopulatedAppointment } from "@/types/entities.ts";
import {
  AlertCircle,
  Calendar,
  CalendarDays,
  MessageSquare,
  Search,
  Send,
} from "lucide-react";
import {
  createContext,
  useContext,
  useMemo,
  type PropsWithChildren,
} from "react";

type DashboardContext = {
  overviewCardsContents: OverviewCardContent[];
  quickActions: QuickAction[];
  recentlyOpenedPatients: Patient[];
  nextAppointments: PopulatedAppointment[];
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
};

const dashboardContext = createContext<DashboardContext | undefined>(undefined);
dashboardContext.displayName = "DashboardContext";

type DashboardContextProviderProps = PropsWithChildren & {};
export function DashboardContextProvider({
  children,
}: DashboardContextProviderProps) {
  const { data, isLoading, isError, refetch } = useDashboard();

  const quickActions = useMemo(
    () => [
      {
        label: "Rechercher",
        desc: "Trouvez des médecins spécialisés à proximité",
        icon: Search,
        action: () => {},
      },
      {
        label: "Prendre un rendez-vous",
        desc: "Réservez avec votre médecin",
        icon: CalendarDays,
        action: () => {},
      },
      {
        label: "Discussion",
        desc: "Ouvrir une conversation avec le médecin",
        icon: Send,
        action: () => {},
      },
    ],
    [],
  );

  const overviewCardsContents = useMemo(
    () => [
      {
        icon: Calendar,
        iconColor: "text-green-500",
        label: "Rendez-vous Aujourd'hui",
        desc: "Rendez-vous prévus aujourd'hui",
        value: data?.todayAppointmentCount || 0,
      },
      {
        icon: AlertCircle,
        iconColor: "text-red-500",
        label: "Demandes en attente",
        desc: "Requêtes à traiter",
        value: data?.pendingRequestsCount || 0,
      },
      {
        icon: MessageSquare,
        iconColor: "text-blue-500",
        label: "Messages reçus",
        desc: "Messages reçus aujourd'hui",
        value: data?.totalMessagesCount || 0,
      },
    ],
    [data],
  );

  const value = {
    overviewCardsContents,
    quickActions,
    recentlyOpenedPatients: data?.recentlyOpenedPatients || [],
    nextAppointments: data?.nextAppointments || [],
    isLoading,
    isError,
    refetch,
  };

  return (
    <dashboardContext.Provider value={value}>
      {children}
    </dashboardContext.Provider>
  );
}

export const useDashboardContext = () => {
  const context = useContext(dashboardContext);
  if (context === undefined) {
    throw new HookUsageOutOfProviderError(dashboardContext);
  }
  return context;
};
