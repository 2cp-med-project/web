import { BLOOD_TYPE } from "@/constants/index.ts";
import type { PatientProfile } from "@/types/entities.ts";
import { users } from "../auth.ts";

export const profile: PatientProfile = {
  ...users[0],
  allergies: [],
  chronicConditions: [],
  bloodType: BLOOD_TYPE.A_POS,
};
