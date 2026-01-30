"use client";

import { PAGES } from "@/config/pages.config";
import { useRouter } from "next/navigation";

export const ProfileButton = () => {
  const router = useRouter();

  return <button onClick={() => router.push(PAGES.HOME)}>Go to home</button>;
};
