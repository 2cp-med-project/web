import type z from "zod";
import type { LoginFormSchema } from "./schema.ts";

export type LoginFormData = z.infer<typeof LoginFormSchema>