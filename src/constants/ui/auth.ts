import type { User } from "@/types/entities.ts";
import { GENDER } from "../index.ts";

export const user: User & { password: string } = {
  id: "430493-434039-992495-432940",
  fullname: "Mohammed Djaoued BOUHADDA",
  email: "djocoding@gmail.com",
  avatar: null,
  password: "djocoding",
  phoneNumber: "0698690027",
  address: "Es-Senia, Oran, Algérie",
  age: 20,
  gender: GENDER.MALE,
  nationalId: "NID-483920174",
};
