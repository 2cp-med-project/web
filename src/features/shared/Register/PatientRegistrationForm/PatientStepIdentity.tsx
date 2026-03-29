import { Box, TextField } from "@radix-ui/themes";
import { Controller, useFormContext } from "react-hook-form";
import type { RegisterPatientData } from "./schema.ts";
import { Stepper } from "./Stepper.tsx";
import { useRegisterPatientStepStore } from "./store.tsx";

export function PatientStepIdentity() {
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
    const isValid = await trigger(["firstname", "lastname"]);
    if (isValid) return next();
  };

  return (
    <Box className="space-y-4">
      <Box>
        <label className="space-y-1">
          <p className="font-inter text-base font-medium">Prénom</p>
          <Controller
            name="firstname"
            control={control}
            render={({ field }) => (
              <div>
                <TextField.Root
                  {...field}
                  className="p-2 focus:ring-foreground"
                  placeholder="Mohammed Djaoued"
                  size="3"
                  color={!!errors.firstname ? "red" : "green"}
                  onBlur={() => {
                    field.onBlur();
                    clearErrors();
                  }}
                />
                <p className="text-sm text-red-500 min-h-5">
                  {errors.firstname?.message ?? "\u00A0"}
                </p>
              </div>
            )}
          />
        </label>

        <label className="space-y-1">
          <p className="font-inter text-base font-medium">Nom</p>
          <Controller
            name="lastname"
            control={control}
            render={({ field }) => (
              <div>
                <TextField.Root
                  {...field}
                  className="p-2 focus:ring-foreground"
                  placeholder="BOUHADDA"
                  size="3"
                  color={!!errors.lastname ? "red" : "green"}
                  onBlur={() => {
                    field.onBlur();
                    clearErrors();
                  }}
                />
                <p className="text-sm text-red-500 min-h-5">
                  {errors.lastname?.message ?? "\u00A0"}
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
