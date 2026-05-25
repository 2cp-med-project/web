import type { PatientFileType } from "@/types/entities.ts";
import { ChevronDown } from "lucide-react";

export type FilesModifiedFilter = "all" | "recent" | "month";
export type FilesDoctorFilter = "all" | "sarah-chen" | "malik-rahal";

type FilterOption<T extends string> = {
  label: string;
  value: T;
};

type FilterFieldProps<T extends string> = {
  label: string;
  value: T;
  options: ReadonlyArray<FilterOption<T>>;
  onChange: (value: T) => void;
};

type FilesFiltersBarProps = {
  selectedFileType: PatientFileType | "all";
  selectedModifiedRange: FilesModifiedFilter;
  selectedDoctor: FilesDoctorFilter;
  onFileTypeChange: (value: PatientFileType | "all") => void;
  onModifiedRangeChange: (value: FilesModifiedFilter) => void;
  onDoctorChange: (value: FilesDoctorFilter) => void;
};

const fileTypeOptions = [
  { label: "Tous", value: "all" },
  { label: "Consultation", value: "consultation" },
  { label: "Analyse", value: "analyse" },
  { label: "Ordonnance", value: "ordonnance" },
] as const satisfies ReadonlyArray<{
  label: string;
  value: PatientFileType | "all";
}>;

const modifiedOptions = [
  { label: "Tout", value: "all" },
  { label: "7 jours", value: "recent" },
  { label: "30 jours", value: "month" },
] as const satisfies ReadonlyArray<{
  label: string;
  value: FilesModifiedFilter;
}>;

const doctorOptions = [
  { label: "Tous", value: "all" },
  { label: "Dr. Sarah Chen", value: "sarah-chen" },
  { label: "Dr. Malik Rahal", value: "malik-rahal" },
] as const satisfies ReadonlyArray<{
  label: string;
  value: FilesDoctorFilter;
}>;

function FilterField<T extends string>({
  label,
  value,
  options,
  onChange,
}: FilterFieldProps<T>) {
  return (
    <label className="relative">
      <select
        value={value}
        onChange={(event) => onChange(event.target.value as T)}
        className="min-w-32 appearance-none rounded-full border border-[#a9dfd1] bg-white px-5 py-3 pr-10 text-sm text-[#36a88d] outline-none transition-colors hover:border-[#89d4c1] focus:border-[#36a88d]"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {label} {option.label}
          </option>
        ))}
      </select>

      <ChevronDown
        size={16}
        className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[#59bea6]"
      />
    </label>
  );
}

export function FilesFiltersBar({
  selectedFileType,
  selectedModifiedRange,
  selectedDoctor,
  onFileTypeChange,
  onModifiedRangeChange,
  onDoctorChange,
}: FilesFiltersBarProps) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:flex-wrap">
      <FilterField
        label="Type"
        value={selectedFileType}
        options={fileTypeOptions}
        onChange={onFileTypeChange}
      />
      <FilterField
        label="Modifie"
        value={selectedModifiedRange}
        options={modifiedOptions}
        onChange={onModifiedRangeChange}
      />
      <FilterField
        label="Medecin"
        value={selectedDoctor}
        options={doctorOptions}
        onChange={onDoctorChange}
      />
    </div>
  );
}
