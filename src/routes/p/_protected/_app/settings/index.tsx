import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/p/_protected/_app/settings/")({
  component: () => <div>settings page</div>,
});
