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
      "gravity",
      "symptoms",
      "diagnosis",
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

      {/* Gravity */}
      <Controller
        control={control}
        name="gravity"
        render={({ field }) => (
          <InputWrapper label="Gravité:">
            <div className="p-2 flex flex-col gap-2 mt-1">
              {Object.entries(GRAVITY).map((entry) => (
                <label
                  key={entry[0]}
                  className="flex items-center gap-2 cursor-pointer select-none"
                >
                  <input
                    type="radio"
                    value={entry[0]}
                    checked={field.value === entry[0]}
                    onChange={() => field.onChange(entry[0])}
                    className="accent-foreground"
                  />
                  <span className="capitalize">{entry[1]}</span>
                </label>
              ))}
            </div>
          </InputWrapper>
        )}
      />

      {/* Symptoms */}
      <Controller
        control={control}
        name="symptoms"
        render={({ field }) => (
          <InputWrapper label="Symptômes:">
            <div className="p-2">
              <TextArea {...field} placeholder="..." />
            </div>
          </InputWrapper>
        )}
      />

      {/* Diagnosis */}
      {/* Duration */}
      <Controller
        control={control}
        name="diagnosis"
        render={({ field }) => (
          <InputWrapper label="Diagnostic:">
            <div className="p-2">
              <TextField.Root {...field} placeholder="Ex: Diabétes" />
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
