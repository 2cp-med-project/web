import { ROLE } from "@/constants/index.ts";
import { useAdminDashboardContext } from "./context.tsx";

const roleStyles: Record<string, string> = {
  [ROLE.PATIENT]: "bg-blue-100 text-blue-700",
  [ROLE.DOCTOR]: "bg-green-100 text-green-700",
  [ROLE.ADMIN]: "bg-purple-100 text-purple-700",
};

const roleLabels: Record<string, string> = {
  [ROLE.PATIENT]: "Patient",
  [ROLE.DOCTOR]: "Médecin",
  [ROLE.ADMIN]: "Admin",
};

export function RecentUsers() {
  const { recentUsers, isLoading } = useAdminDashboardContext();

  if (isLoading)
    return <div className="bg-white rounded-2xl p-4 shadow-sm animate-pulse h-32" />;

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-base">Utilisateurs récents</h2>
        <button className="text-xs text-green-600 hover:underline">Voir tout</button>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-400 text-xs border-b border-black/5">
            <th className="pb-2 font-medium">Nom</th>
            <th className="pb-2 font-medium">Rôle</th>
            <th className="pb-2 font-medium">Inscrit</th>
            <th className="pb-2 font-medium">Statut</th>
          </tr>
        </thead>
        <tbody>
          {recentUsers.map((user) => (
            <tr key={user.id} className="border-b border-black/5 last:border-none">
              <td className="py-3 font-medium">{user.fullname}</td>
              <td className="py-3">
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${roleStyles[user.role] ?? "bg-gray-100 text-gray-600"}`}>
                  {roleLabels[user.role] ?? user.role}
                </span>
              </td>
              <td className="py-3 text-gray-400">{user.joinedDate}</td>
              <td className="py-3">
                {user.status === "active" ? (
                  <span className="flex items-center gap-1 text-green-600 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                    Actif
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-yellow-600 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 inline-block" />
                    En attente
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}