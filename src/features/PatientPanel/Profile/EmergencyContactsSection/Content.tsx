import type { EmergencyContact } from "@/types/entities.ts";
import { getInitials } from "@/utils/index.ts";
import { Phone } from "lucide-react";

type EmergencyContactsSectionContentProps = {
  contacts: EmergencyContact[];
};

export function EmergencyContactsSectionContent({
  contacts,
}: EmergencyContactsSectionContentProps) {
  return (
    <div className="space-y-2">
      <p className="text-lg font-medium text-black">Contacts d'urgences</p>
      <div className="space-y-3">
        {contacts.map((contact) => {
          const initials = getInitials(contact.fullname);
          return (
            <div
              key={contact.id}
              className="flex items-center justify-between border border-red-200 rounded-xl p-3 bg-red-50/40"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600 font-semibold">
                  {initials}
                </div>

                <div className="flex flex-col">
                  <span className="text-sm font-medium text-black">
                    {contact.fullname}
                  </span>
                  <span className="text-xs text-black/50">
                    {contact.phoneNumber}
                  </span>
                </div>
              </div>

              <button className="w-9 h-9 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition">
                <Phone size={16} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
