import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";


export default function DashboardPage() {
return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<Card>
<h3 className="text-lg font-semibold mb-2">Active Orders</h3>
<p className="text-4xl font-bold text-blue-600">12</p>
</Card>
<Card>
<h3 className="text-lg font-semibold mb-2">Total Leads Delivered</h3>
<p className="text-4xl font-bold text-blue-600">4,500</p>
</Card>
<Card>
<h3 className="text-lg font-semibold mb-2">Conversion Rate</h3>
<p className="text-4xl font-bold text-blue-600">38%</p>
</Card>
<Card>
<div className="flex justify-between items-center">
<div>
<h4 className="text-md font-semibold">Next Payout</h4>
<p className="text-slate-500 text-sm">Nov 30, 2025</p>
</div>
<Badge label="$1,200" />
</div>
</Card>
<Card>
<h4 className="text-md font-semibold mb-2">Recent Orders</h4>
<ul className="text-sm text-slate-700 space-y-1">
<li>#10123 — 25 FEX Leads — <Badge label="Processing" /></li>
<li>#10122 — 50 Medicare Leads — <Badge label="Completed" /></li>
</ul>
</Card>
<Card>
<h4 className="text-md font-semibold mb-3">Quick Actions</h4>
<div className="flex gap-3">
<Button>Order Leads</Button>
<Button>View All</Button>
</div>
</Card>
</div>
);
}
