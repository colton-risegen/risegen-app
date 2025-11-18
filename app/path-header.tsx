"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export function PathBasedHeader() {
  const pathname = usePathname();

  // Hide header for all dashboard pages
  if (pathname.startsWith("/dashboard")) {
    return null;
  }

  return (
    <header className="w-full border-b border-slate-200 bg-white flex items-center justify-between px-6 py-3">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/assets/logo.svg" alt="RiseGen Logo" width={26} height={26} />
        <span className="font-semibold text-slate-800">RiseGen</span>
      </Link>
      <div className="flex items-center gap-3">
        <Link
          href="/sign-in"
          className="text-sm font-medium text-slate-600 hover:text-blue-600"
        >
          Log In
        </Link>
        <Link
          href="/sign-up"
          className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
}
