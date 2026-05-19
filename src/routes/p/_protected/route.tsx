import { ROLE } from "@/constants/index.ts";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/p/_protected")({
  beforeLoad: ({ context }) => {
    const auth = context.auth;

    if (auth.isAuthenticating) {
      return;
    }

    if (auth.user === null) {
      throw redirect({
        to: "/login",
      });
    }

    if (auth.user.role !== ROLE.PATIENT) {
      throw redirect({
        to: "/unauthorized",
      });
    }
  },

  component: () => <Outlet />,
});
