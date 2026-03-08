import type { User } from "@/types/entities.ts";
import { getInitials } from "@/utils/index.ts";
import { Avatar, Dialog } from "@radix-ui/themes";
import { X } from "lucide-react";

type ContactViewerProps = {
  contact: User;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ContactViewer({
  contact,
  open,
  onOpenChange,
}: ContactViewerProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Content className="bg-white rounded-xl p-6 w-[320px] shadow-lg flex flex-col gap-4">
        {/* Header */}
        <div className="flex flex-col items-center gap-3">
          <Avatar
            src={contact.avatar ?? undefined}
            fallback={getInitials(contact.fullname)}
            radius="full"
            size={"9"}
          />
          <p className="text-xl font-semibold text-foreground">
            {contact.fullname}
          </p>
          <p className="text-sm text-muted">{contact.email}</p>
        </div>

        {/* Info section */}
        <div className="flex flex-col gap-2 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>User ID:</span>
            <span>{contact.id}</span>
          </div>
          <div className="flex justify-between">
            <span>Status:</span>
            <span>Active 15 minutes ago</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between mt-4">
          <button className="flex-1 bg-foreground text-white py-2 px-4 rounded">
            Message
          </button>
          <button className="flex-1 ml-2 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded transition-colors">
            Call
          </button>
        </div>

        {/* Close button */}
        <Dialog.Close className="cursor-pointer rounded-full p-1 absolute top-3 right-3 text-gray-500 hover:text-gray-700 bg-white hover:bg-gray-300 transition-colors duration-200">
          <X size={30} />
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
}
