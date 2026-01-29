import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
      <Link className="flex items-center gap-3" rel="stylesheet" href="/">
        <Image src="/x-logo.svg" alt="X logo" width={28} height={28} priority />
      </Link>
      <nav className="flex gap-6 text-white/80">
        <Link href="/">Home</Link>
        <Link href="/">Explore</Link>
        <Link href="/">Profile</Link>
      </nav>
    </header>
  );
};
