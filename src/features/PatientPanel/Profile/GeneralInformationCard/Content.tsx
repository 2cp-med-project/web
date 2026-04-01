import { GenderMap } from "@/constants/maps.ts";
import type { PatientProfile } from "@/types/entities.ts";
import { Inbox } from "lucide-react";

type GeneralInformationCardContentProps = {
  profile: PatientProfile;
};

export function GeneralInformationCardContent({
  profile,
}: GeneralInformationCardContentProps) {
  return (
    <div className="w-full bg-white shadow-sm rounded-lg p-5 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Inbox size={20} className="text-foreground" />
        <h2 className="text-black/80 font-semibold text-base">
          Informations générales
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-y-4 gap-x-6">
        <div className="flex flex-col gap-1">
          <span className="text-muted text-xs font-medium uppercase">Age</span>
          <span className="text-black font-medium">{profile.age}</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-muted text-xs font-medium uppercase">Sexe</span>
          <span className="text-black font-medium">
            {GenderMap[profile.gender]}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-muted text-xs font-medium uppercase">
            ID National
          </span>
          <span className="text-black font-medium">{profile.nationalId}</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-muted text-xs font-medium uppercase">
            Langue
          </span>
          <span className="text-black font-medium">Français</span>
        </div>
      </div>
    </div>
  );
}
