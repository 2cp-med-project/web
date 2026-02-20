import z from "zod";
import { dzPhoneRegex } from "../../constants/regex.ts";

export const LoginFormSchema = z.object({
  phone_number: z
    .string()
    .nonempty({ message: "Phone number is required." })
    .regex(dzPhoneRegex, {
      error:
        "Please enter a valid Algerian phone number (e.g. 0551234567 or +213551234567).",
    }),

  password: z.string().nonempty({ error: "Password is required." }).min(8, {
    error: "Password must be at least 8 characters long.",
  }),
});
