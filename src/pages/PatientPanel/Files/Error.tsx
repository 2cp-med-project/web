import { FilesTable, FilesTitleBlock } from "@/features/PatientPanel/Files/index.ts";

type FilesPageErrorProps = {
  onRetry: () => void;
};

export function FilesPageError({ onRetry }: FilesPageErrorProps) {
  return (
    <section className="px-2 space-y-6">
      <FilesTitleBlock />

      <section className="rounded-[28px] bg-[#f5fcf9] px-5 py-6 md:px-8 md:py-8">
        <FilesTable.Error onRetry={onRetry} />
      </section>
    </section>
  );
}
