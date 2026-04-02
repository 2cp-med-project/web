import { BLOOD_TYPE } from "@/constants/index.ts";
import type { PatientProfile } from "@/types/entities.ts";
import { users } from "../auth.ts";

export const profile: PatientProfile = {
  ...users[1],
  allergies: [],
  chronicConditions: [],
  bloodType: BLOOD_TYPE.A_POS,
  emergencyContacts: [
    {
      id: "1",
      label: "Father",
      fullname: "Ahmed Bouhadda",
      phoneNumber: "+213550123456",
    },
    {
      id: "2",
      label: "Mother",
      fullname: "Fatima Bouhadda",
      phoneNumber: "+213661234567",
    },
    {
      id: "3",
      label: "Brother",
      fullname: "Yacine Bouhadda",
      phoneNumber: "+213770345678",
    },
    {
      id: "4",
      label: "Friend",
      fullname: "Karim Benali",
      phoneNumber: "+213556789012",
    },
    {
      id: "5",
      label: "Doctor",
      fullname: "Dr. Samir Haddad",
      phoneNumber: "+213660987654",
    },
  ],
};
