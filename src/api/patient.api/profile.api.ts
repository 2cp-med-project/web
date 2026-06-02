import { PatientData } from "@/constants/ui/index.ts";
import type { PatientProfile } from "@/types/entities.ts";
import type { Gender } from "@/types/index.ts";
import { api, request } from "../client.ts";
import { UserNotFoundError } from "../errors/index.ts";

type GetPatientProfileResponseBody = {
  _id: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  dateOfBirth: string;
  placeOfBirth: string;
  address: string;
  email: string;
  phone: string;
  medicalResume: string;
};

// GET /profile
export const fetch = (id: string) => {
  return new Promise<PatientProfile>((resolve, reject) => {
    setTimeout(() => {
      const profile = PatientData.Profile.profile;
      if (profile.id === id) return resolve(profile);
      return reject(new UserNotFoundError(id));
    }, 300);
  });
};

// GET /users/me
export const fetchMe = () => {
  return request(async () => {
    const res = await api.get<GetPatientProfileResponseBody>("/users/me");
    return res.data;
  });
};
