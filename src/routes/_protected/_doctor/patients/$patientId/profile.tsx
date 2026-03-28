import { PatientNotFoundError } from "@/api/errors/PatientNotFoundError.ts";
import { DoctorAPI } from "@/api/index.ts";
import { DoctorPanelPages } from "@/pages/index.ts";
import { createFileRoute } from "@tanstack/react-router";

const Page = DoctorPanelPages.PatientProfilePage;

export const Route = createFileRoute(
  "/_protected/_doctor/patients/$patientId/profile",
)({
  loader: async ({ params }) => {
    const data = await DoctorAPI.Patients.fetchOne(params.patientId);
    if (!data) throw new PatientNotFoundError(params.patientId);
    return {
      patient: data,
    };
  },
  component: () => <Page.Content />,
  pendingComponent: () => <Page.Skeleton />,
  errorComponent: ({ error, reset }) => {
    if (error instanceof PatientNotFoundError) {
      return <Page.Error.NotFound />;
    }
    return <Page.Error.Generic error={error} reset={reset} />;
  },
});
