import { TextField } from "@radix-ui/themes";
import { Controller, useFormContext } from "react-hook-form";
import { usePatientReportFormContext } from "../context.tsx";
import { InputWrapper } from "../InputWrapper.tsx";
import type { PatientRecordFormData } from "../schema.ts";
import { Stepper } from "../Stepper.tsx";

export function VitalSignsStep() {
  const { control, trigger } = useFormContext<PatientRecordFormData>();
  const { onNext, onPrev, hasPrev, hasNext } = usePatientReportFormContext();

  const handleNext = async () => {
    const isValid = await trigger([
      "bloodPressure",
      "heartRate",
      "temperature",
      "respiratoryRate",
      "weight",
    ]);

    if (isValid) return onNext();
  };

  return (
    <div className="space-y-4">
      {/* Blood Pressure */}
      <Controller
        control={control}
        name="bloodPressure"
        render={({ field }) => (
          <InputWrapper label="Pression artérielle:">
            <div className="p-2">
              <TextField.Root {...field} placeholder="Ex: 120/80 mmHg" />
            </div>
          </InputWrapper>
        )}
      />

      {/* Heart Rate */}
      <Controller
        control={control}
        name="heartRate"
        render={({ field }) => (
          <InputWrapper label="Fréquence cardiaque:">
            <div className="p-2">
              <TextField.Root {...field} placeholder="Ex: 72 bpm" />
            </div>
          </InputWrapper>
        )}
      />

      {/* Temperature */}
      <Controller
        control={control}
        name="temperature"
        render={({ field }) => (
          <InputWrapper label="Température:">
            <div className="p-2">
              <TextField.Root {...field} placeholder="Ex: 37 °C" />
            </div>
          </InputWrapper>
        )}
      />

      {/* Respiratory Rate */}
      <Controller
        control={control}
        name="respiratoryRate"
        render={({ field }) => (
          <InputWrapper label="Fréquence respiratoire:">
            <div className="p-2">
              <TextField.Root {...field} placeholder="Ex: 16 / min" />
            </div>
          </InputWrapper>
        )}
      />

      {/* Weight */}
      <Controller
        control={control}
        name="weight"
        render={({ field }) => (
          <InputWrapper label="Poids:">
            <div className="p-2">
              <TextField.Root {...field} placeholder="Ex: 70 kg" />
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
