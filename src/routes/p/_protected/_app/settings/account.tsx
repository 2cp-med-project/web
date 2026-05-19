import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/p/_protected/_app/settings/account")({
  component: () => <div>patient settings account page</div>,
});
