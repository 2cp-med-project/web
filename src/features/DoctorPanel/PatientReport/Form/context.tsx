import { HookUsageOutOfProviderError } from "@/errors/HookUsageOutOfProviderError.ts";
import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";

type Step = {
  label: string;
};

type PatientReportFormContext = {
  patientId: string;
  step: number;
  steps: Step[];
  hasNext: boolean;
  hasPrev: boolean;
  onNext: () => void;
  onPrev: () => void;
};

export const patientReportFormContext = createContext<
  PatientReportFormContext | undefined
>(undefined);
patientReportFormContext.displayName = "PatientReportFormContext";

type PatientReportFormContextProviderProps = PropsWithChildren & {
  patientId: string;
  steps: Step[];
};

export function PatientReportFormContextProvider({
  patientId,
  steps,
  children,
}: PatientReportFormContextProviderProps) {
  const [step, setStep] = useState(1);

  const onNext = () =>
    setStep((prev) => {
      if (prev >= steps.length) return steps.length;
      return prev + 1;
    });

  const onPrev = () => setStep((prev) => (prev <= 1 ? 1 : prev - 1));

  const hasNext = step < steps.length;
  const hasPrev = step > 1;

  return (
    <patientReportFormContext.Provider
      value={{
        patientId,
        step,
        steps,
        onNext,
        onPrev,
        hasNext,
        hasPrev,
      }}
    >
      {children}
    </patientReportFormContext.Provider>
  );
}

export const usePatientReportFormContext = () => {
  const context = useContext(patientReportFormContext);
  if (context === undefined) {
    throw new HookUsageOutOfProviderError(patientReportFormContext);
  }
  return context;
};
