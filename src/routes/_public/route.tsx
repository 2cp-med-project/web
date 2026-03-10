import { PublicRoutesLayout } from "@/layouts/index.ts";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_public")({
  beforeLoad: ({ context }) => {
    if (context.auth.user !== null && !context.auth.isAuthenticating) {
      throw redirect({
        to: "/",
      });
    }
  },
  component: () => <PublicRoutesLayout />,
});
