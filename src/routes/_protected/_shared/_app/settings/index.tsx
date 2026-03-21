import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/_shared/_app/settings/")({
  beforeLoad: ({}) => {
    throw redirect({
      to: "/settings/account",
    });
  },
});
