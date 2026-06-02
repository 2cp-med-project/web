import {
  PatientClinicalInformationSection,
  PatientGeneralInformationSection,
  PatientPersonalSection,
} from "@/features/DoctorPanel/PatientProfile/index.ts";
import { Route } from "@/routes/_protected/d/_rfid/patients/$patientId/profile";
import { Grid } from "@radix-ui/themes";

export function PatientProfilePageContent() {
  const { patient } = Route.useLoaderData();
  return (
    <section className="px-2">
      <h1 className="text-foreground font-medium text-2xl">
        Profil du Patient
      </h1>
      <Grid width={"100%"} columns={"7"} rows={"1"} className="mt-4" gapX={"3"}>
        <div className="col-span-2">
          <PatientPersonalSection.Content patient={patient} />
        </div>
        <div className="col-span-2">
          <PatientGeneralInformationSection.Content
            patient={patient}
          ></PatientGeneralInformationSection.Content>
        </div>
        <div className="col-span-3">
          <PatientClinicalInformationSection.Content
            patient={patient}
          ></PatientClinicalInformationSection.Content>
        </div>
      </Grid>
    </section>
  );
}
