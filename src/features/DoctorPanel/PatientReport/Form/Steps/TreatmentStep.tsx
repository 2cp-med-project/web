import { usePatients } from "@/hooks/doctor.hooks/usePatients.ts";
import { TextArea, TextField } from "@radix-ui/themes";
import { useNavigate } from "@tanstack/react-router";
import { Controller, useFormContext } from "react-hook-form";
import { toast } from "sonner";
import { usePatientReportFormContext } from "../context.tsx";
import { InputWrapper } from "../InputWrapper.tsx";
import type { PatientRecordFormData } from "../schema.ts";
import { Stepper } from "../Stepper.tsx";
import { SubmitButton } from "../SubmitButton.tsx";

export function TreatmentStep() {
  const navigate = useNavigate();

  const { control, trigger, handleSubmit } =
    useFormContext<PatientRecordFormData>();
  const { onPrev, onNext, hasNext, hasPrev, patientId } =
    usePatientReportFormContext();

  const { createRecord } = usePatients();
  const createdRecordMutation = createRecord();

  const handleNext = async () => {
    const isValid = await trigger([
      "treatmentDetails",
      "followUpDate",
      "notes",
    ]);
    if (isValid) return onNext();
  };

  const onSubmit = handleSubmit(
    (data) => {
      createdRecordMutation.mutateAsync({
        patientId,
        ...data,
        onSuccess: () => {
          toast.success("Patient record saved successfully");
          navigate({
            to: "/d/patients/$patientId",
            params: {
              patientId,
            },
          });
        },
        onError: (error) => {
          toast.error(error.message);
        },
      });
    },
    (errors) => {
      console.log(errors);
    },
  );

  return (
    <div className="space-y-4">
      {/* Treatment Details */}
      <Controller
        control={control}
        name="treatmentDetails"
        render={({ field }) => (
          <InputWrapper label="Détails du traitement :">
            <div className="p-2">
              <TextArea
                {...field}
                placeholder="Décrire le traitement prescrit..."
              />
            </div>
          </InputWrapper>
        )}
      />

      {/* Follow-up required */}
      <Controller
        control={control}
        name="followUpDate"
        render={({ field }) => (
          <InputWrapper label="Date de suivi">
            <div className="p-2">
              <TextField.Root
                type="date"
                value={
                  field.value
                    ? new Date(field.value).toISOString().split("T")[0]
                    : ""
                }
                onChange={(e) =>
                  field.onChange(
                    e.target.value ? new Date(e.target.value) : null,
                  )
                }
              />
            </div>
          </InputWrapper>
        )}
      />

      <Controller
        control={control}
        name="notes"
        render={({ field }) => (
          <InputWrapper label="Information Supplémentaires:">
            <div className="p-2">
              <TextArea {...field} placeholder="..." />
            </div>
          </InputWrapper>
        )}
      />

      <Stepper
        onPrev={hasPrev ? onPrev : undefined}
        onNext={hasNext ? handleNext : undefined}
      />

      {!hasNext && <SubmitButton onClick={onSubmit} />}
    </div>
  );
}
