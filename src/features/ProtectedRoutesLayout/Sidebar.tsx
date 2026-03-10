import { cn } from "@/lib/utils.ts";
import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "../../components/shared/Logo.tsx";
import { NAVIGATION_MENU } from "../../constants/navigation.ts";

export function Sidebar() {
  const [active, setActive] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <aside className="w-full max-w-55 bg-[#1B9271] h-full rounded-r-2xl">
      <div className="px-4 py-4 flex items-center gap-2">
        <Logo color="white" size={50} />
        <h1 className="text-white text-2xl font-medium">Healio</h1>
      </div>

      <nav className="mt-4 space-y-6">
        {NAVIGATION_MENU.map((section) => (
          <section key={section.label} className="space-y-2">
            <h2 className="ml-4 uppercase text-muted-light font-inter font-medium text-xs">
              {section.label}
            </h2>

            <ul className="space-y-2 px-2">
              {section.items.map((item) => {
                const Icon = item.icon;
                const selected = active === item.to;

                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className={cn(
                        "group relative px-2 py-1 rounded-lg w-full flex items-center gap-2 transition-colors duration-100",
                        selected
                          ? "bg-nav-link-hover/50"
                          : "hover:bg-nav-link-hover/30",
                      )}
                    >
                      <span
                        className={cn(
                          "absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-full bg-white transition-all duration-200",
                          selected
                            ? "h-4 opacity-100"
                            : "h-0 opacity-0 group-hover:h-4 group-hover:opacity-40",
                        )}
                      />
                      <Icon className="text-white" size={20} />
                      <span className="text-white text-base">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </nav>
    </aside>
  );
}
