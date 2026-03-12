import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/patients/$patientId/")({
  beforeLoad: ({ params }) => {
    throw redirect({
      to: "/patients/$patientId/profile",
      params: {
        patientId: params.patientId,
      },
    });
  },
});
