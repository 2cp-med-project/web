import { storage } from "@/constants/storage.ts";
import axios from "axios";
import type { RefreshTokensResponseBody } from "./auth.api.ts";
import type { ApiResponse } from "./types.ts";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(storage.keys.accessToken);
  if (token === null) return config;

  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const req = error.config;
    const res = error.response;

    if (req._retry) return Promise.reject(error);
    if (res?.status !== 403) return Promise.reject(error);

    const refreshToken = localStorage.getItem(storage.keys.refreshToken);
    if (refreshToken === null) return Promise.reject(error);

    req._retry = true;
    try {
      const res = await axios.post<RefreshTokensResponseBody>(
        "/api/auth/refresh-token",
        {
          refreshToken,
        },
      );
      const data = res.data;

      localStorage.setItem(storage.keys.accessToken, data.accessToken);
      localStorage.setItem(storage.keys.refreshToken, data.refreshToken);

      req.headers.Authorization = `Bearer ${data.accessToken}`;
      return api(req);
    } catch (err) {
      console.log(err);
      return Promise.reject(error);
    }
  },
);

export const request = async <T>(call: () => Promise<T>) => {
  try {
    const data = await call();
    return {
      data,
      error: null,
    } as ApiResponse<T>;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log("message:", err.message);
      console.log("code:", err.code);
      console.log("status:", err.response?.status);
      console.log("data:", err.response?.data);
      console.log("headers:", err.response?.headers);
    } else {
      console.log("unknown err:", err);
    }

    return {
      data: null,
      error: err,
    } as ApiResponse<T>;
  }
};
