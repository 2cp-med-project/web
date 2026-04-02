import { HookUsageOutOfProviderError } from "@/errors/HookUsageOutOfProviderError.ts";
import type { QuickAction } from "@/types/ui.ts";
import { Calendar, MessageCircle, Upload, UserPlus } from "lucide-react";
import {
  createContext,
  useContext,
  useMemo,
  type PropsWithChildren,
} from "react";

type PatientProfileContext = {
  quickActions: QuickAction[];
};

const patientProfileContext = createContext<PatientProfileContext | undefined>(
  undefined,
);
patientProfileContext.displayName = "PatientProfileContext";

type PatientProfileContextProviderProps = PropsWithChildren & {};

export function PatientProfileContextProvider({
  children,
}: PatientProfileContextProviderProps) {
  const quickActions = useMemo<QuickAction[]>(
    () => [
      {
        label: "Prendre rendez-vous",
        desc: "Planifier une consultation",
        icon: Calendar,
        action: () => {},
      },
      {
        label: "Contacter le médecin",
        desc: "Envoyer un message",
        icon: MessageCircle,
        action: () => {},
      },
      {
        label: "Téléverser un résultat",
        desc: "Ajouter un résultat d'analyse",
        icon: Upload,
        action: () => {},
      },
      {
        label: "Orienter vers un spécialiste",
        desc: "Faire une référence",
        icon: UserPlus,
        action: () => {},
      },
    ],
    [],
  );

  const value = {
    quickActions,
  };

  return (
    <patientProfileContext.Provider value={value}>
      {children}
    </patientProfileContext.Provider>
  );
}

export const usePatientProfileContext = () => {
  const context = useContext(patientProfileContext);
  if (context === undefined) {
    throw new HookUsageOutOfProviderError(patientProfileContext);
  }
  return context;
};
