import { Box, TextField } from "@radix-ui/themes";
import { Controller, useFormContext } from "react-hook-form";
import type { RegisterPatientData } from "./schema.ts";
import { Stepper } from "./Stepper.tsx";
import { useRegisterPatientStepStore } from "./store.tsx";

export function PatientStepContactInfo() {
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
    const isValid = await trigger(["phone_number", "email"]);
    if (isValid) return next();
  };

  return (
    <Box className="space-y-4">
      <Box>
        {/* Phone Number */}
        <label className="space-y-1">
          <p className="font-inter text-base font-medium">
            Numéro de téléphone
          </p>
          <Controller
            name="phone_number"
            control={control}
            render={({ field }) => (
              <div>
                <TextField.Root
                  {...field}
                  type="tel"
                  className="p-2 focus:ring-foreground"
                  placeholder="0550123456"
                  size="3"
                  color={!!errors.phone_number ? "red" : "green"}
                  onBlur={() => {
                    field.onBlur();
                    clearErrors("phone_number");
                  }}
                />
                <p className="text-sm text-red-500 min-h-5">
                  {errors.phone_number?.message ?? "\u00A0"}
                </p>
              </div>
            )}
          />
        </label>

        {/* Email */}
        <label className="space-y-1">
          <p className="font-inter text-base font-medium">Adresse e-mail</p>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <div>
                <TextField.Root
                  {...field}
                  type="email"
                  className="p-2 focus:ring-foreground"
                  placeholder="example@email.com"
                  size="3"
                  color={!!errors.email ? "red" : "green"}
                  onBlur={() => {
                    field.onBlur();
                    clearErrors("email");
                  }}
                />
                <p className="text-sm text-red-500 min-h-5">
                  {errors.email?.message ?? "\u00A0"}
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
