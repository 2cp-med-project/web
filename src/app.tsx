import { RouterProvider } from "@tanstack/react-router";
import { useAuthContext } from "./context/auth.tsx";
import { router } from "./router.tsx";

export const AppRouter = () => {
  const auth = useAuthContext();
  return (
    <RouterProvider
      router={router}
      context={{
        auth,
      }}
    />
  );
};
