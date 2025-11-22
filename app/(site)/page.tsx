import Link from "next/link";


export default function LandingPage() {
return (
<main className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-white to-blue-100">
{/* Header */}
<header className="flex items-center justify-between px-8 py-5 border-b border-slate-200 bg-white/60 backdrop-blur-md sticky top-0 z-40">
<h1 className="text-2xl font-bold text-blue-700 tracking-tight">RiseGen Leads</h1>
<nav className="flex space-x-6 text-sm font-medium">
<Link href="/sign-in" className="text-slate-700 hover:text-blue-600 transition">Sign In</Link>
<Link href="/sign-up" className="text-blue-700 hover:text-blue-800 transition">Get Started</Link>
</nav>
</header>


{/* Hero */}
<section className="flex flex-col items-center text-center py-32 px-6">
<h2 className="text-5xl font-extrabold text-slate-800 mb-4 leading-tight">
AI-Powered Insurance Lead Generation
</h2>
<p className="text-lg text-slate-600 max-w-2xl mb-10">
Get verified, exclusive Final Expense and Medicare leads delivered directly to your CRM or inbox. Built for modern agents.
</p>
<Link
href="/sign-up"
className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition"
>
Start Generating Leads
</Link>
</section>


{/* Stats */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto py-16">
<div className="bg-white rounded-2xl shadow p-8 text-center">
<h3 className="text-4xl font-bold text-blue-600 mb-2">10,000+</h3>
<p className="text-slate-600 text-sm">Qualified Leads Delivered</p>
</div>
<div className="bg-white rounded-2xl shadow p-8 text-center">
<h3 className="text-4xl font-bold text-blue-600 mb-2">150+</h3>
<p className="text-slate-600 text-sm">Agents Nationwide</p>
</div>
<div className="bg-white rounded-2xl shadow p-8 text-center">
<h3 className="text-4xl font-bold text-blue-600 mb-2">98%</h3>
<p className="text-slate-600 text-sm">Verified Contact Accuracy</p>
</div>
</section>


{/* CTA */}
<section className="bg-blue-700 text-white py-20 text-center">
<h3 className="text-3xl font-bold mb-4">Ready to Scale Your Insurance Business?</h3>
<p className="text-blue-100 mb-8">Join top-performing agents using RiseGen to dominate their markets.</p>
<Link
href="/sign-up"
className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold text-lg transition"
>
Get Started Today
</Link>
</section>


{/* Footer */}
<footer className="py-10 text-center text-sm text-slate-500 border-t border-slate-200 bg-white">
© {new Date().getFullYear()} RiseGen Leads. All rights reserved.
</footer>
</main>
);
}
