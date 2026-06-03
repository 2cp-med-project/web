import { cn } from "@/lib/utils.ts";
import type { PartialPatientDetails } from "@/types/entities.ts";
import { Eye } from "lucide-react";

type PatientClinicalInformationSectionContentProps = {
  patient: PartialPatientDetails;
};

export function PatientClinicalInformationSectionContent(
  props: PatientClinicalInformationSectionContentProps,
) {
  const showInfo =
    !!props.patient.bloodType &&
    !!props.patient.allergies &&
    !!props.patient.chronicConditions;

  const info = [
    { label: "Groupe sanguin:", value: props.patient.bloodType },
    {
      label: "Allergies:",
      value: props.patient.allergies?.length
        ? props.patient.allergies.join(", ")
        : "Aucune",
    },
    {
      label: "Maladies chroniques:",
      value: props.patient.chronicConditions?.length
        ? props.patient.chronicConditions.join(", ")
        : "Aucune",
    },
  ];

  return (
    <div className="bg-white border border-black/20 rounded-lg px-4 py-4 flex-1 shadow-sm h-full">
      <p className="font-archivo text-xl font-medium flex gap-4 items-center">
        Informations Cliniques
        <Eye className="text-gray-400" />
      </p>

      {showInfo ? (
        <div className="mt-4 flex flex-col">
          {info.map((item, idx) => (
            <div
              key={idx}
              className={cn(
                "font-archivo py-3 grid grid-cols-2 w-full items-center",
                idx !== info.length - 1 ? "border-b border-gray-200" : "",
              )}
            >
              <p className="text-muted font-medium">{item.label}</p>
              <p className="text-black/80">{item.value}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-4 flex items-center justify-center min-h-[180px]">
          <p className="font-archivo text-center text-muted max-w-xs">
            Accédez au dossier médical du patient pour consulter plus
            d'informations cliniques.
          </p>
        </div>
      )}
    </div>
  );
}
