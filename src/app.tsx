import { useQueryClient } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { useEffect } from "react";

import { useAuthContext } from "./context/auth.tsx";
import { useAuth } from "./hooks/index.ts";
import { router } from "./router.tsx";

export const AppRouter = () => {
  const auth = useAuthContext();
  const queryClient = useQueryClient();

  const { statelessLogin } = useAuth();
  const loginMutation = statelessLogin();

  useEffect(() => {
    loginMutation.mutateAsync({
      onError: () => {
        router.navigate({
          to: "/login",
          replace: true,
        });
      },
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
