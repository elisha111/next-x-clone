import Link from "next/link";
import type { IMenuItem } from "./menu.data";

interface Props {
  menuItem: IMenuItem;
  isActive: boolean;
}

export const MenuItem = (props: Props) => {
  const { menuItem, isActive } = props;

  return (
    <Link
      className={isActive ? "text-white" : "text-white/80"}
      href={menuItem.href}
    >
      {menuItem.name}
    </Link>
  );
};
