import type { EmergencyContact } from "@/types/entities.ts";
import { Plus } from "lucide-react";

type EmergencyContactContentProps = EmergencyContact & {
  onAdd: () => void;
};

export function EmergencyContactContent(props: EmergencyContactContentProps) {
  return (
    <div className="py-1 px-3 rounded-lg bg-white flex items-center justify-between">
      <div className="flex flex-col items-start justify-start">
        <p className="text-black text-lg font-archivo">
          {props.fullname} ({props.label})
        </p>
        <p className="text-muted text-xs">{props.phoneNumber}</p>
      </div>
      <button className="text-red-600" onClick={props.onAdd}>
        <Plus size={20} />
      </button>
    </div>
  );
}
