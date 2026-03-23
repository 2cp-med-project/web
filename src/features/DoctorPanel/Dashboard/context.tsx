import type { ValuedOverivewCard } from "@/constants/ui/dashboard.ts";
import { DashboardUI } from "@/constants/ui/index.ts";
import { HookUsageOutOfProviderError } from "@/errors/HookUsageOutOfProviderError.ts";
import { useDashboard } from "@/hooks/useDashboard.ts";
import type { QuickAction } from "@/types/dashboard.ts";
import type { Patient, PopulatedAppointment } from "@/types/entities.ts";
import { CalendarDays, Search, Send } from "lucide-react";
import {
  createContext,
  useContext,
  useMemo,
  type PropsWithChildren,
} from "react";

type DashboardContext = {
  overviewCards: ValuedOverivewCard[];
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
  const { fetch } = useDashboard();
  const { data, isLoading, isError, refetch } = fetch();

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

  // Asserting DashboardUI.overviewCards.length === 3
  if (DashboardUI.overviewCards.length !== 3) {
    throw new Error("DashboardUI.overviewCards.length must be 3");
  }

  const overviewCards = [
    {
      ...DashboardUI.overviewCards[0],
      value: data?.todayAppointmentCount || 0,
    },
    {
      ...DashboardUI.overviewCards[1],
      value: data?.pendingRequestsCount || 0,
    },
    {
      ...DashboardUI.overviewCards[2],
      value: data?.totalMessagesCount || 0,
    },
  ];

  const value = {
    overviewCards,
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
