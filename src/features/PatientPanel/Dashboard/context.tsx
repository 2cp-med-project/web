import { HookUsageOutOfProviderError } from "@/errors/HookUsageOutOfProviderError.ts";
import { useDashboard } from "@/hooks/patients.hooks/index.ts";
import type { OverviewCardContent } from "@/types/dashboard.ts";
import type { EmergencyContact } from "@/types/entities.ts";
import type { QuickAction } from "@/types/ui.ts";
import {
  AlertCircle,
  Bell,
  Calendar,
  CalendarDays,
  CardSim,
  Search,
} from "lucide-react";
import {
  createContext,
  useContext,
  useMemo,
  type PropsWithChildren,
} from "react";

type DashboardContext = {
  overviewCardsContents: OverviewCardContent[];
  emergencyContacts: EmergencyContact[];
  quickActions: QuickAction[];
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
        label: "Trouver des spécialistes",
        desc: "Trouvez des médecins spécialisés à proximité",
        icon: Search,
        action: () => {},
      },
      {
        label: "Prendre rendez-vous",
        desc: "Réservez avec votre médecin",
        icon: CalendarDays,
        action: () => {},
      },
      {
        label: "Voir la carte",
        desc: "Consultez votre carte virtuelle 3D",
        icon: CardSim,
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
        label: "Rendez-vous aujourd’hui",
        desc: "Rendez-vous programmés aujourd’hui",
        value: data?.todayAppointmentsCount || 0,
        badge: "+2 depuis hier",
      },
      {
        icon: AlertCircle,
        iconColor: "text-red-500",
        label: "Demandes à confirmer",
        desc: "Demandes en attente de confirmation",
        value: data?.pendingRequestsCount || 0,
        badge: "+2 depuis hier",
      },
      {
        icon: Bell,
        iconColor: "text-green-500",
        label: "Nouvelles entrées",
        desc: "Nouvelles informations à traiter",
        value: data?.newFileEntriesCount || 0,
        badge: "+2 depuis hier",
      },
    ],
    [data],
  );

  const value = {
    emergencyContacts: data?.emergencyContacts || [],
    quickActions,
    overviewCardsContents,
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
