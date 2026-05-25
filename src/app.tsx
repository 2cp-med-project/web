import { useQueryClient } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { useEffect } from "react";

import { useAuthContext } from "./context/auth.tsx";
import { useAuth } from "./hooks/index.ts";
import { router } from "./router.tsx";

import { rfidService } from "./services/rfid.ts";

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

  useEffect(() => {
    const bootstrapRFID = async () => {
      try {
        await rfidService.connect();
        console.log("RFID service started.");
        rfidService.subscribe((tag) => {
          console.log("RFID tag:", tag);
        });
      } catch (error) {
        console.error("Failed to initialize RFID service:", error);
      }
    };

    bootstrapRFID();

    return () => {
      rfidService.disconnect();
    };
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
