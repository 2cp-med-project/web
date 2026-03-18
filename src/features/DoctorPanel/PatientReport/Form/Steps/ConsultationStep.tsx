import { CONSULTATION_TYPE } from "@/constants/index.ts";
import { TextField } from "@radix-ui/themes";
import { Controller, useFormContext } from "react-hook-form";
import { usePatientReportFormContext } from "../context.tsx";
import { InputWrapper } from "../InputWrapper.tsx";
import type { PatientRecordFormData } from "../schema.ts";
import { Stepper } from "../Stepper.tsx";

export function ConsultationStep() {
  const context = useFormContext<PatientRecordFormData>();
  const { trigger, control } = context;

  const { onNext, onPrev, hasNext, hasPrev } = usePatientReportFormContext();

  const handleNext = async () => {
    const isValid = await trigger(["visitType", "specialty", "reason"]);
    if (isValid) return onNext();
  };

  return (
    <div className="space-y-4">
      {/* Visit Type */}
      <Controller
        control={control}
        name="visitType"
        render={({ field }) => (
          <InputWrapper label="Type de visite:">
            <div className="p-2 flex flex-col gap-2 mt-1">
              {Object.values(CONSULTATION_TYPE).map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-2 cursor-pointer select-none"
                >
                  <input
                    type="radio"
                    name="visitType"
                    value={type}
                    checked={field.value === type}
                    onChange={() => field.onChange(type)}
                    className="accent-foreground"
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </InputWrapper>
        )}
      />

      {/* Specialty */}
      <Controller
        control={control}
        name="specialty"
        render={({ field }) => (
          <InputWrapper label="Spécialité:">
            <div className="p-2">
              <TextField.Root {...field} placeholder="Ex: Cardiologie" />
            </div>
          </InputWrapper>
        )}
      />

      {/* Reason */}
      <Controller
        control={control}
        name="reason"
        render={({ field }) => (
          <InputWrapper label="Raison de la visite:">
            <div className="p-2">
              <TextField.Root
                {...field}
                placeholder="Motif de la consultation"
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
