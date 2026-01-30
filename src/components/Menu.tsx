"use client";

import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { MENU } from "./menu.data";
import { MenuItem } from "./MenuItem";
import { match } from "path-to-regexp";

export const Menu = () => {
  const pathname = usePathname();

  // root folder
  // const segment = useSelectedLayoutSegment()

  return (
    <nav className="flex gap-6">
      {MENU.map((menuItem) => (
        <MenuItem
          key={menuItem.name}
          menuItem={menuItem}
          isActive={!!match(menuItem.href)(pathname)}
        />
      ))}
    </nav>
  );
};
