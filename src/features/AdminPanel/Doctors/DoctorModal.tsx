import { useAdminDoctorsContext } from "./context.tsx";
import type { DoctorWithMeta } from "@/constants/ui/admin/doctors.ts";
import { X } from "lucide-react";

export function AdminDoctorModal() {
  const { selectedDoctor, clearView } = useAdminDoctorsContext();
  if (!selectedDoctor) return null;

  const d = selectedDoctor as DoctorWithMeta;

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

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-[420px] shadow-xl relative">
        <button onClick={clearView} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X size={18} />
        </button>
        <h2 className="font-semibold text-lg mb-4">Profil Médecin</h2>
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-2xl font-bold mb-2">
            {d.fullname.charAt(0)}
          </div>
          <p className="font-semibold text-base">{d.fullname}</p>
          <p className="text-sm text-gray-400">{d.specialty}</p>
          <span className={`mt-1 text-xs px-2 py-0.5 rounded-full font-medium ${statusStyles[d.verificationStatus]}`}>
            {statusLabels[d.verificationStatus]}
          </span>
        </div>
        <ul className="space-y-3 text-sm">
          {[
            { label: "Email", value: d.email },
            { label: "Téléphone", value: d.phoneNumber },
            { label: "Adresse", value: d.address ?? "—" },
            { label: "NIN", value: d.nationalId },
            { label: "Âge", value: `${d.age} ans` },
            { label: "Expérience", value: d.experience },
            { label: "Soumis", value: d.submittedAt },
          ].map((item) => (
            <li key={item.label} className="grid grid-cols-2 border-b border-black/5 pb-2">
              <span className="text-gray-400 font-medium">{item.label}</span>
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}