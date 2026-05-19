import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/p/_app/settings/account")({
  component: () => <div>patient settings account page</div>,
});
