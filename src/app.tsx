import { useQueryClient } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { useEffect } from "react";
import { useAuthContext } from "./context/auth.tsx";
import { useAuth } from "./hooks/index.ts";
import { router } from "./router.tsx";
import type { AuthUser } from "./types/entities.ts";

export const AppRouter = () => {
  const auth = useAuthContext();
  const queryClient = useQueryClient();

  const { login } = useAuth();
  const loginMutation = login();

  // try initial login here.
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user === null) return;

    const json = JSON.parse(user) as AuthUser & {
      password: string;
    };

    loginMutation.mutateAsync({
      email: json.email,
      password: json.password,
      onSuccess: () => {},
    });
  }, []);

  return (
    <RouterProvider
      router={router}
      context={{
        auth,
        qc: queryClient,
      }}
    />
  );
};
