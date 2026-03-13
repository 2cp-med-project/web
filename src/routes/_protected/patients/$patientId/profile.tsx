import { PatientNotFoundError } from "@/api/errors/PatientNotFoundError.ts";
import { PatientsAPI } from "@/api/index.ts";
import { PatientProfilePage } from "@/pages/index.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/patients/$patientId/profile")(
  {
    loader: async ({ params }) => {
      const data = await PatientsAPI.fetchOne(params.patientId);
      if (!data) throw new PatientNotFoundError(params.patientId);
      return {
        patient: data,
      };
    },
    component: () => <PatientProfilePage.Content />,
    pendingComponent: () => <PatientProfilePage.Skeleton />,
    errorComponent: ({ error, reset }) => {
      if (error instanceof PatientNotFoundError) {
        return <PatientProfilePage.Error.NotFound />;
      }
      return <PatientProfilePage.Error.Generic error={error} reset={reset} />;
    },
  },
);
