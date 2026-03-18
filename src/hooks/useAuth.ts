import { AuthError } from "@/api/errors/AuthError.ts";
import { AuthAPI } from "@/api/index.ts";
import { useAuthContext } from "@/context/index.ts";
import type { AuthUser } from "@/types/entities.ts";
import type { MutationCallback } from "@/types/mutation.ts";
import { useMutation } from "@tanstack/react-query";

type AuthLoginMutationDTO = {
  email: string;
  password: string;
};

export const useAuth = () => {
  const authContext = useAuthContext();

  const login = () => {
    const mutation = useMutation<
      AuthUser,
      AuthError,
      AuthLoginMutationDTO & MutationCallback<AuthUser, Error>
    >({
      mutationFn: async ({ email, password }) => {
        const user = await AuthAPI.login(email, password);
        return user;
      },
      onSuccess: (user, vs) => {
        authContext.setIsAuthenticating(false);
        authContext.login(user);
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...user,
            password: vs.password,
          }),
        );
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
  };
};
