import type { PatientFileRecord } from "@/types/entities.ts";
import {
  CircleCheck,
  Download,
  EllipsisVertical,
  NotebookText,
  ScanSearch,
  Sparkles,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import type { PropsWithChildren, ReactNode } from "react";

type FileViewerContentProps = {
  file: PatientFileRecord;
};

const fileTypeLabelMap = {
  consultation: "Consultation",
  analyse: "Analyse",
  ordonnance: "Ordonnance",
} as const;

// const thumbnailWidths = ["w-14", "w-20", "w-16"] as const;

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

// function PageThumbnail({ active }: { active: boolean }) {
//   return (
//     <button
//       type="button"
//       className={
//         active
//           ? "rounded-[18px] border border-[#69ccb5] bg-[#e8f7f2] p-3"
//           : "rounded-[18px] border border-[#e4f3ee] bg-white p-3"
//       }
//     >
//       <div className="space-y-2">
//         <div className="h-2 w-20 rounded-full bg-[#5cc4ab]" />
//         <div className="h-2 w-14 rounded-full bg-[#dbeee8]" />
//         <div className="h-2 w-16 rounded-full bg-[#edf6f3]" />
//       </div>
//       <div className="mt-4 h-14 rounded-xl bg-[#d9dddf]" />
//       <div className="mt-4 space-y-2">
//         {thumbnailWidths.map((className, index) => (
//           <div
//             key={`thumbnail-line-${index}`}
//             className={`h-2 rounded-full bg-[#edf6f3] ${className}`}
//           />
//         ))}
//       </div>
//     </button>
//   );
// }

export function FileViewerContent({ file }: FileViewerContentProps) {
  const sizeLabel = file.type === "analyse" ? "2.5 MB" : "1.8 MB";
  const statusLabel = file.modifiedDaysAgo <= 7 ? "Opened" : "Archived";

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

        {/* <div className="grid min-h-[720px] bg-[#eef7f4] md:grid-cols-[128px_minmax(0,1fr)]"> */}
        <div className="grid min-h-[720px] bg-[#eef7f4] md:grid-cols-1">
          {/* <aside className="border-r border-[#dcefe9] bg-[#f1f8f5] p-3">
            <p className="px-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#acc7c0]">
              Pages
            </p>
            <div className="mt-4 space-y-3">
              <PageThumbnail active />
              <PageThumbnail active={false} />
              <PageThumbnail active={false} />
            </div>
          </aside> */}

          <div className="overflow-auto p-5">
            <div className="mx-auto w-full max-w-[720px] rounded-[28px] border border-[#dcefe9] bg-white px-8 py-8 shadow-[0_20px_60px_rgba(43,99,83,0.08)]">
              <div className="flex items-start justify-between gap-4 border-b border-[#ebf5f2] pb-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#90b2a8]">
                    {fileTypeLabelMap[file.type]}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-[#23453c]">
                    {file.name}
                  </h2>
                  <p className="mt-2 text-sm text-[#8aa09a]">
                    Ajoute le {file.modifiedAt} par {file.doctor.name}
                  </p>
                </div>

                <div className="rounded-full bg-[#effaf6] px-4 py-2 text-sm font-medium text-[#36b79c]">
                  Dossier actif
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-[#f7fcfa] p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#92afa7]">
                      Medecin
                    </p>
                    <p className="mt-3 text-lg font-semibold text-[#23453c]">
                      {file.doctor.name}
                    </p>
                    <p className="mt-1 text-sm text-[#8aa09a]">
                      {file.doctor.email}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7fcfa] p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#92afa7]">
                      Derniere mise a jour
                    </p>
                    <p className="mt-3 text-lg font-semibold text-[#23453c]">
                      {file.modifiedAt}
                    </p>
                    <p className="mt-1 text-sm text-[#8aa09a]">
                      Reference: {file.id}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "Cette zone represente le contenu principal du fichier selectionne.",
                    "Tu pourras la remplacer plus tard par le rendu reel du document.",
                    "La mise en page reste en une seule page avec des donnees mockables.",
                  ].map((line) => (
                    <div key={line} className="space-y-2">
                      <div className="h-3 w-full rounded-full bg-[#edf6f3]" />
                      <div className="h-3 w-5/6 rounded-full bg-[#f3faf8]" />
                      <p className="text-sm text-[#5f7f76]">{line}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-[24px] border border-dashed border-[#c9e9df] bg-[#fbfefd] p-6">
                  <p className="text-sm font-medium text-[#2f8b73]">
                    Zone reservee au rendu du fichier
                  </p>
                  <div className="mt-4 space-y-4">
                    <div className="h-56 rounded-2xl bg-[#edf7f4]" />
                    <div className="h-40 rounded-2xl bg-[#f3faf8]" />
                  </div>
                </div>
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
            className="flex-1 rounded-full bg-[#5bc4ab] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#4db69d]"
          >
            Generate Summary
          </button>
        </div>

        <ViewerSidebarCard title="Summary" icon={<Sparkles size={16} />}>
          <p className="text-sm text-[#79948d]">
            Placeholder summary for {file.name}. Replace this block with AI or
            backend data later.
          </p>
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
              <span className="font-medium text-[#23453c]">
                {fileTypeLabelMap[file.type]}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span>File size</span>
              <span className="font-medium text-[#23453c]">{sizeLabel}</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span>Added by</span>
              <span className="font-medium text-[#23453c]">
                {file.doctor.name}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span>Status</span>
              <span className="rounded-full bg-[#eef9f5] px-3 py-1 text-xs font-semibold text-[#4eb298]">
                {statusLabel}
              </span>
            </div>
          </div>
        </ViewerSidebarCard>

        <ViewerSidebarCard title="Notes" icon={<NotebookText size={16} />}>
          <p className="text-sm font-medium text-[#23453c]">
            {file.doctor.name}
          </p>
          <p className="mt-2 text-sm text-[#79948d]">
            Notes et proprietes du fichier a injecter ici plus tard.
          </p>
        </ViewerSidebarCard>
      </div>
    </section>
  );
}
