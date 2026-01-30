"use client";

import { usePathname } from "next/navigation";
import { match } from "path-to-regexp";
import { PAGES } from "@/config/pages.config";
import { MenuItem } from "@/components/MenuItem";

export const ShopMenu = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6">
      <MenuItem
        menuItem={{ href: PAGES.SHOP, name: "SSR" }}
        isActive={!!match(PAGES.SHOP)(pathname)}
      />
      <MenuItem
        menuItem={{ href: PAGES.SSG, name: "SSG" }}
        isActive={!!match(PAGES.SSG)(pathname)}
      />
      <MenuItem
        menuItem={{ href: PAGES.ISR, name: "ISR" }}
        isActive={!!match(PAGES.ISR)(pathname)}
      />
    </nav>
  );
};
