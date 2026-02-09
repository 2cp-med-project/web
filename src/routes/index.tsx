import { createFileRoute } from "@tanstack/react-router";

const ROUTE_KEY = "/";

export const Route = createFileRoute(ROUTE_KEY)({
  component: () => <div>Hello World on Index /</div>,
});
