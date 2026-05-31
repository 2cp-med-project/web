import {
  AuthError,
  InvalidCredentialsError,
  InvalidRefreshTokenError,
} from "@/api/errors/AuthError.ts";
import { FetchProfileError } from "@/api/errors/FetchProfileError.ts";
import { AuthAPI, ProfileAPI } from "@/api/index.ts";
import { apiRequestHadError } from "@/api/types.ts";
import { ROLE } from "@/constants/index.ts";
import { storage } from "@/constants/storage.ts";
import { useAuthContext } from "@/context/index.ts";
import type { AuthUser } from "@/types/entities.ts";
import type { MutationCallback } from "@/types/mutation.ts";
import { getAgeFromISODateString } from "@/utils/index.ts";
import { useMutation } from "@tanstack/react-query";

type AuthLoginMutationDTO = {
  phoneNumber: string;
  password: string;
};

export const useAuth = () => {
  const authContext = useAuthContext();

  const statelessLogin = () => {
    const mutation = useMutation<
      {
        user: AuthUser;
        accessToken: string;
        refreshToken: string;
      },
      AuthError,
      MutationCallback<AuthUser, Error>
    >({
      mutationFn: async () => {
        const refreshToken = localStorage.getItem(storage.keys.refreshToken);

        let accessToken = localStorage.getItem(storage.keys.accessToken);
        if (accessToken === null) {
          if (refreshToken === null)
            throw new AuthError("No tokens found", 401);

          const refreshTokensRes = await AuthAPI.refreshTokens(refreshToken);
          if (apiRequestHadError(refreshTokensRes)) {
            throw new InvalidRefreshTokenError();
          }

          accessToken = refreshTokensRes.data.accessToken;
        }

        const fetchUserRes = await ProfileAPI.getMyProfile();
        if (apiRequestHadError(fetchUserRes)) {
          throw new FetchProfileError();
        }

        const data = fetchUserRes.data;

        const user = {
          id: data._id,
          fullname: data.firstName + " " + data.lastName,
          address: data.address,
          age: getAgeFromISODateString(data.dateOfBirth),
          avatar: null,
          email: data.email,
          gender: data.gender,
          nationalId: null,
          phoneNumber: data.phone,
          role: ROLE.PATIENT,
        } as AuthUser;

        const value = {
          user,
          accessToken: accessToken as string,
          refreshToken: refreshToken as string,
        };

        return value;
      },

      onSuccess: (value, vs) => {
        localStorage.setItem(storage.keys.accessToken, value.accessToken);
        localStorage.setItem(storage.keys.refreshToken, value.refreshToken);

        authContext.setIsAuthenticating(false);
        authContext.login(value.user);

        vs.onSuccess?.(value.user);
      },

      onMutate: () => {
        authContext.setIsAuthenticating(true);
      },

      onError: (error, vs) => {
        vs.onError?.(error);
      },
    });

    return mutation;
  };

  const login = () => {
    const mutation = useMutation<
      AuthUser,
      AuthError,
      AuthLoginMutationDTO & MutationCallback<AuthUser, Error>
    >({
      mutationFn: async ({ phoneNumber, password }) => {
        const loginRes = await AuthAPI.login(phoneNumber, password);
        if (apiRequestHadError(loginRes)) {
          throw new InvalidCredentialsError();
        }

        localStorage.setItem(
          storage.keys.refreshToken,
          loginRes.data.refreshToken,
        );

        const refreshTokensRes = await AuthAPI.refreshTokens(
          loginRes.data.refreshToken,
        );
        if (apiRequestHadError(refreshTokensRes)) {
          throw new InvalidRefreshTokenError();
        }

        localStorage.setItem(
          storage.keys.accessToken,
          refreshTokensRes.data.accessToken,
        );

        const fetchUserRes = await ProfileAPI.getMyProfile();
        if (apiRequestHadError(fetchUserRes)) {
          throw new FetchProfileError();
        }

        const data = fetchUserRes.data;

        const user = {
          id: data._id,
          fullname: data.firstName + " " + data.lastName,
          address: data.address,
          age: getAgeFromISODateString(data.dateOfBirth),
          avatar: null,
          email: data.email,
          gender: data.gender,
          nationalId: null,
          phoneNumber: data.phone,
          role: ROLE.PATIENT,
        } as AuthUser;

        return user;
      },
      onSuccess: (user, vs) => {
        authContext.setIsAuthenticating(false);
        authContext.login(user);
        vs.onSuccess?.(user);
      },
      onError: (e, vs) => {
        authContext.setIsAuthenticating(false);
        vs.onError?.(e);
      },
      onMutate: () => {
        authContext.setIsAuthenticating(true);
      },
    });

    return mutation;
  };

  return {
    login,
    statelessLogin,
  };
};
