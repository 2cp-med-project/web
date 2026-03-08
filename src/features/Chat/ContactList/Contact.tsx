import { cn } from "@/lib/utils.ts";
import type { User } from "@/types/entities.ts";
import { getInitials } from "@/utils/index.ts";
import { Avatar } from "@radix-ui/themes";
import { CheckCheck } from "lucide-react";

type ContactProps = User & {
  selected: boolean;
  onSelect: () => void;
};

export function Contact({ selected, onSelect, ...contact }: ContactProps) {
  return (
    <button
      type="button"
      className={cn(
        "cursor-pointer rounded-xl px-2 py-2 w-full flex gap-2 transition-colors duration-200",
        selected ? "bg-gray-200" : "hover:bg-gray-100 bg-inherit",
      )}
      onClick={onSelect}
    >
      <div className="flex items-center justify-center">
        <Avatar
          src={contact.avatar ?? undefined}
          fallback={getInitials(contact.fullname)}
          radius="full"
        />
      </div>
      <div className="flex flex-col h-full justify-between w-full">
        <div className="flex items-center justify-between">
          <p className="text-lg font-medium text-black/70">
            {contact.fullname}
          </p>
          <p className="text-muted text-xs">Hier</p>
        </div>
        <p className="flex items-center gap-1">
          <CheckCheck className="text-foreground" size={14} />
          <span className="text-muted text-xs">
            I want you to come and help me
          </span>
        </p>
      </div>
    </button>
  );
}
