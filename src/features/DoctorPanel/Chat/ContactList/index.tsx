import { Searchbar } from "@/components/Searchbar.tsx";
import { useChat } from "@/hooks/doctor.hooks/useChat.ts";
import { useDebounce } from "@uidotdev/usehooks";
import { RefreshCcw } from "lucide-react";
import { useEffect, useState } from "react";
import { useChatContext } from "../context.tsx";
import * as Contact from "./Contact/index.ts";

const CONTACTS_PAGE_SIZE = 30;

export function ContactList() {
  const { activeContactId, selectContact } = useChatContext();

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  const { fetchContacts } = useChat();
  const { data, isLoading, isError, refetch, isFetching } = fetchContacts(
    { search },
    CONTACTS_PAGE_SIZE,
  );

  const contacts = data?.pages?.flatMap((page) => page.data) ?? [];

  useEffect(() => {
    refetch();
  }, [debouncedSearch]);

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
          onSearchChange={setSearch}
        />
      </div>

      <div className="mt-2 overflow-y-auto space-y-0.5 pr-1 flex-1">
        {isLoading &&
          Array.from({ length: 4 }).map((_, index) => (
            <Contact.Skeleton key={index} />
          ))}

        {isError && (
          <div className="flex flex-col items-center justify-center py-6 gap-2 text-muted">
            <p className="text-sm">Impossible de charger les contacts</p>
            <button
              type="button"
              onClick={() => refetch()}
              className="flex items-center gap-1 text-sm text-red-500"
            >
              <RefreshCcw size={14} />
              Réessayer
            </button>
          </div>
        )}

        {!isFetching && !isLoading && !isError && contacts.length === 0 && (
          <div className="flex items-center justify-center py-4 text-sm text-muted">
            Aucun contact trouvé
          </div>
        )}

        {!isLoading &&
          !isError &&
          contacts.map((contact) => (
            <Contact.Content
              key={contact.id}
              {...contact}
              selected={activeContactId === contact.id}
              onSelect={() => selectContact(contact.id)}
            />
          ))}

        {isFetching &&
          !isLoading &&
          Array.from({ length: 4 }).map((_, index) => (
            <Contact.Skeleton key={index} />
          ))}
      </div>
    </div>
  );
}
