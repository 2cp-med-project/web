import type { BaseUser } from "@/types/entities.ts";
import { profiles } from "./profile.ts";

export const contacts: BaseUser[] = profiles.map((profile) => {
  const { bio, role, ...baseUser } = profile;
  return baseUser;
});
