import type { DoctorProfile } from "@/types/entities.ts";
import { UserNotFoundError } from "../errors/UserNotFoundError.ts";
import { DoctorData } from "./dashboard.api.ts";

// GET /profile
export const fetch = (id: string) => {
  return new Promise<DoctorProfile>((resolve, reject) => {
    setTimeout(() => {
      const profile = DoctorData.Profile.profile;
      if (profile.id === id) return resolve(profile);
      return reject(new UserNotFoundError(id));
    }, 300);
  });
};
