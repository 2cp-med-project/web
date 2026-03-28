import { PatientData } from "@/constants/ui/index.ts";
import type { PatientProfile } from "@/types/entities.ts";
import { UserNotFoundError } from "../errors/index.ts";

// GET /profile
export const fetch = (id: string) => {
  return new Promise<PatientProfile>((resolve, reject) => {
    setTimeout(() => {
      const profile = PatientData.Profile.profile;
      if (profile.id === id) return resolve(profile);
      return reject(new UserNotFoundError(id));
    }, 300);
  });
};
