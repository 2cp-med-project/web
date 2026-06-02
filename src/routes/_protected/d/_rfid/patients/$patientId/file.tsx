import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/d/_rfid/patients/$patientId/file")({
  beforeLoad: ({ params }) => {
    throw redirect({
      to: "/d/patients/$patientId/files",
      params: {
        patientId: params.patientId,
      },
    });
  },
});
