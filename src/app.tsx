import { RouterProvider } from "@tanstack/react-router";
import { useEffect } from "react";
import { AuthUI } from "./constants/ui/index.ts";
import { useAuthContext } from "./context/auth.tsx";
import { useAuth } from "./hooks/useAuth.ts";
import { router } from "./router.tsx";

export const AppRouter = () => {
  const auth = useAuthContext();

  const { login } = useAuth();
  const loginMutation = login();

  // try initial login here.
  useEffect(() => {
    loginMutation.mutateAsync({
      email: AuthUI.user.email,
      password: AuthUI.user.password,
      onSuccess: () => {
        // toast here : welcome back.
      },
    });
  }, []);

  return (
    <RouterProvider
      router={router}
      context={{
        auth,
      }}
    />
  );
};
