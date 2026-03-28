import type { SidebarNavigationMenu } from "@/types/ui.ts";
import { MainContent } from "../shared/index.ts";
import { Sidebar } from "./Sidebar.tsx";

type AppLayoutProps = {
  menu: SidebarNavigationMenu;
};

export function AppLayout({ menu }: AppLayoutProps) {
  return (
    <div className="h-screen w-full flex bg-main-content-background">
      <Sidebar menu={menu} />
      <MainContent />
    </div>
  );
}
