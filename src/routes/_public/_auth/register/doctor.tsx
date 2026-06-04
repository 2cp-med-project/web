import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/_auth/register/doctor")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      Will be available soon
    </div>
  );
}
