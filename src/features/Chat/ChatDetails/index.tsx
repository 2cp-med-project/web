import { getInitials } from "@/utils/index.ts";
import { Avatar } from "@radix-ui/themes";
import { Search, UserRound } from "lucide-react";
import React, { useState } from "react";
import { useChatContext } from "../context.tsx";
import { ContactViewer } from "./ContactViewer.tsx";

export function ChatDetails() {
  const { isDetailsPanelOpen, activeContact } = useChatContext();

  const [open, setOpen] = useState(false);

  if (!isDetailsPanelOpen) return null;
  if (activeContact === null) return null;

  return (
    <React.Fragment>
      <div className="bg-white rounded-xl flex flex-col h-full w-full">
        <div className="mt-4 flex flex-col items-center space-y-4">
          <Avatar
            src={activeContact.avatar ?? undefined}
            fallback={getInitials(activeContact.fullname)}
            radius="full"
            size={"6"}
          />
          <div className="space-y-1 text-center">
            <p className="text-foreground text-xl font-medium">
              {activeContact.fullname}
            </p>
            <p className="text-muted text-sm">{activeContact.email}</p>
          </div>
          <p className="text-muted">Actif Il y a 15 minutes</p>
          <div className="flex items-center justify-center gap-4">
            <button
              className="rounded-full p-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
              onClick={() => setOpen(true)}
            >
              <UserRound size={20} className="text-gray-700" />
            </button>
            <button className="rounded-full p-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-200">
              <Search size={20} className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>
      <ContactViewer
        contact={activeContact}
        open={open}
        onOpenChange={setOpen}
      />
    </React.Fragment>
  );
}
