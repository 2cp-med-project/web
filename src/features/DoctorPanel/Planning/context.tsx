import { DoctorData } from "@/constants/ui/index.ts";
import { HookUsageOutOfProviderError } from "@/errors/index.ts";
import type { PopulatedAppointment } from "@/types/entities.ts";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

export type PlanningView = "day" | "week" | "month-grid" | "month-agenda";

export type PlanningContext = {
  appointments: PopulatedAppointment[];
  selectedAppointment: PopulatedAppointment | null;
  currentView: PlanningView;
  currentDate: Date;
  setCurrentView: (view: PlanningView) => void;
  setCurrentDate: (date: Date) => void;
  selectAppointment: (a: string) => void;
  clearAppointmentSelection: () => void;
};

export const planningContext = createContext<PlanningContext | undefined>(
  undefined,
);
planningContext.displayName = "PlanningContext";

type PlanningContextProviderProps = PropsWithChildren & {};

export function PlanningContextProvider({
  children,
}: PlanningContextProviderProps) {
  const [appointments, setAppointments] = useState<PopulatedAppointment[]>([]);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState<
    string | null
  >(null);
  const [currentView, setCurrentView] = useState<PlanningView>("day");
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    setAppointments(
      DoctorData.Planning.appointments.map((a) => {
        const { patientId, ...rest } = a;
        const patient = DoctorData.Patients.patients.find(
          (p) => p.id === patientId,
        )!;
        return {
          ...rest,
          patient,
        };
      }),
    );
  }, []);

  const selectAppointment = (id: string) => setSelectedAppointmentId(id);
  const clearAppointmentSelection = () => setSelectedAppointmentId(null);

  const selectedAppointment =
    appointments.find((a) => a.id === selectedAppointmentId) ?? null;

  return (
    <planningContext.Provider
      value={{
        appointments,
        selectedAppointment,
        currentView,
        setCurrentView,
        currentDate,
        setCurrentDate,
        selectAppointment,
        clearAppointmentSelection,
      }}
    >
      {children}
    </planningContext.Provider>
  );
}

export const usePlanningContext = () => {
  const context = useContext(planningContext);
  if (context === undefined) {
    throw new HookUsageOutOfProviderError(planningContext);
  }
  return context;
};
