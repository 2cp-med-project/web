import {
  ADDITIONAL_ACTIONS,
  CONSULTATION_TYPE,
  EXAM,
  GENERAL_PATIENT_STATE,
  GRAVITY,
} from "@/constants/index.ts";
import z from "zod";

export const PatientRecordFormSchema = z.object({
  visitType: z
    .enum(Object.values(CONSULTATION_TYPE))
    .or(z.string().trim().nonempty()),

  specialty: z.string().trim().nonempty(),

  reason: z.string().trim().nonempty(),

  symptomStart: z.string().trim().nonempty(),

  duration: z.string().trim().nonempty(),

  gravity: z.enum(Object.values(GRAVITY)),

  notes: z.string().trim(),

  bloodPressure: z.string().trim(),

  heartRate: z.string().trim(),

  temperature: z.string().trim(),

  respiratoryRate: z.string().trim(),

  weight: z.string().trim(),

  generalState: z.enum(Object.values(GENERAL_PATIENT_STATE)),

  systemExam: z.enum(Object.values(EXAM)).or(z.string().trim().nonempty()),

  additionalActions: z
    .enum(Object.values(ADDITIONAL_ACTIONS))
    .or(z.string().trim().nonempty()),

  treatmentDetails: z.string().trim().nonempty(),

  followUpRequired: z.boolean(),

  nextAppointmentDate: z.date(),
});

export type PatientRecordFormData = z.infer<typeof PatientRecordFormSchema>;
