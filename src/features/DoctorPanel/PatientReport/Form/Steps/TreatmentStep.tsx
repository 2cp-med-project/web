import { TextArea, TextField } from "@radix-ui/themes";
import { Controller, useFormContext } from "react-hook-form";
import { usePatientReportFormContext } from "../context.tsx";
import { InputWrapper } from "../InputWrapper.tsx";
import type { PatientRecordFormData } from "../schema.ts";
import { Stepper } from "../Stepper.tsx";

export function TreatmentStep() {
  const { control, trigger } = useFormContext<PatientRecordFormData>();
  const { onPrev, onNext, hasNext, hasPrev } = usePatientReportFormContext();

  const handleNext = async () => {
    const isValid = await trigger([
      "treatmentDetails",
      "followUpRequired",
      "nextAppointmentDate",
    ]);

    if (isValid) return onNext();
  };

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
        name="followUpRequired"
        render={({ field }) => (
          <InputWrapper label="Suivi requis :">
            <div className="p-2 flex flex-col gap-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={field.value === true}
                  onChange={() => field.onChange(true)}
                  className="accent-foreground"
                />
                Oui
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={field.value === false}
                  onChange={() => field.onChange(false)}
                  className="accent-foreground"
                />
                Non
              </label>
            </div>
          </InputWrapper>
        )}
      />

      {/* Next appointment */}
      <Controller
        control={control}
        name="nextAppointmentDate"
        render={({ field }) => (
          <InputWrapper label="Date du prochain rendez-vous">
            <div className="p-2">
              <TextField.Root
                type="date"
                value={
                  field.value
                    ? new Date(field.value).toISOString().split("T")[0]
                    : ""
                }
                onChange={(e) => field.onChange(new Date(e.target.value))}
              />
            </div>
          </InputWrapper>
        )}
      />
      <Stepper
        onPrev={hasPrev ? onPrev : undefined}
        onNext={hasNext ? handleNext : undefined}
      />
    </div>
  );
}
