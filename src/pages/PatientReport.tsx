import { PatientCard, Stepper } from "@/features/PatientReport/index.ts";
import { Route } from "@/routes/_protected/patients/$patientId/report.tsx";
import { Grid } from "@radix-ui/themes";
import { useState } from "react";

const STEPS = [
  {
    label: "Consultation",
  },
  {
    label: "Symptômes",
  },
  {
    label: "Signes Vitaux",
  },
  {
    label: "Évaluation",
  },
  {
    label: "Traitement",
  },
];

export function PatientReportPage() {
  const { patientId } = Route.useParams();
  const [current, _] = useState(0);

  return (
    <section className="px-2 w-full h-full">
      <h1 className="text-foreground font-medium text-2xl">
        Rapport de Consultation
      </h1>

      <Grid columns={"5"} gapX={"4"} className="mt-4">
        <div className="col-span-3">
          <Stepper steps={STEPS} current={current} />
        </div>
        <div className="col-span-2 space-y-4">
          <PatientCard id={patientId} />
        </div>
      </Grid>
    </section>
  );
}
