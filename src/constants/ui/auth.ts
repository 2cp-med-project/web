import type { AuthUser } from "@/types/entities.ts";
import { GENDER, ROLE } from "../index.ts";

export const users: (AuthUser & { password: string })[] = [
  {
    id: "430493-434039-992495-432940",
    fullname: "Mohammed Djaoued BOUHADDA",
    email: "doctor@gmail.com",
    avatar: null,
    password: "djocoding",
    phoneNumber: "0698690027",
    address: "Es-Senia, Oran, Algérie",
    age: 20,
    gender: GENDER.MALE,
    nationalId: "NID-483920174",
    role: ROLE.DOCTOR,
  },
  {
    id: "430493-434039-992495-432940",
    fullname: "Mohammed Djaoued BOUHADDA",
    email: "patient@gmail.com",
    avatar: null,
    password: "djocoding",
    phoneNumber: "0698690027",
    address: "Es-Senia, Oran, Algérie",
    age: 20,
    gender: GENDER.MALE,
    nationalId: "NID-483920174",
    role: ROLE.PATIENT,
  },
];
