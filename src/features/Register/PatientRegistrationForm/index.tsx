import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { GENDER } from "../../../constants/index.ts";
import { RegisterPatientSchema, type RegisterPatientData } from "./schema.ts";
import { StepSwitcher } from "./StepSwitcher.tsx";

export function RegisterPatientForm() {
  const context = useForm<RegisterPatientData>({
    resolver: zodResolver(RegisterPatientSchema),
    mode: "onBlur",
    defaultValues: {
      firstname: "",
      lastname: "",
      birth_date: "1997-01-01",
      birth_place: "",
      address: "",
      email: "",
      gender: GENDER.MALE,
      national_card_id: "",
      password: "",
      phone_number: "",
    },
  });

  return (
    <FormProvider {...context}>
      <div className="px-4 py-2">
        <StepSwitcher />
      </div>
    </FormProvider>
  );
}
