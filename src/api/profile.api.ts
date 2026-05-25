import type { AuthUser } from "@/types/entities.ts";
import { api, request } from "./client.ts";

type GetProfileResponseBody = AuthUser & {};

// GET /users/me
export const getMyProfile = async () => {
  return request(async () => {
    const res = await api.get<GetProfileResponseBody>("/users/me");
    return res.data;
  });
};
