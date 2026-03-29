import type { BaseUser, Message } from "@/types/entities.ts";
import { type Page, type PaginationAttributes } from "@/types/pagination.ts";
import { DoctorData } from "./dashboard.api.ts";

export const fetchContactsPage = (pagination: PaginationAttributes) => {
  return new Promise<Page<BaseUser>>((res) => {
    setTimeout(() => {
      const start = (pagination.page - 1) * pagination.pageSize;
      const end = start + pagination.pageSize;

      const filteredContacts = DoctorData.Chat.contacts.filter((c) =>
        c.fullname
          .toLowerCase()
          .includes(pagination.search.trim().toLowerCase()),
      );

      const contacts = filteredContacts.slice(start, end);
      const nextPage =
        contacts.length === filteredContacts.length
          ? null
          : pagination.page + 1;
      const count = filteredContacts.length;

      return res({
        data: contacts,
        nextPage,
        count,
      });
    }, 1000);
  });
};

export const fetchMessagesPage = (
  _contactId: string,
  pagination: PaginationAttributes,
) => {
  return new Promise<Page<Message>>((res) => {
    setTimeout(() => {
      return res({
        data: ([] as Message[]).filter((message) =>
          message.content.includes(pagination.search),
        ),
        nextPage: null,
        count: 0,
      });
    }, 1000);
  });
};

export const sendMessage = (contactId: string, content: string) => {
  return new Promise<Message>((res) => {
    setTimeout(() => {
      const message = {
        id: "1",
        senderId: "20202002",
        receiverId: contactId,
        content,
      };
      return res(message);
    }, 300);
  });
};
