import { useAdminPatientsContext } from "./context.tsx";
import { usePatients } from "@/hooks/admin.hooks/index.ts";
import { X } from "lucide-react";

export function AdminPatientModal() {
  const { onViewPatientId, clearView } = useAdminPatientsContext();
  const { fetchOne } = usePatients();
  const { patient, isLoading } = fetchOne(onViewPatientId);

  if (!onViewPatientId) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-[420px] shadow-xl relative">
        <button onClick={clearView} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X size={18} />
        </button>
        <h2 className="font-semibold text-lg mb-4">Profil Patient</h2>
        {isLoading && <div className="animate-pulse space-y-3">{Array.from({length: 5}).map((_,i) => <div key={i} className="h-4 bg-gray-100 rounded" />)}</div>}
        {patient && (
          <>
            <div className="flex flex-col items-center mb-6">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-2xl font-bold mb-2">
                {patient.fullname.charAt(0)}
              </div>
              <p className="font-semibold text-base">{patient.fullname}</p>
              <p className="text-sm text-gray-400">{patient.email}</p>
            </div>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Téléphone", value: patient.phoneNumber },
                { label: "Adresse", value: patient.address ?? "—" },
                { label: "NIN", value: patient.nationalId },
                { label: "Âge", value: `${patient.age} ans` },
                { label: "Groupe sanguin", value: (patient as any).bloodType ?? "—" },
                { label: "Allergies", value: (patient as any).allergies?.join(", ") || "—" },
                { label: "Conditions chroniques", value: (patient as any).chronicConditions?.join(", ") || "—" },
                { label: "Statut", value: patient.status === "active" ? "Actif" : "Inactif" },
              ].map((item) => (
                <li key={item.label} className="grid grid-cols-2 border-b border-black/5 pb-2">
                  <span className="text-gray-400 font-medium">{item.label}</span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}