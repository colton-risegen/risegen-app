import { ReactNode } from 'react';
import Link from 'next/link';


export default function DashboardLayout({ children }: { children: ReactNode }) {
return (
<div className="flex min-h-screen bg-brand-gray-light">
<aside className="w-64 bg-white border-r border-slate-200 p-6 space-y-4">
<h1 className="text-2xl font-bold text-brand-blue">RiseGen</h1>
<p className="text-xs uppercase text-brand-gray-dark">AI‑Powered</p>
<nav className="mt-6 space-y-2">
<Link href="/dashboard" className="block hover:text-brand-blue">Overview</Link>
<Link href="/orders" className="block hover:text-brand-blue">Orders</Link>
<Link href="/leads" className="block hover:text-brand-blue">Leads</Link>
<Link href="/profile" className="block hover:text-brand-blue">Profile</Link>
</nav>
</aside>
<main className="flex-1 p-8 space-y-6">
{children}
</main>
</div>
);
}
