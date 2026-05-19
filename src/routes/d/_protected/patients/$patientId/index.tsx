import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/d/_protected/patients/$patientId/")({
  beforeLoad: ({ params }) => {
    throw redirect({
      to: "/d/patients/$patientId/profile",
      params: {
        patientId: params.patientId,
      },
    });
  },
});
