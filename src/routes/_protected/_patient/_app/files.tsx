import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/_patient/_app/files")({
  component: () => <div>files page</div>,
});
