import z from "zod";

export const CreateAppointmentSchema = z.object({
  title: z
    .string()
    .trim()
    .nonempty({ message: "Le titre du rendez-vous est requis." }),

  patientId: z
    .string()
    .trim()
    .nonempty({
      error: "L'identifiant du patient est requis.",
    })
    .nullable(),

  location: z
    .string()
    .trim()
    .transform((v) => (v.length === 0 ? null : v))
    .nullable(),

  date: z
    .date({
      error: "La date du rendez-vous est invalide.",
    })
    .nullable()
    .refine((v) => v !== null, {
      error: "La date du rendez-vous est requise.",
    })
    .refine((v) => v > new Date(), {
      message: "La date du rendez-vous doit être dans le futur.",
    }),

  notes: z
    .string({
      error: "Les notes doivent être de type text.",
    })
    .trim(),
});

export type CreateAppointmentForm = z.input<typeof CreateAppointmentSchema>;
export type CreateAppointmentData = z.output<typeof CreateAppointmentSchema>;
