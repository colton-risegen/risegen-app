"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "../../lib/auth";

// Define a lightweight type for order data
type Order = {
  id: string;
  amount: number;
  currency: string;
  status: string;
  createdAt: string;
};

export default function OrdersPage() {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Temporary mock fetch until we connect Postgres + Stripe
  useEffect(() => {
    setTimeout(() => {
      setOrders([
        {
          id: "ORD-1001",
          amount: 999,
          currency: "USD",
          status: "Paid",
          createdAt: "2025-11-13T10:00:00Z",
        },
        {
          id: "ORD-1002",
          amount: 499,
          currency: "USD",
          status: "Pending",
          createdAt: "2025-11-14T15:30:00Z",
        },
      ]);
      setLoading(false);
    }, 600);
  }, []);

  if (loading) return <div className="p-6 text-slate-500">Loading orders...</div>;

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold text-slate-800">Your Orders</h1>
        <p className="text-sm text-slate-500">
          Logged in as <span className="font-medium text-slate-700">{user?.email}</span>
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="text-slate-500 text-sm">No orders found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-slate-200 rounded-lg">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-slate-600">Order ID</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-slate-600">Amount</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-slate-600">Status</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-slate-600">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-t border-slate-200">
                  <td className="px-4 py-2 text-sm text-slate-800">{order.id}</td>
                  <td className="px-4 py-2 text-sm text-slate-800">
                    ${(order.amount / 100).toFixed(2)} {order.currency}
                  </td>
                  <td
                    className={`px-4 py-2 text-sm font-medium ${
                      order.status === "Paid"
                        ? "text-green-600"
                        : order.status === "Pending"
                        ? "text-yellow-600"
                        : "text-slate-600"
                    }`}
                  >
                    {order.status}
                  </td>
                  <td className="px-4 py-2 text-sm text-slate-600">
                    {new Date(order.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
