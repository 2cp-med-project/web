import { Stethoscope, UserRound } from "lucide-react";
import { Logo } from "../components/shared/Logo.tsx";
import { ROLE } from "../constants/index.ts";
import { RoleCard } from "../features/Register/RoleCard.tsx";

export function RegisterPage() {
  return (
    <div className="px-4 py-6 flex flex-col w-full max-w-4xl mx-auto h-full">
      {/* Top Section */}
      <div className="flex-2 space-y-2 flex flex-col items-center justify-start pt-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <Logo size={120} />
          <p className="text-foreground text-2xl mr-6">Healio</p>
        </div>
        <p className="text-lg font-light capitalize text-foreground font-inter">
          Gérez et partagez vos dossiers médicaux en toute sécurité.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="flex-3 flex items-center justify-between gap-4">
        <RoleCard
          icon={Stethoscope}
          name="Docteur"
          desc="Gérez les patients et les dossiers médicaux."
          role={ROLE.DOCTOR}
        />
        <RoleCard
          icon={UserRound}
          name="Patient"
          desc="Accédez à vos dossiers de santé et partagez-les."
          role={ROLE.PATIENT}
        />
      </div>
    </div>
  );
}
