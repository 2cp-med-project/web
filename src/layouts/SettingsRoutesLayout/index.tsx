import { SETTINGS_NAVIGATION_ITEMS } from "@/constants/navigation.ts";
import { Outlet } from "@tanstack/react-router";
import { SettingsNavigationList } from "./NavigationList.tsx";

export function SettingsRoutesLayout() {
  return (
    <section className="w-full h-full flex gap-4">
      <nav className="flex-1 space-y-2">
        <h1 className="pl-2 text-xl font-archivo text-gray-500">
          Paramètres généraux
        </h1>
        <SettingsNavigationList menu={SETTINGS_NAVIGATION_ITEMS} />
      </nav>
      <section className="flex-3">
        <Outlet />
      </section>
    </section>
  );
}
