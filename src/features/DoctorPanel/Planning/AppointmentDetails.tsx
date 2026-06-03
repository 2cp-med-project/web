import type { PopulatedAppointment } from "@/types/entities.ts";
import { getInitials } from "@/utils/index.ts";
import { Avatar } from "@radix-ui/themes";
import { Calendar, Clock, FileText, X } from "lucide-react";

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
    <div className="relative flex h-full w-full flex-col space-y-6 rounded-[18px] border border-[#d8efe8] bg-white p-6 shadow-[0_10px_25px_-18px_rgba(17,78,62,0.35)]">
      <button
        className="absolute top-3 right-3 rounded-full p-1 text-black/50 transition-colors hover:bg-gray-200"
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
            {formatTime(start)} - {formatTime(end)}
          </span>
        </div>

        <div className="flex items-start gap-3">
          <FileText size={16} className="mt-0.5 text-gray-500" />
          <div>
            <p className="font-medium">Raison</p>
            <p className="text-gray-600">
              {props.reason ?? "Aucune raison specifiee"}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-auto flex gap-3">
        <button className="flex-1 rounded-full bg-[#54c8a9] py-2 text-sm font-medium text-white">
          Reprogrammer
        </button>
        <button className="flex-1 rounded-full border border-red-300 py-2 text-sm font-medium text-red-600 hover:bg-red-50">
          Annuler
        </button>
      </div>
    </div>
  );
}
