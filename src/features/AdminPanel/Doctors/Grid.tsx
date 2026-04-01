import type { DoctorWithMeta } from "@/constants/ui/admin/doctors.ts";
import { useDoctorsContext } from "./context.tsx";

export function DoctorsGrid() {
  const { doctors, isLoading, statusFilter, view } = useDoctorsContext();

  const statusStyles: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-700",
    verified: "bg-green-100 text-green-700",
    rejected: "bg-red-100 text-red-600",
  };

  const statusLabels: Record<string, string> = {
    pending: "En attente",
    verified: "Vérifié",
    rejected: "Rejeté",
  };

  const filtered = (doctors as DoctorWithMeta[]).filter((d) =>
    statusFilter === "all" ? true : d.verificationStatus === statusFilter,
  );

  if (isLoading)
    return (
      <div className="grid grid-cols-3 gap-4 mt-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-4 animate-pulse h-48"
          />
        ))}
      </div>
    );

  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
      {filtered.map((doctor) => {
        const d = doctor as DoctorWithMeta;
        return (
          <div
            key={d.id}
            onClick={() => view(d)}
            className="bg-white rounded-2xl p-4 shadow-sm cursor-pointer hover:shadow-md transition flex flex-col items-center gap-2"
          >
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xl font-bold">
              {d.fullname.charAt(0)}
            </div>
            <p className="font-semibold text-sm text-center">{d.fullname}</p>
            <p className="text-xs text-gray-400">{d.specialty}</p>
            <div className="flex items-center justify-between w-full mt-2">
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusStyles[d.verificationStatus]}`}
              >
                {statusLabels[d.verificationStatus]}
              </span>
              <span className="text-xs text-gray-400">{d.experience} exp</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
