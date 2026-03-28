import type { DoctorProfile } from "@/types/entities.ts";
import { users } from "../auth.ts";

export const profile: DoctorProfile = {
  ...users[0],
  bio: "Docteur Géneralist",
};
