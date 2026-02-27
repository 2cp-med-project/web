import { Box, TextField } from "@radix-ui/themes";
import { Controller, useFormContext } from "react-hook-form";
import type { RegisterPatientData } from "./schema.ts";
import { Stepper } from "./Stepper.tsx";
import { useRegisterPatientStepStore } from "./store.tsx";

export function PatientStepBirthInfo() {
  const context = useFormContext<RegisterPatientData>();
  const {
    control,
    trigger,
    formState: { errors },
    clearErrors,
  } = context;

  const next = useRegisterPatientStepStore((state) => state.next);
  const prev = useRegisterPatientStepStore((state) => state.prev);

  const handleNext = async () => {
    const isValid = await trigger(["birth_date", "birth_place"]);
    if (isValid) return next();
  };

  return (
    <Box className="space-y-4">
      <Box>
        <label className="space-y-2">
          <p className="font-inter text-base font-medium">Date de naissance</p>
          <Controller
            name="birth_date"
            control={control}
            render={({ field }) => (
              <div>
                <div className="border px-1 py-2 rounded border-[#D1D5D9]">
                  <input
                    type="date"
                    className="w-full"
                    {...field}
                    color={!!errors.birth_date ? "red" : "green"}
                    onBlur={() => {
                      field.onBlur();
                      clearErrors();
                    }}
                  />
                </div>
                <p className="text-sm text-red-500 min-h-5">
                  {errors.birth_date?.message ?? "\u00A0"}
                </p>
              </div>
            )}
          />
        </label>

        <label className="space-y-1">
          <p className="font-inter text-base font-medium">Lieu de naissance</p>
          <Controller
            name="birth_place"
            control={control}
            render={({ field }) => (
              <div>
                <TextField.Root
                  {...field}
                  className="p-2 focus:ring-foreground"
                  placeholder="Oran, Algérie"
                  size="3"
                  color={!!errors.birth_place ? "red" : "green"}
                  onBlur={() => {
                    field.onBlur();
                    clearErrors();
                  }}
                />
                <p className="text-sm text-red-500 min-h-5">
                  {errors.birth_date?.message ?? "\u00A0"}
                </p>
              </div>
            )}
          />
        </label>
      </Box>

      <Stepper onPrev={prev} onNext={handleNext} />
    </Box>
  );
}
