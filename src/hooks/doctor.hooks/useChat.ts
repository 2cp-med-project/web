import { APIError, DoctorAPI } from "@/api/index.ts";
import { useAuthContext } from "@/context/auth.tsx";
import { InvalidInputError } from "@/errors/InvalidInputError.ts";
import type { CreateMessageData } from "@/features/DoctorPanel/Chat/zod/create-message.ts";
import type { BaseUser, Message } from "@/types/entities.ts";
import type { MutationCallback } from "@/types/mutation.ts";
import type { FilterAttributes, Page } from "@/types/pagination.ts";
import {
  type InfiniteData,
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

export const useChat = () => {
  const { user } = useAuthContext();

  const fetchContacts = (filter: FilterAttributes, pageSize: number) => {
    const query = useInfiniteQuery<Page<BaseUser>, Error>({
      queryKey: ["chat-contacts", user?.id, filter.search],
      queryFn: async ({ pageParam = 1 }) => {
        if (!user?.id) throw new APIError.NotAuthenticatedUserError();
        const page = await DoctorAPI.Chat.fetchContactsPage({
          ...filter,
          page: pageParam as number,
          pageSize: pageSize,
        });
        return page;
      },
      getNextPageParam: (lastPage) => lastPage.nextPage,
      initialPageParam: 1,
      placeholderData: (prev) => prev,
      enabled: !!user?.id,
    });

    return query;
  };

  const fetchMessages = (
    contactId: string | null,
    filter: FilterAttributes,
    pageSize: number,
  ) => {
    const query = useInfiniteQuery<Page<Message>, Error>({
      queryKey: ["chat-messages", user?.id, contactId, filter.search],
      queryFn: async ({ pageParam = 1 }) => {
        // this is for assertion
        if (contactId === null) throw new InvalidInputError("contactId");
        if (!user?.id) throw new APIError.NotAuthenticatedUserError();

        const page = await DoctorAPI.Chat.fetchMessagesPage(contactId, {
          ...filter,
          page: pageParam as number,
          pageSize: pageSize,
        });
        return page;
      },
      getNextPageParam: (lastPage) => lastPage.nextPage,
      initialPageParam: 1,
      placeholderData: (prev) => prev,
      enabled: !!user?.id && !!contactId,
    });
    return query;
  };

  const sendMessage = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation<
      Message,
      Error,
      CreateMessageData & MutationCallback<Message>,
      { previousMessages?: InfiniteData<Page<Message>> }
    >({
      mutationFn: async ({ contactId, content }) => {
        return DoctorAPI.Chat.sendMessage(contactId, content);
      },

      onMutate: async (vs) => {
        const { contactId, content } = vs;

        await queryClient.cancelQueries({
          queryKey: ["chat-messages", user?.id, contactId],
        });

        const previousData = queryClient.getQueryData<
          InfiniteData<Page<Message>>
        >(["chat-messages", user?.id, contactId]);

        const optimisticMessage: Message = {
          id: "temp-" + Date.now(),
          content,
          senderId: user!.id,
          receiverId: contactId,
        };

        queryClient.setQueryData<InfiniteData<Page<Message>>>(
          ["chat-messages", user?.id, contactId],
          (oldData) => {
            if (!oldData) return oldData;

            return {
              pages: oldData.pages.map((page, index) =>
                // FIXME: This might change depending on the setup (last or first page)
                index === 0
                  ? {
                      ...page,
                      data: [optimisticMessage, ...page.data],
                    }
                  : page,
              ),
              pageParams: oldData.pageParams,
            };
          },
        );

        return { previousMessages: previousData };
      },

      onError: (error, vs, context) => {
        if (context?.previousMessages) {
          queryClient.setQueryData(
            ["chat-messages", user?.id, vs.contactId],
            context.previousMessages,
          );
        }

        return vs.onError?.(error);
      },

      onSuccess: (message, vs) => {
        queryClient.setQueryData<InfiniteData<Page<Message>>>(
          ["chat-messages", user?.id, vs.contactId],
          (oldData) => {
            if (!oldData) return oldData;

            return {
              pages: oldData.pages.map((page) => ({
                ...page,
                data: page.data.map((msg) =>
                  msg.id.startsWith("temp-") ? message : msg,
                ),
              })),
              pageParams: oldData.pageParams,
            };
          },
        );

        queryClient.invalidateQueries({
          queryKey: ["chat-contacts", user?.id],
        });

        return vs.onSuccess?.(message);
      },
    });

    return mutation;
  };

  return {
    fetchContacts,
    fetchMessages,
    sendMessage,
  };
};
