"use client"
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const routes = [
  {
    labels: "Dashboard",
    path: "/app/dashboard",
  },
  {
    labels: "Account",
    path: "/app/account",
  },
];

export default function AppHeader() {
  const activePathname=usePathname();
  return (
    <header className="flex justify-between items-center border-b border-white/40 p-2">
      <Logo />
      <nav>
        <ul className="flex justify-between items-center gap-3">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                className={cn("text-white/70 rounded-sm px-2 py-1 hover:text-white focus:text-white transition bg-black p-2 ",{
                  "text-white":route.path===activePathname
                })}
                href={route.path}
              >
                {route.labels}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
