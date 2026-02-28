import { Avatar } from "@radix-ui/themes";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Bell } from "lucide-react";
import { Sidebar } from "../../components/Sidebar.tsx";

export const Route = createFileRoute("/_app")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="h-screen w-full flex bg-main-content-background">
      <Sidebar />

      <main className="flex-1 flex flex-col">
        <header className="flex items-center justify-end px-8 py-4 bg-[#E9F7F3] border-b border-b-black/10">
          <nav>
            <ul className="flex items-center gap-2">
              <li>
                <button
                  type="button"
                  className="group p-2 hover:bg-gray-300 rounded-xl transition-colors duration-100 focus:outline-none focus:ring-2 focus:ring-black/40"
                >
                  <Bell
                    className="text-black/30 group-hover:text-black/60 transition-colors duration-100"
                    size={20}
                  />
                </button>
              </li>

              <li>
                <Avatar src="nothing" fallback="A" />
              </li>
            </ul>
          </nav>
        </header>

        <section className="px-4 py-4 flex-1 overflow-y-auto">
          <Outlet />
        </section>
      </main>
    </div>
  );
}
