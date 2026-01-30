import type { PropsWithChildren } from "react";
import { ShopMenu } from "./ShopMenu";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="w-full ">
      <ShopMenu />
      {children}
    </div>
  );
}
