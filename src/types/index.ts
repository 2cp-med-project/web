import type { ROLE } from "../constants/index.ts";

export type Role = (typeof ROLE)[keyof typeof ROLE];
