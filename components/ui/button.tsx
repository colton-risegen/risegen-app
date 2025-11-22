'use client';
import { cn } from '@/lib/utils';


export function Button({
children,
variant = 'primary',
className,
...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' }) {
const base = 'rounded-lg px-5 py-2 font-semibold transition';
const variants = {
primary: 'bg-brand-blue text-white hover:bg-brand-blue-light',
secondary: 'border border-brand-blue text-brand-blue hover:bg-brand-blue-light hover:text-white',
};
return (
<button className={cn(base, variants[variant], className)} {...props}>
{children}
</button>
);
}
