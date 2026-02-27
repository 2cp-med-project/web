import { z } from "zod";
import { GENDER } from "../../../constants/index.ts";
import { dzPhoneRegex } from "../../../constants/regex.ts";

export const RegisterPatientSchema = z.object({
  firstname: z
    .string()
    .min(2, { error: "Le prénom doit contenir au moins 2 caractères." })
    .max(50, { error: "Le prénom est trop long." })
    .trim(),

  lastname: z
    .string()
    .min(2, { error: "Le nom doit contenir au moins 2 caractères." })
    .max(50, { error: "Le nom est trop long." })
    .trim(),

  birth_date: z.string().refine((date) => !isNaN(Date.parse(date)), {
    error: "La date de naissance est invalide.",
  }),

  birth_place: z
    .string()
    .min(2, { error: "Le lieu de naissance est requis." })
    .max(100, { error: "Le lieu de naissance est trop long." })
    .trim(),

  gender: z.enum(Object.values(GENDER), {
    error: "Le genre est obligatoire",
  }),

  address: z
    .string()
    .min(5, { error: "L'adresse doit contenir au moins 5 caractères." })
    .max(200, { error: "L'adresse est trop longue." })
    .trim(),

  phone_number: z.string().regex(dzPhoneRegex, {
    error:
      "Le numéro de téléphone est invalide (format attendu : 0XXXXXXXXX ou +213XXXXXXXXX).",
  }),

  email: z
    .email({ error: "L'adresse email est invalide." })
    .toLowerCase()
    .trim(),

  national_card_id: z
    .string()
    .min(6, { error: "Le numéro de carte nationale est requis." })
    .max(20, { error: "Le numéro de carte nationale est invalide." })
    .trim(),

  password: z
    .string()
    .min(8, { error: "Le mot de passe doit contenir au moins 8 caractères." })
    .regex(/[A-Z]/, {
      error: "Le mot de passe doit contenir au moins une lettre majuscule.",
    })
    .regex(/[a-z]/, {
      error: "Le mot de passe doit contenir au moins une lettre minuscule.",
    })
    .regex(/[0-9]/, {
      error: "Le mot de passe doit contenir au moins un chiffre.",
    })
    .regex(/[^A-Za-z0-9]/, {
      error: "Le mot de passe doit contenir au moins un caractère spécial.",
    }),
});

export type RegisterPatientData = z.infer<typeof RegisterPatientSchema>;
