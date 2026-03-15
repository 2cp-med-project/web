import { GRAVITY } from "@/constants/index.ts";
import { TextArea, TextField } from "@radix-ui/themes";
import { Controller, useFormContext } from "react-hook-form";
import { usePatientReportFormContext } from "../context.tsx";
import { InputWrapper } from "../InputWrapper.tsx";
import type { PatientRecordFormData } from "../schema.ts";
import { Stepper } from "../Stepper.tsx";

export function SymptomsStep() {
  const context = useFormContext<PatientRecordFormData>();
  const { trigger, control } = context;

  const { onNext, onPrev, hasNext, hasPrev } = usePatientReportFormContext();

  const handleNext = async () => {
    const isValid = await trigger([
      "symptomStart",
      "duration",
      "gravity",
      "notes",
    ]);

    if (isValid) return onNext();
  };

  return (
    <div className="space-y-4">
      {/* Symptom Start */}
      <Controller
        control={control}
        name="symptomStart"
        render={({ field }) => (
          <InputWrapper label="Début des symptômes:">
            <div className="p-2">
              <TextField.Root {...field} placeholder="Ex: Il y a 3 jours" />
            </div>
          </InputWrapper>
        )}
      />

      {/* Duration */}
      <Controller
        control={control}
        name="duration"
        render={({ field }) => (
          <InputWrapper label="Durée:">
            <div className="p-2">
              <TextField.Root {...field} placeholder="Ex: 2 heures" />
            </div>
          </InputWrapper>
        )}
      />

      {/* Gravity */}
      <Controller
        control={control}
        name="gravity"
        render={({ field }) => (
          <InputWrapper label="Gravité:">
            <div className="p-2 flex flex-col gap-2 mt-1">
              {Object.values(GRAVITY).map((level) => (
                <label
                  key={level}
                  className="flex items-center gap-2 cursor-pointer select-none"
                >
                  <input
                    type="radio"
                    value={level}
                    checked={field.value === level}
                    onChange={() => field.onChange(level)}
                    className="accent-foreground"
                  />
                  <span className="capitalize">{level}</span>
                </label>
              ))}
            </div>
          </InputWrapper>
        )}
      />

      {/* Additional Notes */}
      <Controller
        control={control}
        name="notes"
        render={({ field }) => (
          <InputWrapper label="Notes supplémentaires:">
            <div className="p-2">
              <TextArea
                {...field}
                placeholder="Informations complémentaires..."
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
