export function Card({ children }: { children: React.ReactNode }) {
return <div className="rounded-2xl shadow-sm border border-slate-200 bg-white p-4">{children}</div>;
}


// components/ui/Badge.tsx
// ------------------------
export function Badge({ label }: { label: string }) {
return <span className="inline-block rounded-full bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1">{label}</span>;
}


// components/ui/Button.tsx
// -------------------------
export function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
return (
<button
{...props}
className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
>
{children}
</button>
);
}
