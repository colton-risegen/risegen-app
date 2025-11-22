export function Badge({ type = 'success', text }: { type?: 'success' | 'alert'; text: string }) {
const colors = {
success: 'bg-accent-green',
alert: 'bg-accent-amber',
};
return (
<span className={`text-white ${colors[type]} rounded-full px-2 py-1 text-xs font-medium`}>{text}</span>
);
}
