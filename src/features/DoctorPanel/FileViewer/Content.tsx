import { usePatients } from "@/hooks/doctor.hooks/usePatients.ts";
import type { PatientFileRecordWithDoctor } from "@/types/entities.ts";
import { formatDate } from "@/utils/index.ts";
import {
  CircleCheck,
  Download,
  EllipsisVertical,
  Loader2,
  NotebookText,
  ScanSearch,
  Sparkles,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import type { PropsWithChildren, ReactNode } from "react";
import { useState } from "react";
import { toast } from "sonner";

function ReportSection({
  title,
  content,
}: {
  title: string;
  content?: string;
}) {
  if (!content) return null;

  return (
    <section>
      <h3 className="text-xl font-bold text-[#1d2f2a]">{title}</h3>
      <p className="mt-2 whitespace-pre-wrap text-lg leading-relaxed text-[#384b46]">
        {content}
      </p>
    </section>
  );
}

type FileViewerContentProps = {
  file: PatientFileRecordWithDoctor;
};

function ViewerSidebarCard({
  title,
  icon,
  children,
}: PropsWithChildren<{
  title: string;
  icon: ReactNode;
}>) {
  return (
    <section className="rounded-[24px] border border-[#dcefe9] bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2 border-b border-[#edf5f2] pb-3">
        <span className="text-[#5bc4ab]">{icon}</span>
        <p className="text-sm font-semibold uppercase text-[#35584f]">
          {title}
        </p>
      </div>
      <div className="pt-4">{children}</div>
    </section>
  );
}

export function FileViewerContent({ file }: FileViewerContentProps) {
  const [summary, setSummary] = useState<string | null>(null);

  const { generateSummary } = usePatients();
  const generateSummaryMutation = generateSummary();

  const handleGenerateSummary = async () => {
    await generateSummaryMutation.mutateAsync({
      id: file.id,
      onSuccess: ({ resume }) => {
        setSummary(resume);
        toast.success("Résumé généré avec succès.");
      },
      onError: (error) => {
        toast.error(
          error instanceof Error
            ? error.message
            : "Impossible de générer le résumé.",
        );
      },
    });
  };

  const summaryError =
    generateSummaryMutation.error instanceof Error
      ? generateSummaryMutation.error.message
      : null;

  return (
    <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
      <section className="overflow-hidden rounded-[32px] border border-[#dcefe9] bg-white">
        <div className="flex items-center justify-between border-b border-[#dcefe9] bg-white px-4 py-3 text-[#56766d]">
          <div className="flex items-center gap-3">
            <ScanSearch size={16} />
            <span className="text-sm font-medium">Preview</span>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <button
              type="button"
              className="transition-colors hover:text-[#36b79c]"
            >
              <ZoomOut size={16} />
            </button>
            <span className="font-medium">100%</span>
            <button
              type="button"
              className="transition-colors hover:text-[#36b79c]"
            >
              <ZoomIn size={16} />
            </button>
            <button
              type="button"
              className="transition-colors hover:text-[#36b79c]"
            >
              <EllipsisVertical size={16} />
            </button>
          </div>
        </div>

        <div className="grid min-h-[720px] bg-[#eef7f4] md:grid-cols-1">
          <div className="overflow-auto p-5">
            <div className="mx-auto w-full max-w-[720px] rounded-[28px] border border-[#dcefe9] bg-white px-8 py-8 shadow-[0_20px_60px_rgba(43,99,83,0.08)]">
              <div className="flex items-start justify-between gap-4 border-b border-[#ebf5f2] pb-6">
                <div>
                  <h2 className="mt-3 text-2xl font-semibold text-[#23453c]">
                    {file.reason}
                  </h2>
                  <p className="mt-2 text-sm text-[#8aa09a]">
                    Ajoute le {file.modifiedAt} par{" "}
                    {file.doctor?.fullname ?? file.doctorId}
                  </p>
                </div>

                <div className="rounded-full bg-[#effaf6] px-4 py-2 text-sm font-medium text-[#36b79c]">
                  Dossier actif
                </div>
              </div>

              <div className="mt-8 space-y-8">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-[#f7fcfa] p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#92afa7]">
                      Médecin
                    </p>
                    <p className="mt-3 text-lg font-semibold text-[#23453c]">
                      {file.doctor?.fullname ?? file.doctorId}
                    </p>
                    <p className="mt-1 text-sm text-[#8aa09a']">
                      {file.doctor?.email}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7fcfa] p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#92afa7]">
                      Dernière mise à jour
                    </p>
                    <p className="mt-3 text-lg font-semibold text-[#23453c]">
                      {formatDate(file.modifiedAt)}
                    </p>
                    <p className="mt-1 text-sm text-[#8aa09a]">
                      Référence: {file.id}
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <ReportSection
                    title="Motif de consultation"
                    content={file.reason}
                  />

                  <ReportSection title="Symptômes" content={file.symptoms} />

                  <ReportSection title="Diagnostic" content={file.diagnosis} />

                  <ReportSection
                    title="Traitement"
                    content={file.treatmentDetails}
                  />

                  <ReportSection
                    title="Notes du médecin"
                    content={file.notes}
                  />
                </div>

                <div className="border-t border-[#dcefe9] pt-8">
                  <h3 className="text-center text-3xl font-bold uppercase text-[#1d2f2a]">
                    Signes vitaux
                  </h3>

                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl bg-[#f7fcfa] p-5">
                      <p className="font-semibold text-[#35584f]">
                        Tension artérielle
                      </p>
                      <p className="mt-2 text-xl font-bold text-[#23453c]">
                        {file.bloodPressure || "-"}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#f7fcfa] p-5">
                      <p className="font-semibold text-[#35584f]">
                        Fréquence cardiaque
                      </p>
                      <p className="mt-2 text-xl font-bold text-[#23453c]">
                        {file.heartRate ? `${file.heartRate} bpm` : "-"}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#f7fcfa] p-5">
                      <p className="font-semibold text-[#35584f]">
                        Température
                      </p>
                      <p className="mt-2 text-xl font-bold text-[#23453c]">
                        {file.temperature ? `${file.temperature} °C` : "-"}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#f7fcfa] p-5">
                      <p className="font-semibold text-[#35584f]">
                        Fréquence respiratoire
                      </p>
                      <p className="mt-2 text-xl font-bold text-[#23453c]">
                        {file.respiratoryRate
                          ? `${file.respiratoryRate} rpm`
                          : "-"}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#f7fcfa] p-5">
                      <p className="font-semibold text-[#35584f]">Poids</p>
                      <p className="mt-2 text-xl font-bold text-[#23453c]">
                        {file.weight ? `${file.weight} kg` : "-"}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#f7fcfa] p-5">
                      <p className="font-semibold text-[#35584f]">
                        État général
                      </p>
                      <p className="mt-2 text-xl font-bold text-[#23453c]">
                        {file.generalState}
                      </p>
                    </div>
                  </div>
                </div>

                <ReportSection
                  title="Examen clinique"
                  content={file.systemExam}
                />

                <ReportSection
                  title="Actions complémentaires"
                  content={file.additionalActions}
                />

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-[#f7fcfa] p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#92afa7]">
                      Type de visite
                    </p>

                    <p className="mt-3 text-lg font-semibold text-[#23453c]">
                      {file.visitType}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7fcfa] p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#92afa7]">
                      Gravité
                    </p>

                    <p className="mt-3 text-lg font-semibold text-[#23453c]">
                      {file.gravity}
                    </p>
                  </div>
                </div>

                {file.followUpDate && (
                  <div className="rounded-2xl border border-[#dcefe9] bg-[#f7fcfa] p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#92afa7]">
                      Date de suivi
                    </p>

                    <p className="mt-3 text-lg font-semibold text-[#23453c]">
                      {formatDate(file.followUpDate)}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-4">
        <div className="flex flex-col gap-3 md:flex-row xl:flex-col">
          <button
            type="button"
            className="flex-1 rounded-full border border-[#69ccb5] bg-white px-5 py-3 text-sm font-semibold text-[#55bfa6] transition-colors hover:bg-[#f3fbf8]"
          >
            Share Page
          </button>
          <button
            type="button"
            onClick={handleGenerateSummary}
            disabled={generateSummaryMutation.isPending}
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#5bc4ab] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#4db69d] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {generateSummaryMutation.isPending ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Génération...
              </>
            ) : (
              "Generate Summary"
            )}
          </button>{" "}
        </div>

        <ViewerSidebarCard title="Résumé" icon={<Sparkles size={16} />}>
          {generateSummaryMutation.isPending ? (
            <div className="space-y-3">
              <div className="h-3 w-full animate-pulse rounded bg-[#edf6f3]" />
              <div className="h-3 w-5/6 animate-pulse rounded bg-[#edf6f3]" />
              <div className="h-3 w-4/6 animate-pulse rounded bg-[#edf6f3]" />
            </div>
          ) : summaryError ? (
            <p className="text-sm text-red-500">{summaryError}</p>
          ) : summary ? (
            <p className="whitespace-pre-wrap text-sm leading-relaxed text-[#67867d]">
              {summary}
            </p>
          ) : (
            <div className="space-y-3 text-sm text-[#67867d]">
              <p>
                Cliquez sur <strong>Generate Summary</strong> pour obtenir un
                résumé IA du dossier médical.
              </p>

              <div>
                <span className="font-semibold text-[#23453c]">Diagnostic</span>
                <p>{file.diagnosis || "Non renseigné"}</p>
              </div>

              <div>
                <span className="font-semibold text-[#23453c]">Gravité</span>
                <p>{file.gravity}</p>
              </div>

              <div>
                <span className="font-semibold text-[#23453c]">
                  État général
                </span>
                <p>{file.generalState}</p>
              </div>
            </div>
          )}
        </ViewerSidebarCard>

        <ViewerSidebarCard
          title="File Management"
          icon={<Download size={16} />}
        >
          <div className="space-y-3">
            <button
              type="button"
              className="w-full rounded-xl bg-[#5bc4ab] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#4db69d]"
            >
              Download Page
            </button>
            <button
              type="button"
              className="w-full rounded-xl border border-[#69ccb5] px-4 py-3 text-sm font-semibold text-[#55bfa6] transition-colors hover:bg-[#f3fbf8]"
            >
              Print Page
            </button>
          </div>
        </ViewerSidebarCard>

        <ViewerSidebarCard
          title="File Properties"
          icon={<CircleCheck size={16} />}
        >
          <div className="space-y-3 text-sm text-[#67867d]">
            <div className="flex items-center justify-between gap-4">
              <span>Type</span>
              <span className="font-medium text-[#23453c]">PDF</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span>File size</span>
              <span className="font-medium text-[#23453c]">1 KB</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span>Added by</span>
              <span className="font-medium text-[#23453c]">
                {file.doctor?.fullname ?? file.doctorId}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span>Status</span>
              <span className="rounded-full bg-[#eef9f5] px-3 py-1 text-xs font-semibold text-[#4eb298]">
                Complet
              </span>
            </div>
          </div>
        </ViewerSidebarCard>

        <ViewerSidebarCard title="Notes" icon={<NotebookText size={16} />}>
          <p className="text-sm font-medium text-[#23453c]">
            {file.doctor?.fullname ?? file.doctorId}
          </p>

          <p className="mt-3 whitespace-pre-wrap text-sm text-[#79948d]">
            {file.notes || "Aucune note disponible."}
          </p>
        </ViewerSidebarCard>
      </div>
    </section>
  );
}
