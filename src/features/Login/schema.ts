import z from "zod";
import { dzPhoneRegex } from "../../constants/regex.ts";

export const LoginFormSchema = z.object({
  phone_number: z
    .string()
    .nonempty({ message: "Le numéro de téléphone est obligatoire." })
    .regex(dzPhoneRegex, {
      message:
        "Veuillez entrer un numéro de téléphone algérien valide (ex : 0551234567 ou +213551234567).",
    }),

  password: z
    .string()
    .nonempty({ message: "Le mot de passe est obligatoire." })
    .min(8, {
      message: "Le mot de passe doit contenir au moins 8 caractères.",
    }),
});

export type LoginFormData = z.infer<typeof LoginFormSchema>;
