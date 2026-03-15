import { PatientRecordForm } from "@/features/PatientReport/Form/index.tsx";
import { PatientCard } from "@/features/PatientReport/index.ts";
import { Route } from "@/routes/_protected/patients/$patientId/report.tsx";
import { Grid } from "@radix-ui/themes";

export function PatientReportPage() {
  const { patientId } = Route.useParams();

  return (
    <section className="px-2 w-full min-h-full">
      <h1 className="text-foreground font-medium text-2xl">
        Rapport de Consultation
      </h1>

      <Grid columns={"5"} gapX={"4"} className="mt-4">
        <PatientRecordForm />
        <div className="col-span-2 space-y-4">
          <PatientCard id={patientId} />
        </div>
      </Grid>
    </section>
  );
}
