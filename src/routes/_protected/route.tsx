import { ProtectedRoutesLayout } from "@/layouts";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected")({
  beforeLoad: ({ context }) => {
    if (context.auth.user === null && !context.auth.isAuthenticating) {
      throw redirect({
        to: "/login",
      });
    }
  },
  component: () => <ProtectedRoutesLayout />,
});
