import type { Gender } from "@/types/index.ts";
import { GENDER } from "./index.ts";

export const GenderMap: Record<Gender, string> = {
  [GENDER.MALE]: "Homme",
  [GENDER.FEMALE]: "Femme",
};
