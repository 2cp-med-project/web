import { DoctorData } from "@/constants/ui/index.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { PatientReportFormContextProvider } from "./context.tsx";
import { LinearStepper } from "./LinearStepper.tsx";
import {
  PatientRecordFormSchema,
  type PatientRecordFormData,
} from "./schema.ts";
import { StepSwitcher } from "./StepSwitcher.tsx";

type PatientRecordFormProps = {
  id: string;
};

export function PatientRecordForm({ id }: PatientRecordFormProps) {
  const context = useForm<PatientRecordFormData>({
    resolver: zodResolver(PatientRecordFormSchema),
    mode: "onBlur",
    defaultValues: {
      visitType: "",
      reason: "",
      symptomStart: "",
      gravity: undefined,
      symptoms: "",
      bloodPressure: "",
      heartRate: "",
      temperature: "",
      respiratoryRate: "",
      weight: "",
      generalState: undefined,
      systemExam: "",
      additionalActions: "",
      treatmentDetails: "",
      notes: "",
      followUpDate: undefined,
      diagnosis: "",
    },
  });

  return (
    <FormProvider {...context}>
      <PatientReportFormContextProvider
        patientId={id}
        steps={DoctorData.Patients.patientReportFormSteps}
      >
        <LinearStepper />
        <StepSwitcher />
      </PatientReportFormContextProvider>
    </FormProvider>
  );
}
