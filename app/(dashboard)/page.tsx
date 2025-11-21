import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';


export default function DashboardPage() {
return (
<div className="space-y-8">
<h2 className="text-3xl font-semibold">Dashboard Overview</h2>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
<Card>
<h3 className="text-lg font-semibold">Total Orders</h3>
<p className="text-3xl font-bold mt-2">48</p>
<Badge text="+12%" type="success" />
</Card>
<Card>
<h3 className="text-lg font-semibold">Total Leads</h3>
<p className="text-3xl font-bold mt-2">1,230</p>
<Badge text="+8%" type="success" />
</Card>
<Card>
<h3 className="text-lg font-semibold">Active Leads</h3>
<p className="text-3xl font-bold mt-2">320</p>
<Badge text="+5 today" type="success" />
</Card>
<Card>
<h3 className="text-lg font-semibold">Conversion Rate</h3>
<p className="text-3xl font-bold mt-2">23.4%</p>
<Badge text="↑1.2%" type="success" />
</Card>
</div>
<div className="grid md:grid-cols-2 gap-6">
<Card>
<h3 className="text-lg font-semibold mb-2">View Orders</h3>
<p className="text-sm mb-4 text-slate-600">Track purchases and billing history.</p>
<Button variant="primary">Go to Orders</Button>
</Card>
<Card>
<h3 className="text-lg font-semibold mb-2">Manage Leads</h3>
<p className="text-sm mb-4 text-slate-600">Review and manage your active leads.</p>
<Button variant="secondary">Go to Leads</Button>
</Card>
</div>
</div>
);
}
