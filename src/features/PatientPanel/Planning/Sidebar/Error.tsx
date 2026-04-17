import { AlertCircle } from "lucide-react";

export function PlanningSidebarError() {
  return (
    <aside className="flex min-h-96 items-center justify-center rounded-[18px] border border-[#d8efe8] bg-white px-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="rounded-full bg-red-100 p-3">
          <AlertCircle className="text-red-500" size={20} />
        </div>
        <div>
          <p className="text-lg font-medium text-[#33403c]">
            Impossible de charger le panneau
          </p>
          <p className="mt-1 text-sm text-muted">
            Les actions et rappels ne sont pas disponibles.
          </p>
        </div>
      </div>
    </aside>
  );
}
