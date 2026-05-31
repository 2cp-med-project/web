import type { Gender } from "@/types/index.ts";
import { api, request } from "./client.ts";

type GetProfileResponseBody = {
  _id: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  dateOfBirth: string;
  placeOfBirth: string;
  address: string;
  email: string;
  phone: string;
};

// GET /users/me
export const getMyProfile = async () => {
  return request(async () => {
    const res = await api.get<GetProfileResponseBody>("/users/me");
    return res.data;
  });
};
