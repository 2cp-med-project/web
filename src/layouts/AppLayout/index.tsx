import { MainContent } from "../shared/index.ts";
import { Sidebar } from "./Sidebar.tsx";

export function AppLayout() {
  return (
    <div className="h-screen w-full flex bg-main-content-background">
      <Sidebar />
      <MainContent />
    </div>
  );
}
