import type { SettingsNavigationItem as TSettingsNavigationItem } from "@/types/ui.ts";
import { useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SettingsNavigationItem } from "./NavigationItem.tsx";

type SettingsNavigationListProps = {
  menu: TSettingsNavigationItem[];
};

export function SettingsNavigationList(props: SettingsNavigationListProps) {
  const [active, setActive] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const activeItem = props.menu.find((item) => item.regex.test(path));
    if (activeItem === undefined) return;
    setActive(activeItem.to);
  }, [location]);

  return (
      <ul className="space-y-2">
        {props.menu.map((item) => (
          <li key={item.label}>
            <SettingsNavigationItem {...item} selected={active === item.to} />
          </li>
        ))}
      </ul>
  );
}
