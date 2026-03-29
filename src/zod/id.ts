import z from "zod";

export const IdSchema = z
  .string()
  .nonempty()
  .refine((value) => {
    return value.trim() === value;
  });
