import Image from "next/image";
import Link from "next/link";
import { Menu } from "./Menu";

export const Header = () => {
  return (
    <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
      <Link className="flex items-center gap-3" rel="stylesheet" href="/">
        <Image src="/x-logo.svg" alt="X logo" width={28} height={28} priority />
      </Link>
      <Menu />
    </header>
  );
};
