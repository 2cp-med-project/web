import {
  PatientClinicalInformationSection,
  PatientGeneralInformationSection,
  PatientPersonalSection,
} from "@/features/DoctorPanel/PatientProfile/index.ts";
import type { PartialPatientDetails } from "@/types/entities.ts";
import { Grid } from "@radix-ui/themes";

type PatientProfilePageContentProps = {
  patient: PartialPatientDetails;
};

export function PatientProfilePageContent({
  patient,
}: PatientProfilePageContentProps) {
  const hasAccess =
    !!patient.bloodType && !!patient.allergies && !!patient.chronicConditions;

  return (
    <section className="px-2">
      <h1 className="text-foreground font-medium text-2xl">
        Profil du Patient
      </h1>
      <Grid width={"100%"} columns={"7"} rows={"1"} className="mt-4" gapX={"3"}>
        <div className="col-span-2">
          <PatientPersonalSection.Content
            patient={patient}
            showRequestAccessButton={!hasAccess}
          />
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
