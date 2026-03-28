import type { SettingsNavigationItem } from "@/types/ui.ts";
import { Outlet } from "@tanstack/react-router";
import { SettingsNavigationList } from "./NavigationList.tsx";

type SettingsRoutesLayoutProps = {
  menu: SettingsNavigationItem[];
};

export function SettingsRoutesLayout({ menu }: SettingsRoutesLayoutProps) {
  return (
    <section className="w-full h-full flex gap-4">
      <nav className="flex-1 space-y-2">
        <h1 className="pl-2 text-xl font-archivo text-gray-500">
          Paramètres généraux
        </h1>
        <SettingsNavigationList menu={menu} />
      </nav>
      <section className="flex-3">
        <Outlet />
      </section>
    </section>
  );
}
