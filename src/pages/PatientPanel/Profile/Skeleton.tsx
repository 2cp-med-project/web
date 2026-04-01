import {
  GeneralInformationCard,
  PatientProfileCard,
} from "@/features/PatientPanel/Profile/index.ts";

export function ProfilePageSkeleton() {
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
          <PatientProfileCard.Skeleton />
        </div>

        <div className="flex-4">
          <div className="flex gap-2">
            <div className="flex-1">
              <GeneralInformationCard.Skeleton />
            </div>
            <div className="flex-1"></div>
          </div>
        </div>

        <div className="flex-1"></div>
      </section>
    </section>
  );
}
