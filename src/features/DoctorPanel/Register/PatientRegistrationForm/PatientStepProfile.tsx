import { Box, TextField } from "@radix-ui/themes";
import { Controller, useFormContext } from "react-hook-form";
import { GENDER } from "@/constants/index.ts";
import type { RegisterPatientData } from "./schema.ts";
import { Stepper } from "./Stepper.tsx";
import { useRegisterPatientStepStore } from "./store.tsx";

export function PatientStepProfile() {
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
    const isValid = await trigger(["address", "gender"]);
    if (isValid) return next();
  };

  return (
    <Box className="space-y-4">
      <Box>
        <label className="space-y-2">
          <p className="font-inter text-base font-medium">Sex</p>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <div>
                <div className="border px-1 py-2 rounded border-[#D1D5D9]">
                  <select
                    className="w-full bg-transparent outline-none"
                    {...field}
                    defaultValue={GENDER.MALE}
                    onBlur={() => {
                      field.onBlur();
                      clearErrors();
                    }}
                  >
                    <option value={GENDER.MALE}>Homme</option>
                    <option value={GENDER.FEMALE}>Femme</option>
                  </select>
                </div>

                <p className="text-sm text-red-500 min-h-5">
                  {errors.gender?.message ?? "\u00A0"}
                </p>
              </div>
            )}
          />
        </label>

        <label className="space-y-1">
          <p className="font-inter text-base font-medium">Adresse</p>
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <div>
                <TextField.Root
                  {...field}
                  className="p-2 focus:ring-foreground"
                  placeholder="Oran, Algérie"
                  size="3"
                  color={!!errors.address ? "red" : "green"}
                  onBlur={() => {
                    field.onBlur();
                    clearErrors();
                  }}
                />
                <p className="text-sm text-red-500 min-h-5">
                  {errors.address?.message ?? "\u00A0"}
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
