import { ProfileUI } from "@/constants/ui/index.ts";
import type { Profile } from "@/types/entities.ts";
import { UserNotFoundError } from "./errors/UserNotFoundError.ts";

// GET /profile
export const fetch = (id: string) => {
  return new Promise<Profile>((resolve, reject) => {
    setTimeout(() => {
      const profile = ProfileUI.profiles.find((profile) => profile.id === id);
      if (profile === undefined) {
        return reject(new UserNotFoundError(id));
      }
      return resolve(profile);
    }, 300);
  });
};
