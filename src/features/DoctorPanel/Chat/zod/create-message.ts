import { IdSchema } from "@/zod/index.ts";
import z from "zod";

export const CreateMessageSchema = z.object({
  contactId: IdSchema,
  content: z.string().trim().nonempty(),
});

export type CreateMessageData = z.infer<typeof CreateMessageSchema>;
