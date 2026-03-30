import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/_patient/_app/profile")({
  component: () => <div>profile page</div>,
});
