import { usePatients } from "@/hooks/doctor.hooks/usePatients.ts";
import type { Patient } from "@/types/entities.ts";
import { getInitials } from "@/utils/index.ts";
import { Avatar } from "@radix-ui/themes";
import { Link, Loader2 } from "lucide-react";
import { toast } from "sonner";

type PatientPersonalSectionContentProps = {
  patient: Patient;
};

export function PatientPersonalSectionContent(
  props: PatientPersonalSectionContentProps,
) {
  const { requestAccess } = usePatients();
  const requestAccessMutation = requestAccess();

  const handleAccessRequest = async () => {
    await requestAccessMutation.mutateAsync({
      patientId: props.patient.id,
      onSuccess: () => {
        toast.success("Request sent to patient");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <div className="border border-black/20 rounded-lg bg-white py-8 shadow-sm">
      <div className="space-y-1 flex flex-col items-center justify-center">
        <div className="p-1 rounded-full w-fit border-foreground border">
          <Avatar
            size={"9"}
            src={props.patient.avatar ?? undefined}
            fallback={getInitials(props.patient.fullname)}
            radius="full"
          />
        </div>
        <p className="font-medium text-xl">{props.patient.fullname}</p>
      </div>

      <div className="text-center mt-8">
        <p className="text-muted text-base">{props.patient.phoneNumber}</p>
        <p className="text-muted text-base">{props.patient.email}</p>
      </div>

      <div className="mt-8 px-6">
        <p className="text-center text-sm text-muted">
          Besoin d&apos;acc&eacute;der aux fichiers du patient ?
        </p>
        <button
          type="button"
          className="group mt-3 bg-foreground text-white w-full flex items-center justify-center gap-2 py-2 rounded-xl transition-colors duration-200 hover:bg-foreground/90"
          onClick={handleAccessRequest}
          disabled={requestAccessMutation.isPending}
        >
          {requestAccessMutation.isPending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Link className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
          )}
          <span className="text-base font-medium">
            Demander l&apos;acc&egrave;s au dossier
          </span>
        </button>
      </div>
    </div>
  );
}
