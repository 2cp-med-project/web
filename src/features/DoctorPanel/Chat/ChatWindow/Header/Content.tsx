import type { BaseUser } from "@/types/entities.ts";
import { getInitials } from "@/utils/index.ts";
import { Avatar } from "@radix-ui/themes";
import { Ellipsis } from "lucide-react";

type ChatWindowHeaderContentProps = {
  activeContact: BaseUser;
  onToggleDetailsPannel: () => void;
};

export function ChatWindowHeaderContent({
  activeContact,
  onToggleDetailsPannel,
}: ChatWindowHeaderContentProps) {
  return (
    <header className="p-2 border-b border-b-gray-300 flex justify-between items-center h-16">
      <div className="flex items-center gap-2">
        <Avatar
          src={activeContact.avatar ?? undefined}
          fallback={getInitials(activeContact.fullname)}
          radius="full"
        />
        <div className="flex flex-col">
          <p className="text-lg font-medium text-black/70">
            {activeContact.fullname}
          </p>
          <p className="text-muted text-xs">Actif il y a 35 minutes</p>
        </div>
      </div>

      <button
        className="hover:bg-gray-200 p-1.5 rounded-full"
        onClick={onToggleDetailsPannel}
      >
        <Ellipsis
          className="bg-foreground text-white rounded-full p-1"
          size={26}
        />
      </button>
    </header>
  );
}
