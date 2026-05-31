import { StartChatbotConversationError } from "@/api/errors/StartChatbotConversationError.ts";
import { APIError, PatientAPI } from "@/api/index.ts";
import { apiRequestHadError } from "@/api/types.ts";
import { useAuthContext } from "@/context/auth.tsx";
import { InvalidInputError } from "@/errors/index.ts";
import type { MutationCallback } from "@/types/mutation.ts";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useHealbot = () => {
  const { user } = useAuthContext();

  const fetchConversations = () => {
    return useQuery({
      queryKey: ["patient-healbot-conversations", user?.id],
      queryFn: async () => {
        if (!user?.id) throw new APIError.NotAuthenticatedUserError();
        return PatientAPI.Healbot.fetchConversations(user.id);
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
        return PatientAPI.Healbot.fetchConversation(user.id, conversationId);
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
      { prompt: string } & MutationCallback<string>
    >({
      mutationFn: async ({ prompt }) => {
        const res = await PatientAPI.Healbot.startConversation(prompt);
        if (apiRequestHadError(res)) {
          throw new StartChatbotConversationError();
        }
        const data = res.data;
        return data;
      },

      onSuccess: ({ threadId: id }, vs) => {
        vs?.onSuccess?.(id);
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
  };
};
