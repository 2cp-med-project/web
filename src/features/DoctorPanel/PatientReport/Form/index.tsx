import { PatientsUI } from "@/constants/ui/index.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { PatientReportFormContextProvider } from "./context.tsx";
import { LinearStepper } from "./LinearStepper.tsx";
import {
  PatientRecordFormSchema,
  type PatientRecordFormData,
} from "./schema.ts";
import { StepSwitcher } from "./StepSwitcher.tsx";

export function PatientRecordForm() {
  const context = useForm<PatientRecordFormData>({
    resolver: zodResolver(PatientRecordFormSchema),
    mode: "onBlur",
    defaultValues: {
      visitType: "",
      specialty: "",
      reason: "",
      symptomStart: "",
      duration: "",
      gravity: undefined,
      notes: "",
      bloodPressure: "",
      heartRate: "",
      temperature: "",
      respiratoryRate: "",
      weight: "",
      generalState: undefined,
      systemExam: "",
      additionalActions: "",
      treatmentDetails: "",
      followUpRequired: false,
      nextAppointmentDate: undefined,
    },
  });

  return (
    <FormProvider {...context}>
      <PatientReportFormContextProvider
        steps={PatientsUI.patientReportFormSteps}
      >
        <LinearStepper />
        <StepSwitcher />
      </PatientReportFormContextProvider>
    </FormProvider>
  );
}
