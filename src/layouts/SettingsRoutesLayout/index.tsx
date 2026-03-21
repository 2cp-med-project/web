import { SettingsUI } from "@/constants/ui/index.ts";
import { Outlet } from "@tanstack/react-router";
import { SettingsNavigationItem } from "./NavigationItem.tsx";

export function SettingsRoutesLayout() {
  return (
    <section className="w-full h-full flex gap-4">
      <nav className="flex-1 space-y-2">
        <h1 className="pl-2 text-xl font-archivo text-gray-500">
          Paramètres généraux
        </h1>
        <ul className="space-y-2">
          {SettingsUI.navigationItems.map((item) => (
            <li key={item.label}>
              <SettingsNavigationItem {...item} />
            </li>
          ))}
        </ul>
      </nav>
      <section className="flex-3">
        <Outlet />
      </section>
    </section>
  );
}
