import { GenderMap } from "@/constants/maps.ts";
import { cn } from "@/lib/utils.ts";
import type { PartialPatientDetails } from "@/types/entities.ts";
import { Eye } from "lucide-react";

type PatientGeneralInformationSectionContentProps = {
  patient: PartialPatientDetails;
};

export function PatientGeneralInformationSectionContent(
  props: PatientGeneralInformationSectionContentProps,
) {
  const info = [
    { label: "ID Patient:", value: props.patient.id },
    { label: "CIN:", value: props.patient.nationalId ?? "-" },
    { label: "Adresse:", value: props.patient.address ?? "-" },
    { label: "Âge:", value: `${props.patient.age} ans` },
    { label: "Sexe:", value: GenderMap[props.patient.gender] },
  ];

  return (
    <div className="bg-white border border-black/20 rounded-lg px-4 py-4 flex-1 shadow-sm h-full">
      <p className="font-archivo text-xl font-medium flex gap-4 items-center">
        Informations Générales
        <Eye className="text-gray-400" />
      </p>

      <div className="mt-4 flex flex-col">
        {info.map((item, idx) => (
          <div
            key={idx}
            className={cn(
              "font-archivo py-3 grid grid-cols-3 w-full items-center",
              idx !== info.length - 1 ? "border-b border-gray-200" : "",
            )}
          >
            <p className="text-muted font-medium col-span-1">{item.label}</p>
            <p className="text-black/80 col-span-2">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
