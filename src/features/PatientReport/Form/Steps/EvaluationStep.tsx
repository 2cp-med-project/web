import {
  ADDITIONAL_ACTIONS,
  EXAM,
  GENERAL_PATIENT_STATE,
} from "@/constants/index.ts";
import { TextField } from "@radix-ui/themes";
import { Controller, useFormContext } from "react-hook-form";
import { usePatientReportFormContext } from "../context.tsx";
import { InputWrapper } from "../InputWrapper.tsx";
import type { PatientRecordFormData } from "../schema.ts";
import { Stepper } from "../Stepper.tsx";

export function EvaluationStep() {
  const { control, trigger } = useFormContext<PatientRecordFormData>();
  const { onNext, onPrev, hasNext, hasPrev } = usePatientReportFormContext();

  const handleNext = async () => {
    const isValid = await trigger([
      "generalState",
      "systemExam",
      "additionalActions",
    ]);

    if (isValid) return onNext();
  };

  return (
    <div className="space-y-4">
      {/* État général */}
      <Controller
        control={control}
        name="generalState"
        render={({ field }) => (
          <InputWrapper label="État général:">
            <div className="p-2 flex flex-col gap-2">
              {Object.values(GENERAL_PATIENT_STATE).map((state) => (
                <label
                  key={state}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    value={state}
                    checked={field.value === state}
                    onChange={() => field.onChange(state)}
                    className="accent-foreground"
                  />
                  {state}
                </label>
              ))}
            </div>
          </InputWrapper>
        )}
      />

      {/* Examen du système */}
      <Controller
        control={control}
        name="systemExam"
        render={({ field }) => (
          <InputWrapper label="Examen du système:">
            <div className="p-2 flex flex-col gap-2">
              {Object.values(EXAM).map((exam) => (
                <label
                  key={exam}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={field.value === exam}
                    onChange={() => field.onChange(exam)}
                    className="accent-foreground"
                  />
                  {exam}
                </label>
              ))}

              {/* Other */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={
                    !!field.value &&
                    !Object.values(EXAM).includes(field.value as any)
                  }
                  onChange={() => field.onChange("")}
                  className="accent-foreground"
                />
                <span>Other</span>
                <TextField.Root
                  value={
                    field.value &&
                    !Object.values(EXAM).includes(field.value as any)
                      ? field.value
                      : ""
                  }
                  onChange={(e) => field.onChange(e.target.value)}
                  placeholder="Préciser..."
                />
              </div>
            </div>
          </InputWrapper>
        )}
      />

      {/* Actions supplémentaires */}
      <Controller
        control={control}
        name="additionalActions"
        render={({ field }) => (
          <InputWrapper label="Actions supplémentaires:">
            <div className="p-2 flex flex-col gap-2">
              {Object.values(ADDITIONAL_ACTIONS).map((action) => (
                <label
                  key={action}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    value={action}
                    checked={field.value === action}
                    onChange={() => field.onChange(action)}
                    className="accent-foreground"
                  />
                  {action}
                </label>
              ))}

              {/* Other */}
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={
                    !!field.value &&
                    !Object.values(ADDITIONAL_ACTIONS).includes(
                      field.value as any,
                    )
                  }
                  onChange={() => field.onChange("")}
                  className="accent-foreground"
                />
                <span>Other</span>
                <TextField.Root
                  value={
                    field.value &&
                    !Object.values(ADDITIONAL_ACTIONS).includes(
                      field.value as any,
                    )
                      ? field.value
                      : ""
                  }
                  onChange={(e) => field.onChange(e.target.value)}
                  placeholder="Préciser..."
                />
              </div>
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
