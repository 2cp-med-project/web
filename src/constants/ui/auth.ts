import { GENDER, ROLE } from "@/constants/index.ts";
import type { AuthUser } from "@/types/entities.ts";

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
    id: "430493-434039-992495-432942",
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
  {
    id: "430493-434039-992495-432941",
    fullname: "Sara Senoussaoui ",
    email: "admin@gmail.com",
    avatar: null,
    password: "djocoding",
    phoneNumber: "0698690027",
    address: "Es-Senia, Oran, Algérie",
    age: 20,
    gender: GENDER.MALE,
    nationalId: "NID-483920174",
    role: ROLE.ADMIN,
  },
];
