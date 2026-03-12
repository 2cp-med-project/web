import {
  PatientClinicalInformationSection,
  PatientGeneralInformationSection,
  PatientPersonalSection,
} from "@/features/PatientProfile/index.ts";
import { Grid } from "@radix-ui/themes";

export function PatientProfilePageSkeleton() {
  return (
    <section className="px-2">
      <h1 className="text-foreground font-medium text-2xl">
        Profil du Patient
      </h1>
      <Grid width={"100%"} columns={"7"} rows={"1"} className="mt-4" gapX={"3"}>
        <div className="col-span-2">
          <PatientPersonalSection.Skeleton />
        </div>
        <div className="col-span-2">
          <PatientGeneralInformationSection.Skeleton />
        </div>
        <div className="col-span-3">
          <PatientClinicalInformationSection.Skeleton />
        </div>
      </Grid>
    </section>
  );
}
