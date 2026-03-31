import { AdminAPI } from "@/api/index.ts";
import { APIError } from "@/api/index.ts";
import { useAuthContext } from "@/context/auth.tsx";
import { useQuery } from "@tanstack/react-query";

export const useDashboard = () => {
  const { user } = useAuthContext();
  console.log("USER IN HOOK:", user);  // ← add this
  const query = useQuery({
    queryKey: ["admin-dashboard", user?.id],
    queryFn: async () => {
      if (!user?.id) throw new APIError.NotAuthenticatedUserError();
      const data = await AdminAPI.Dashboard.fetch(user?.id);
      return data;
    },
    enabled: !!user?.id,
  });
  return query;
};