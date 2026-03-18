import { Unreachable } from "@/errors/Unreachable.ts";
import {
  ConsultationStep,
  EvaluationStep,
  SymptomsStep,
  TreatmentStep,
  VitalSignsStep,
} from "./Steps/index.ts";
import { usePatientReportFormContext } from "./context.tsx";

export function StepSwitcher() {
  const { step } = usePatientReportFormContext();

  switch (step) {
    case 1:
      return <ConsultationStep />;
    case 2:
      return <SymptomsStep />;
    case 3:
      return <VitalSignsStep />;
    case 4:
      return <EvaluationStep />;
    case 5:
      return <TreatmentStep />;
    default:
      throw new Unreachable();
  }
}
