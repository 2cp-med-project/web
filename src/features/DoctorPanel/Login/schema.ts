import z from "zod";

export const LoginFormSchema = z.object({
  email: z.string().trim().email({ message: "Adresse e-mail invalide." }),
  password: z
    .string()
    .nonempty({ message: "Le mot de passe est obligatoire." })
    .min(8, {
      message: "Le mot de passe doit contenir au moins 8 caractères.",
    }),
});

export type LoginFormData = z.infer<typeof LoginFormSchema>;
