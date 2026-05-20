import { useQueryClient } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { useEffect } from "react";

import { useAuthContext } from "./context/auth.tsx";
import { useAuth } from "./hooks/index.ts";
import { router } from "./router.tsx";

import { rfidService } from "./services/rfid.ts";

import type { AuthUser } from "./types/entities.ts";

export const AppRouter = () => {
  const auth = useAuthContext();

  const queryClient = useQueryClient();

  const { login } = useAuth();

  const loginMutation = login();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user === null) {
      return;
    }

    const json = JSON.parse(user) as AuthUser & {
      password: string;
    };

    loginMutation.mutateAsync({
      email: json.email,
      password: json.password,
      onSuccess: () => {},
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
