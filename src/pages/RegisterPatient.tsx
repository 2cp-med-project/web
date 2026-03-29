import { Logo } from "@/components/shared/Logo.tsx";
import { VerticalLinearStepper } from "@/components/VerticalLinearStepper.tsx";
import { RegisterPatientForm } from "@/features/shared/Register";
import { useRegisterPatientStepStore } from "@/features/shared/Register/PatientRegistrationForm/store";
import { Card } from "@radix-ui/themes";

const STEPS: { label: string; desc: string }[] = [
  {
    label: "Identité",
    desc: "Entrez vos informations personnelles de base.",
  },
  {
    label: "Date et lieu de naissance",
    desc: "Fournissez votre date et lieu de naissance.",
  },
  {
    label: "Profil",
    desc: "Complétez les informations relatives à votre profil.",
  },
  {
    label: "Contact",
    desc: "Indiquez votre numéro de téléphone et votre adresse e-mail.",
  },
  {
    label: "Sécurité",
    desc: "Créez un mot de passe et fournissez votre numéro de carte nationale.",
  },
  {
    label: "Vérification",
    desc: "Vérifiez votre compte via le code envoyé par e-mail ou par SMS.",
  },
];

export function RegisterPatientPage() {
  const { step } = useRegisterPatientStepStore();

  return (
    <div className="space-y-8 px-4 py-6 flex flex-col w-full max-w-7xl mx-auto h-full">
      <div className="flex flex-col items-center justify-center gap-2">
        <Logo size={120} />
        <p className="text-foreground text-2xl mr-6">Healio</p>
      </div>
      <div className="flex items-center justify-between">
        <VerticalLinearStepper current={step - 1} steps={STEPS} />
        <Card className="w-full max-w-3xl shadow-xl">
          <RegisterPatientForm />
        </Card>
      </div>
    </div>
  );
}
