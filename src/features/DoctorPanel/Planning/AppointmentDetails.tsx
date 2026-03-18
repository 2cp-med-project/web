import type { PopulatedAppointment } from "@/types/entities.ts";
import { getInitials } from "@/utils/index.ts";
import { Avatar } from "@radix-ui/themes";
import { Activity, Calendar, Clock, FileText, X } from "lucide-react";

type AppointmentDetailsProps = PopulatedAppointment & {
  onClose: () => void;
};

export function AppointmentDetails(props: AppointmentDetailsProps) {
  const start = props.start;
  const end = props.end;

  const formatTime = (d: Date) =>
    `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(
      2,
      "0",
    )}`;

  const formatDate = (d: Date) => {
    const formatted = d.toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  };

  return (
    <div className="relative w-full h-full flex flex-col bg-white rounded-lg border border-black/20 p-6 space-y-6">
      <button
        className="absolute top-3 right-3 p-1 rounded-full text-black/50 hover:bg-gray-200 transition-colors"
        onClick={props.onClose}
      >
        <X size={20} />
      </button>

      <div className="flex flex-col items-center space-y-3">
        <Avatar
          src={props.patient.avatar ?? undefined}
          fallback={getInitials(props.patient.fullname)}
          radius="full"
          size="6"
        />

        <div className="text-center">
          <p className="text-xl font-semibold">{props.patient.fullname}</p>
          <p className="text-sm text-gray-500">{props.patient.email}</p>
        </div>
      </div>

      <div className="space-y-4 text-sm">
        <div className="flex items-center gap-3">
          <Calendar size={16} className="text-gray-500" />
          <span>{formatDate(start)}</span>
        </div>

        <div className="flex items-center gap-3">
          <Clock size={16} className="text-gray-500" />
          <span>
            {formatTime(start)} – {formatTime(end)}
          </span>
        </div>

        <div className="flex items-start gap-3">
          <FileText size={16} className="text-gray-500 mt-0.5" />
          <div>
            <p className="font-medium">Raison</p>
            <p className="text-gray-600">
              {props.reason ?? "Aucune raison spécifiée"}
            </p>
          </div>
        </div>

        {props.patient.lastVisit && (
          <div className="flex items-center gap-3">
            <Activity size={16} className="text-gray-500" />
            <span>
              Dernière visite :{" "}
              {props.patient.lastVisit.toLocaleDateString("fr-FR")}
            </span>
          </div>
        )}

        <div className="flex items-center gap-3">
          <span className="text-gray-500">Statut :</span>
          <span
            className={`px-2 py-0.5 rounded text-xs font-medium ${
              props.patient.status === "active"
                ? "bg-green-100 text-green-700"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {props.patient.status === "active" ? "Actif" : "Inactif"}
          </span>
        </div>
      </div>

      <div className="mt-auto flex gap-3">
        <button className="flex-1 rounded-md bg-foreground text-white py-2 text-sm font-medium">
          Reprogrammer
        </button>
        <button className="flex-1 rounded-md border border-red-300 text-red-600 py-2 text-sm font-medium hover:bg-red-50">
          Annuler
        </button>
      </div>
    </div>
  );
}
