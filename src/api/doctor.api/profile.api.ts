import type { DoctorProfile } from "@/types/entities.ts";
import { UserNotFoundError } from "../errors/UserNotFoundError.ts";
import { DoctorData } from "./dashboard.api.ts";

// GET /profile
export const fetch = (id: string) => {
  return new Promise<DoctorProfile>((resolve, reject) => {
    setTimeout(() => {
      const profile = DoctorData.Profile.profiles.find((p) => p.id === id);
      if (profile?.id === id) return resolve(profile);
      return reject(new UserNotFoundError(id));
    }, 300);
  });
};

import { api, request } from "../client.ts";

type GetDoctorProfileResponseBody = {
  _id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  createdAt: string;
};

// GET /users/me
export const fetchMe = () => {
  return request(async () => {
    const res = await api.get<GetDoctorProfileResponseBody>("/users/me");
    return res.data;
  });
};
