"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "../lib/auth";
import Image from "next/image";

const navItems = [
  { name: "Overview", href: "/dashboard/overview" },
  { name: "Orders", href: "/dashboard/orders" },
  { name: "Leads", href: "/dashboard/leads" },
  { name: "Profile", href: "/dashboard/profile" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50 flex text-slate-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
        {/* Logo Section */}
        <div className="px-6 py-5 border-b border-slate-200 flex items-center gap-2">
          <Image
            src="/assets/logo.svg"
            alt="RiseGen Logo"
            width={26}
            height={26}
            className="rounded"
          />
          <Link
            href="/dashboard/overview"
            className="text-xl font-bold tracking-tight text-slate-800 hover:text-blue-700"
          >
            RiseGen
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Sign Out */}
        <div className="p-4 border-t border-slate-200">
          <button
            onClick={signOut}
            className="w-full px-3 py-2 text-sm font-semibold text-red-600 border border-red-300 rounded-lg hover:bg-red-50"
          >
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-6 sticky top-0 z-40">
          <h1 className="text-lg font-semibold tracking-tight text-slate-800 capitalize">
            {pathname.split("/").slice(-1)[0].replace("-", " ")}
          </h1>
          <div className="text-sm text-slate-600">
            Logged in as <span className="font-medium text-slate-800">{user?.email}</span>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-6">{children}</div>
      </main>
    </div>
  );
}
