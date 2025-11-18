"use client";
import Link from "next/link";
import { useAuth } from "../lib/auth";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { signOut } = useAuth();

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white p-6 border-r">
        <h2 className="text-2xl font-bold mb-6">RiseGen</h2>
        <nav className="space-y-2">
          <Link href="/dashboard/overview" className="block hover:text-blue-600">Overview</Link>
          <Link href="/dashboard/leads" className="block hover:text-blue-600">Leads</Link>
          <Link href="/dashboard/orders" className="block hover:text-blue-600">Orders</Link>
          <Link href="/dashboard/account" className="block hover:text-blue-600">Account</Link>
          <button
            onClick={signOut}
            className="mt-6 text-red-600 hover:text-red-800"
          >
            Sign Out
          </button>
        </nav>
      </aside>
      <main className="flex-1 p-10">{children}</main>
    </div>
  );
}
