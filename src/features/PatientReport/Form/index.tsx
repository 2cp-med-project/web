import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { PatientReportFormContextProvider } from "./context.tsx";
import { LinearStepper } from "./LinearStepper.tsx";
import {
  PatientRecordFormSchema,
  type PatientRecordFormData,
} from "./schema.ts";
import { StepSwitcher } from "./StepSwitcher.tsx";

const STEPS = [
  {
    label: "Consultation",
  },
  {
    label: "Symptômes",
  },
  {
    label: "Signes Vitaux",
  },
  {
    label: "Évaluation",
  },
  {
    label: "Traitement",
  },
];

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
    <PatientReportFormContextProvider steps={STEPS}>
      <FormProvider {...context}>
        <div className="col-span-3 space-y-4">
          <LinearStepper />
          <StepSwitcher />
        </div>
      </FormProvider>
    </PatientReportFormContextProvider>
  );
}
