import type { PatientDetails } from "@/types/entities.ts";
import { getInitials } from "@/utils/index.ts";
import { Avatar } from "@radix-ui/themes";
import { BriefcaseMedical, Eye } from "lucide-react";

type PatientViewerContentProps = {
  patient: PatientDetails;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function PatientViewerContent(props: PatientViewerContentProps) {
  return (
    <div>
      <section className="space-y-10 w-full h-full">
        {/* top section: (avatar + fullname + email + phone_number) */}
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="p-1 rounded-full border-foreground border">
            <Avatar
              size={"8"}
              src={props.patient.avatar ?? undefined}
              fallback={getInitials(props.patient.fullname)}
              radius="full"
            />
          </div>
          <div className="flex flex-col text-center">
            <p className="font-archivo text-2xl capitalize font-medium">
              {props.patient.fullname}
            </p>
            <p className="text-muted text-sm">{props.patient.phoneNumber}</p>
            <p className="text-muted text-sm">{props.patient.email}</p>
          </div>
        </div>

        {/* bottom section: (left: general_information, right: clinical_basics) */}
        <div className="flex items-center justify-between gap-4">
          {/* General Information */}
          <div className="border border-black/20 rounded-lg px-4 py-4 flex-1 shadow-sm">
            <p className="font-archivo text-xl font-medium flex gap-4 items-center">
              Informations générales
              <Eye className="text-gray-400" />
            </p>
            <div className="mt-2 flex flex-col">
              {/* ID */}
              <div className="font-archivo py-3 grid grid-cols-2 w-full border-b-3 border-b-gray-200">
                <p className="text-muted font-medium">ID Patient:</p>
                <p className="text-black/80">{props.patient.id}</p>
              </div>

              {/* National ID */}
              <div className="font-archivo py-3 grid grid-cols-2 w-full border-b-3 border-b-gray-200">
                <p className="text-muted font-medium">CIN:</p>
                <p className="text-black/80">{props.patient.nationalId}</p>
              </div>

              <div className="font-archivo py-3 grid grid-cols-2 w-full border-b-3 border-b-gray-200">
                <p className="text-muted font-medium">Adresse:</p>
                <p className="text-black/80">{props.patient.address}</p>
              </div>
            </div>
          </div>

          {/* Clinical Basics */}
          <div className="border border-black/20 rounded-lg px-4 py-4 flex-1 shadow-sm">
            <p className="font-archivo text-xl font-medium flex gap-4 items-center">
              Données cliniques
              <BriefcaseMedical className="text-gray-400" />
            </p>
            <div className="mt-2 flex flex-col">
              {/* Blood Type */}
              <div className="font-archivo py-3 grid grid-cols-2 w-full border-b-3 border-b-gray-200">
                <p className="text-muted font-medium">Groupe sanguin:</p>
                <p className="text-black/80">{props.patient.bloodType}</p>
              </div>

              {/* Allergies */}
              <div className="font-archivo py-3 grid grid-cols-2 w-full border-b-3 border-b-gray-200">
                <p className="text-muted font-medium">Allergies:</p>
                <p className="text-black/80">
                  {props.patient.allergies.join(", ")}
                </p>
              </div>

              <div className="font-archivo py-3 grid grid-cols-2 w-full border-b-3 border-b-gray-200">
                <p className="text-muted font-medium">Conditions chroniques:</p>
                <p className="text-black/80">
                  {props.patient.chronicConditions.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <button
        type="button"
        className="group mt-8 bg-foreground text-white w-full max-w-100 mx-auto flex items-center justify-center py-2 rounded-xl transition-colors duration-200 hover:bg-foreground/90"
      >
        <p className="text-base">Envoyer une demande</p>
      </button>
    </div>
  );
}
