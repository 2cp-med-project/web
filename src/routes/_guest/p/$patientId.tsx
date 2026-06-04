import {
  PatientClinicalInformationSection,
  PatientGeneralInformationSection,
  PatientPersonalSection,
} from "@/features/DoctorPanel/PatientProfile/index.ts";
import type { PatientDetails } from "@/types/entities.ts";
import { Grid } from "@radix-ui/themes";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_guest/p/$patientId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { patientId } = Route.useParams();

  const patient: PatientDetails = {
    id: "69e8c733178842929f0521ae",
    fullname: "Djaoued Bouhadda",
    email: "patient@gmail.com",
    phoneNumber: "0698690027",
    avatar: null,
    address: null,
    nationalId: null,
    age: 21,
    gender: "male",

    status: "active",
    lastVisit: new Date(),

    bloodType: "O+",
    allergies: [],
    chronicConditions: [],
  };

  if (patientId !== patient.id) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        Patient not found
      </div>
    );
  }

  return (
    <section className="px-2">
      <h1 className="text-foreground font-medium text-2xl">
        Profil du Patient
      </h1>
      <Grid width={"100%"} columns={"7"} rows={"1"} className="mt-4" gapX={"3"}>
        <div className="col-span-2">
          <PatientPersonalSection.Content
            patient={patient}
            showRequestAccessButton={false}
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
