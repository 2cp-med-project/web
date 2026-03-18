import { usePatients } from "@/hooks/usePatients.ts";
import { Dialog } from "@radix-ui/themes";
import { X } from "lucide-react";
import { usePatientsContext } from "../context.tsx";
import { PatientViewerContent } from "./Content.tsx";
import { PatientViewerError } from "./Error.tsx";
import { PatientViewerSkeleton } from "./Skeleton.tsx";

export function PatientViewer() {
  const { onViewPatientId, clearView } = usePatientsContext();
  const { fetchOne } = usePatients();

  const open = onViewPatientId !== null;

  const { patient, isLoading, isError, refetch } = fetchOne(onViewPatientId);

  const handleOpenChange = (openState: boolean) => {
    if (!openState) clearView();
  };

  if (!open) return null;

  const renderContent = () => {
    if (isError) return <PatientViewerError onRetry={refetch} />;
    if (isLoading || !patient) return <PatientViewerSkeleton />;
    return (
      <PatientViewerContent
        patient={patient}
        open={open}
        onOpenChange={handleOpenChange}
      />
    );
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Content size="3" className="min-w-220 relative py-4">
        <Dialog.Close className="absolute top-4 right-4 size-8 p-1 rounded-full bg-white hover:bg-gray-300 transition-colors cursor-pointer">
          <X className="text-black/70" />
        </Dialog.Close>
        {renderContent()}
      </Dialog.Content>
    </Dialog.Root>
  );
}
