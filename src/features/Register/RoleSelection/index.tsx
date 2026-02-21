import { Stethoscope, UserRound } from "lucide-react";
import { Logo } from "../../../components/shared/logo.tsx";
import { RoleCard } from "./RoleCard.tsx";

export function RoleSelection() {
  return (
    <div className="px-4 py-6 flex flex-col w-full max-w-6xl mx-auto h-full">
      {/* Top Section */}
      <div className="flex-1 space-y-4 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <Logo w={160} h={160} />
          <p className="text-foreground text-3xl mr-6">Healio</p>
        </div>
        <p className="text-lg font-light capitalize text-foreground font-inter">
          Gérez et partagez vos dossiers médicaux en toute sécurité.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="flex-1 flex items-center justify-between gap-4">
        <RoleCard
          icon={Stethoscope}
          name="Docteur"
          desc="Gérez les patients et les dossiers médicaux."
        />
        <RoleCard
          icon={UserRound}
          name="Patient"
          desc="Accédez à vos dossiers de santé et partagez-les."
        />
      </div>
    </div>
  );
}
