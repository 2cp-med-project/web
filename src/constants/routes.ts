import { ROLE } from "./index.ts";
import type { Role } from "@/types/index.ts";

export const ROLE_HOME_ROUTE: Record<Role, "/a" | "/d" | "/p"> = {
  [ROLE.ADMIN]: "/a",
  [ROLE.DOCTOR]: "/d",
  [ROLE.PATIENT]: "/p",
};

export const getRoleHomeRoute = (role: Role) => ROLE_HOME_ROUTE[role];
