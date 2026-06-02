import { FetchChatbotConversationError } from "@/api/errors/FetchChatbotConversationError.ts";
import { FetchChatbotConversationsError } from "@/api/errors/FetchChatbotConversationsError.ts";
import { StartChatbotConversationError } from "@/api/errors/StartChatbotConversationError.ts";
import { APIError, PatientAPI } from "@/api/index.ts";
import { apiRequestHadError } from "@/api/types.ts";
import { useAuthContext } from "@/context/auth.tsx";
import { InvalidInputError } from "@/errors/index.ts";
import type { OptimisticMutationCallback } from "@/types/mutation.ts";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useHealbot = () => {
  const { user } = useAuthContext();

  const fetchConversations = () => {
    return useQuery({
      queryKey: ["patient-healbot-conversations", user?.id],
      queryFn: async () => {
        if (!user?.id) throw new APIError.NotAuthenticatedUserError();

        const res = await PatientAPI.Healbot.fetchConversations(user.id);
        if (apiRequestHadError(res)) {
          throw new FetchChatbotConversationsError();
        }

        const data = res.data;
        return data.chats.map((chat) => ({
          id: chat._id,
          title: chat.title,
        }));
      },
      enabled: !!user?.id,
    });
  };

  const fetchConversation = (conversationId: string | null) => {
    return useQuery({
      queryKey: ["patient-healbot-conversation", user?.id, conversationId],
      queryFn: async () => {
        if (!user?.id) throw new APIError.NotAuthenticatedUserError();
        if (!conversationId) throw new InvalidInputError("conversationId");

        const res = await PatientAPI.Healbot.fetchConversation(conversationId);
        if (apiRequestHadError(res)) {
          throw new FetchChatbotConversationError();
        }

        const data = res.data;
        return {
          id: data.threadId,
          title: data.title,
          messages: data.history,
        };
      },
      enabled: !!user?.id && !!conversationId,
    });
  };

  const startConversation = () => {
    const mutation = useMutation<
      {
        threadId: string;
        title: string;
        response: string;
      },
      Error,
      { prompt: string } & OptimisticMutationCallback<{
        threadId: string;
        title: string;
        response: string;
      }>
    >({
      mutationFn: async ({ prompt }) => {
        const res = await PatientAPI.Healbot.startConversation(prompt);
        if (apiRequestHadError(res)) {
          throw new StartChatbotConversationError();
        }
        const data = res.data;
        return data;
      },

      onMutate: (vs) => {
        vs?.onMutate?.();
      },

      onSuccess: (data, vs) => {
        vs?.onSuccess?.(data);
      },

      onError: (error, vs) => {
        vs?.onError?.(error);
      },
    });

    return mutation;
  };

  const sendPrompt = () => {
    const mutation = useMutation<
      {
        threadId: string;
        title: string;
        response: string;
      },
      Error,
      { prompt: string; threadId: string } & OptimisticMutationCallback<{
        threadId: string;
        title: string;
        response: string;
      }>
    >({
      mutationFn: async ({ prompt, threadId }) => {
        const res = await PatientAPI.Healbot.sendPrompt(threadId, prompt);
        if (apiRequestHadError(res)) {
          throw new StartChatbotConversationError();
        }
        const data = res.data;
        return data;
      },

      onMutate: (vs) => {
        vs?.onMutate?.();
      },

      onSuccess: (data, vs) => {
        vs?.onSuccess?.(data);
      },

      onError: (error, vs) => {
        vs?.onError?.(error);
      },
    });

    return mutation;
  };

  return {
    fetchConversations,
    fetchConversation,
    startConversation,
    sendPrompt,
  };
};
