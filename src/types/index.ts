import type { BLOOD_TYPE, GENDER, ROLE } from "../constants/index.ts";

export type Role = (typeof ROLE)[keyof typeof ROLE];
export type Gender = (typeof GENDER)[keyof typeof GENDER];
export type BloodType = (typeof BLOOD_TYPE)[keyof typeof BLOOD_TYPE];

