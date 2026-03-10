import type { Profile } from "@/types/entities.ts";
import { user } from "./auth.ts";

export const profile: Profile = {
  ...user,
  bio: "Full-Stack SWE",
};
