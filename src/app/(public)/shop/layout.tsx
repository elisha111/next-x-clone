"use client";

import dynamic from "next/dynamic";
import type { PropsWithChildren } from "react";

const DunamicShopMunu = dynamic(
  () => import("./ShopMenu").then((mod) => mod.ShopMenu),
  { ssr: false, loading: () => <div>Loading...</div> }
);

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="w-full ">
      <DunamicShopMunu />
      {children}
    </div>
  );
}
