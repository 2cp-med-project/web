import { ProfileUI } from "@/constants/ui/index.ts";
import type { Profile } from "@/types/entities.ts";

export const fetch = (_: string) => {
  return new Promise<Profile>((resolve) => {
    setTimeout(() => {
      resolve(ProfileUI.profile);
    }, 300);
  });
};
