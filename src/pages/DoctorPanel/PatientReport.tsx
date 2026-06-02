import {
  PatientCard,
  PatientRecordForm,
} from "@/features/DoctorPanel/PatientReport/index.ts";
import { Route } from "@/routes/_protected/d/_rfid/patients/$patientId/report";
import { Grid } from "@radix-ui/themes";

export function PatientReportPage() {
  const { patientId } = Route.useParams();

  return (
    <section className="px-2 w-full min-h-full">
      <h1 className="text-foreground font-medium text-2xl">
        Rapport de Consultation
      </h1>

      <Grid columns={"5"} gapX={"4"} className="mt-4">
        <div className="col-span-3 space-y-4">
          <PatientRecordForm />
        </div>
        <div className="col-span-2 space-y-4">
          <PatientCard id={patientId} />
        </div>
      </Grid>
    </section>
  );
}
