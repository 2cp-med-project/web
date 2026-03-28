import { GENDER } from "@/constants/index.ts";
import type { BaseUser } from "@/types/entities.ts";

export const contacts: BaseUser[] = [
  {
    id: "1",
    fullname: "Alice Johnson",
    email: "alice.johnson@example.com",
    phoneNumber: "0551 23 45 67",
    avatar: null,
    age: 22,
    address: null,
    gender: GENDER.MALE,
    nationalId: "NID-1111323223",
  },
  {
    id: "2",
    fullname: "Bob Smith",
    email: "bob.smith@example.com",
    phoneNumber: "0662 14 89 33",
    avatar: null,
    age: 22,
    address: null,
    gender: GENDER.MALE,
    nationalId: "NID-1111323223",
  },
  {
    id: "3",
    fullname: "Charlie Davis",
    email: "charlie.davis@example.com",
    phoneNumber: "0774 55 91 20",
    avatar: null,
    age: 22,
    address: null,
    gender: GENDER.MALE,
    nationalId: "NID-1111323223",
  },
];
