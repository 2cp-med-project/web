import { useState } from "react";
import { useAdminDashboardContext, type DoctorWithStatus } from "./context.tsx";
import { DoctorProfileCard } from "./DoctorProfileCard.tsx";

type VerificationStatus = "pending" | "verified" | "rejected";

export function VerificationTable() {
  const { doctors, handleAccept, handleReject } = useAdminDashboardContext();
  const [tab, setTab] = useState<VerificationStatus>("pending");
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorWithStatus | null>(null);

  const filtered = doctors.filter((d) => d.status === tab);
  const pendingCount = doctors.filter((d) => d.status === "pending").length;

  const tabs: { label: string; value: VerificationStatus }[] = [
    { label: "En attente", value: "pending" },
    { label: "Vérifiés", value: "verified" },
    { label: "Rejetés", value: "rejected" },
  ];

  const statusStyles: Record<VerificationStatus, string> = {
    pending: "bg-yellow-100 text-yellow-700",
    verified: "bg-green-100 text-green-700",
    rejected: "bg-red-100 text-red-600",
  };

  const statusLabels: Record<VerificationStatus, string> = {
    pending: "En attente",
    verified: "Vérifié",
    rejected: "Rejeté",
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-lg">Demandes de vérification</h2>
        <span className="bg-yellow-100 text-yellow-700 text-xs font-medium px-2 py-1 rounded-full">
          {pendingCount} En attente
        </span>
      </div>

      <div className="flex gap-4 mb-4 border-b border-black/10">
        {tabs.map((t) => (
          <button
            key={t.value}
            onClick={() => setTab(t.value)}
            className={`pb-2 text-sm font-medium transition-colors ${
              tab === t.value
                ? "border-b-2 border-green-600 text-green-600"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-gray-400 text-center py-6">
          Aucun médecin dans cette catégorie.
        </p>
      ) : (
        <ul className="space-y-3">
          {filtered.map((doctor) => (
            <li
              key={doctor.id}
              className="flex items-center justify-between p-3 rounded-xl border border-black/5 hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-semibold text-sm">
                  {doctor.fullname.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-sm">{doctor.fullname}</p>
                  <p className="text-xs text-gray-400">
                    {doctor.specialty} • {doctor.experience} exp • soumis {doctor.submittedAt}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-0.5 rounded-full ${statusStyles[doctor.status]}`}>
                  {statusLabels[doctor.status]}
                </span>
                <button
                  onClick={() => setSelectedDoctor(doctor)}
                  className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-lg transition"
                >
                  Voir
                </button>
                {doctor.status === "pending" && (
                  <>
                    <button
                      onClick={() => handleAccept(doctor.id)}
                      className="p-1 rounded-full hover:bg-green-100 text-green-600 transition"
                    >✓</button>
                    <button
                      onClick={() => handleReject(doctor.id)}
                      className="p-1 rounded-full hover:bg-red-100 text-red-500 transition"
                    >✕</button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}

      {selectedDoctor && (
        <DoctorProfileCard
          doctor={selectedDoctor}
          onClose={() => setSelectedDoctor(null)}
          onAccept={() => { handleAccept(selectedDoctor.id); setSelectedDoctor(null); }}
          onReject={() => { handleReject(selectedDoctor.id); setSelectedDoctor(null); }}
        />
      )}
    </div>
  );
}