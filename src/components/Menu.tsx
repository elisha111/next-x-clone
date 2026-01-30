"use client";

import { PAGES } from "@/config/pages.config";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Menu = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6">
      <Link
        className={pathname === PAGES.HOME ? "text-white" : "text-white/80"}
        href={PAGES.HOME}
      >
        Home
      </Link>
      <Link
        className={pathname === PAGES.EXPLORE ? "text-white" : "text-white/80"}
        href={PAGES.EXPLORE}
      >
        Explore
      </Link>
      <Link
        className={
          pathname === PAGES.PROFILE_FAKE ? "text-white" : "text-white/80"
        }
        href={PAGES.PROFILE_FAKE}
      >
        Profile
      </Link>
    </nav>
  );
};
