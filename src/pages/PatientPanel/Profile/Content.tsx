import {
  ClinicalInformationCard,
  EmergencyContactsSection,
  FilesCTA,
  GeneralInformationCard,
  PatientProfileCard,
  QuickActionsSection,
} from "@/features/PatientPanel/Profile/index.ts";
import type { PatientProfile } from "@/types/entities.ts";

type ProfilePageContentProps = {
  profile: PatientProfile;
};

export function ProfilePageContent({ profile }: ProfilePageContentProps) {
  return (
    <section className="px-2 space-y-6">
      <div className="flex flex-col w-full">
        <h1 className="text-foreground font-medium text-2xl">
          Profile du Patient
        </h1>
        <p className="text-muted text-sm font-normal">
          Consultez les informations, rendez-vous et activités médicales du
          patient
        </p>
      </div>

      <section className="w-full flex gap-x-8">
        <div className="flex-1">
          <PatientProfileCard.Content profile={profile} />
        </div>

        <div className="flex-5 space-y-4">
          <div className="grid grid-cols-2 gap-x-2">
            <GeneralInformationCard.Content profile={profile} />
            <ClinicalInformationCard.Content profile={profile} />
          </div>
          <FilesCTA.Content />
        </div>

        <div className="flex-2 space-y-4">
          <EmergencyContactsSection.Content
            contacts={profile.emergencyContacts}
          />
          <QuickActionsSection.Content />
        </div>
      </section>
    </section>
  );
}
