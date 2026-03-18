import type { Profile } from "@/types/entities.ts";
import { users } from "./auth.ts";

export const profiles: Profile[] = [
  {
    ...users[0],
    bio: "Docteur Géneralist",
  },
  {
    ...users[1],
    bio: "Patient malade",
  },
];
