import type { PatientProfile } from "@/types/entities.ts";
import { Badge } from "@radix-ui/themes";
import { Hand } from "lucide-react";

type ClinicalInformationCardContentProps = {
  profile: PatientProfile;
};

export function ClinicalInformationCardContent({
  profile,
}: ClinicalInformationCardContentProps) {
  return (
    <div className="w-full bg-white shadow-sm rounded-lg p-5 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Hand size={20} className="text-foreground" />
        <h2 className="text-black/80 font-semibold text-base">
          Informations cliniques
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-y-4 gap-x-6">
        <div className="flex flex-col gap-1">
          <span className="text-muted text-xs font-medium uppercase">
            Groupe sanguin
          </span>
          <span className="text-black font-medium">{profile.bloodType}</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-muted text-xs font-medium uppercase">
            Allergies
          </span>
          <span className="text-black font-medium">
            {profile.allergies.join(", ")}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-muted text-xs font-medium uppercase">
          Maladies chroniques
        </span>
        <div className="flex items-center gap-2 text-black font-medium">
          {profile.chronicConditions.length === 0 && (
            <Badge color="gray">Rien</Badge>
          )}

          {profile.chronicConditions.length > 0 &&
            profile.chronicConditions.map((item) => (
              <Badge color="green">{item}</Badge>
            ))}
        </div>
      </div>
    </div>
  );
}
