import { Searchbar } from "@/components/Searchbar.tsx";
import { useChatContext } from "../context.tsx";
import { Contact } from "./Contact.tsx";

export function ContactList() {
  const { contacts, activeContactId, search, onSearchChange, selectContact } =
    useChatContext();

  return (
    <div className="py-1 px-2 rounded-xl bg-white flex flex-col h-full">
      <h1 className="px-2 py-2 text-foreground font-medium text-2xl">
        Messagerie
      </h1>
      <div className="px-2 mt-2">
        <Searchbar
          placeholder="Search Healio"
          radius="full"
          search={search}
          onSearchChange={onSearchChange}
        />
      </div>
      <div className="mt-2 overflow-y-auto space-y-0.5 pr-1">
        {contacts.map((contact) => (
          <Contact
            {...contact}
            selected={activeContactId === contact.id}
            onSelect={() => selectContact(contact.id)}
          />
        ))}
      </div>
    </div>
  );
}
