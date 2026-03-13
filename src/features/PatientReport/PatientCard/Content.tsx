import { GenderMap } from "@/constants/maps.ts";
import type { PatientDetails } from "@/types/entities.ts";
import { getInitials } from "@/utils/index.ts";
import { Avatar, Badge } from "@radix-ui/themes";

type PatientCardContentProps = {
  patient: PatientDetails;
};

export function PatientCardContent({ patient }: PatientCardContentProps) {
  return (
    <div className="bg-white w-full rounded-lg py-4 shadow-sm">
      <div className="h-full w-full border-l-2 border-l-foreground px-4 space-y-4">
        <div className="flex gap-4 items-center">
          <Avatar
            src={patient.avatar ?? undefined}
            fallback={getInitials(patient.fullname)}
            size={"7"}
            radius="large"
          />
          <div className="flex flex-col">
            <p className="text-xl font-medium">{patient.fullname}</p>
            <p className="text-muted text-base">{patient.id}</p>
            <p className="text-muted text-base">
              {GenderMap[patient.gender]}, {patient.age} ans
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2 mt-2 flex-wrap">
            <Badge color={patient.status === "active" ? "green" : "red"}>
              {patient.status === "active" ? "Actif" : "Inactif"}
            </Badge>
            <Badge color="gray">{patient.bloodType}</Badge>
            {patient.allergies.length > 0 && (
              <Badge color="yellow">
                {patient.allergies.slice(0, 3).join(", ")}
              </Badge>
            )}
          </div>

          <div className="mt-2 text-muted text-sm">
            Dernière visite:{" "}
            {new Date(patient.lastVisit).toLocaleDateString("fr-FR")}
          </div>
        </div>
      </div>
    </div>
  );
}
