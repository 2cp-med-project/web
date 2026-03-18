import { Box, TextField } from "@radix-ui/themes";
import { Controller, useFormContext } from "react-hook-form";
import type { RegisterPatientData } from "./schema.ts";
import { Stepper } from "./Stepper.tsx";
import { useRegisterPatientStepStore } from "./store.tsx";

export function PatientStepSecurity() {
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
    const isValid = await trigger(["national_card_id", "password"]);
    if (isValid) return next();
  };

  return (
    <Box className="space-y-4">
      <Box>
        {/* National Card ID */}
        <label className="space-y-1">
          <p className="font-inter text-base font-medium">
            Numéro de carte nationale
          </p>
          <Controller
            name="national_card_id"
            control={control}
            render={({ field }) => (
              <div>
                <TextField.Root
                  {...field}
                  type="text"
                  className="p-2 focus:ring-foreground"
                  placeholder="1234567890123456"
                  size="3"
                  color={!!errors.national_card_id ? "red" : "green"}
                  onBlur={() => {
                    field.onBlur();
                    clearErrors("national_card_id");
                  }}
                />
                <p className="text-sm text-red-500 min-h-5">
                  {errors.national_card_id?.message ?? "\u00A0"}
                </p>
              </div>
            )}
          />
        </label>

        {/* Password */}
        <label className="space-y-1">
          <p className="font-inter text-base font-medium">Mot de passe</p>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <div>
                <TextField.Root
                  {...field}
                  type="password"
                  className="p-2 focus:ring-foreground"
                  placeholder="••••••••"
                  size="3"
                  color={!!errors.password ? "red" : "green"}
                  onBlur={() => {
                    field.onBlur();
                    clearErrors("password");
                  }}
                />
                <p className="text-sm text-red-500 min-h-5">
                  {errors.password?.message ?? "\u00A0"}
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
