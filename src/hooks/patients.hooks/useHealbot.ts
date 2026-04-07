import { APIError, PatientAPI } from "@/api/index.ts";
import { useAuthContext } from "@/context/auth.tsx";
import { InvalidInputError } from "@/errors/index.ts";
import { useQuery } from "@tanstack/react-query";

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

  return {
    fetchConversations,
    fetchConversation,
  };
};
