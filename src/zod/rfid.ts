import { GENDER } from "@/constants/index.ts";
import { z } from "zod";

export const rfidTagSchema = z
  .object({
    "User ID": z.string(),
    Name: z.string(),
    Gender: z.enum(Object.values(GENDER)),
    "Emergency contact": z.string(),
    "Date of birth": z.string(),
    Surname: z.string(),
    "Blood type": z.enum(["a+", "a-", "b+", "b-", "ab+", "ab-", "o+", "o-"]),
  })
  .transform((data) => ({
    userId: data["User ID"],
    firstName: data.Name,
    lastName: data.Surname,
    gender: data.Gender,
    emergencyContact: data["Emergency contact"],
    dateOfBirth: data["Date of birth"],
    bloodType: data["Blood type"],
  }));

export type RFIDTag = z.infer<typeof rfidTagSchema>;
