import type { Role } from "@/types/index.ts";
import { api, request } from "./client.ts";

// const auth = api.create({
//   baseURL: "/auth",
// });

export type LoginResponseBody = {
  userId: string;
  refreshToken: string;
};

// POST /auth/login
export const login = async (phone: string, password: string, role: Role) => {
  return request(async () => {
    const res = await api.post<LoginResponseBody>("/auth/login", {
      phone,
      password,
      role,
    });
    return res.data;
  });
};

export type RefreshTokensResponseBody = {
  accessToken: string;
  refreshToken: string;
};

export const refreshTokens = async (refreshToken: string) => {
  return request(async () => {
    const res = await api.post<RefreshTokensResponseBody>(
      "/auth/refresh-token",
      {
        refreshToken,
      },
    );
    return res.data;
  });
};
