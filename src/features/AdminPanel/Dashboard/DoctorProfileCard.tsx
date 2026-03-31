import type { DoctorWithStatus } from "./context.tsx";
import { X } from "lucide-react";

type DoctorProfileCardProps = {
  doctor: DoctorWithStatus;
  onClose: () => void;
  onAccept: () => void;
  onReject: () => void;
};

export function DoctorProfileCard({ doctor, onClose, onAccept, onReject }: DoctorProfileCardProps) {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-[400px] shadow-xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X size={18} />
        </button>
        <h2 className="font-semibold text-lg mb-4">Profil du Médecin</h2>
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-2xl font-bold mb-2">
            {doctor.fullname.charAt(0)}
          </div>
          <p className="font-semibold text-base">{doctor.fullname}</p>
          <p className="text-sm text-gray-400">{doctor.specialty}</p>
        </div>
        <ul className="space-y-3 text-sm">
          {[
            { label: "Email", value: doctor.email },
            { label: "Téléphone", value: doctor.phoneNumber },
            { label: "Adresse", value: doctor.address },
            { label: "NIN", value: doctor.nationalId },
            { label: "Âge", value: `${doctor.age} ans` },
            { label: "Expérience", value: doctor.experience },
            { label: "Soumis", value: doctor.submittedAt },
          ].map((item) => (
            <li key={item.label} className="grid grid-cols-2 border-b border-black/5 pb-2">
              <span className="text-gray-400 font-medium">{item.label}</span>
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
        {doctor.status === "pending" && (
          <div className="flex gap-3 mt-6">
            <button
              onClick={onReject}
              className="flex-1 py-2 rounded-xl border border-red-200 text-red-500 hover:bg-red-50 transition text-sm font-medium"
            >
              Refuser
            </button>
            <button
              onClick={onAccept}
              className="flex-1 py-2 rounded-xl border border-green-200 text-green-600 hover:bg-green-50 transition text-sm font-medium"
            >
              Accepter
            </button>
          </div>
        )}
      </div>
    </div>
  );
}