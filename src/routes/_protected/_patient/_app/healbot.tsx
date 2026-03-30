import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/_patient/_app/healbot")({
  component: () => <div>healbot page</div>,
});
