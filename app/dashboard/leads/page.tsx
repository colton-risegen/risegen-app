"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "../../lib/auth";

type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: "New" | "Delivered" | "In Progress" | "Closed";
  createdAt: string;
};

export default function LeadsPage() {
  const { user } = useAuth();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<Lead["status"] | "All">("All");

  // 🔹 Mock Data for Now (will be replaced with API fetch)
  useEffect(() => {
    setTimeout(() => {
      setLeads([
        {
          id: "LD-2001",
          name: "John Davis",
          email: "john.davis@email.com",
          phone: "555-789-2345",
          status: "Delivered",
          createdAt: "2025-11-14T09:00:00Z",
        },
        {
          id: "LD-2002",
          name: "Sarah Kim",
          email: "sarah.kim@email.com",
          phone: "555-983-1122",
          status: "In Progress",
          createdAt: "2025-11-14T12:30:00Z",
        },
        {
          id: "LD-2003",
          name: "David Lopez",
          email: "david.lopez@email.com",
          phone: "555-612-9090",
          status: "Closed",
          createdAt: "2025-11-13T17:15:00Z",
        },
      ]);
      setLoading(false);
    }, 500);
  }, []);

  const filteredLeads =
    filter === "All" ? leads : leads.filter((lead) => lead.status === filter);

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-slate-800">Leads</h1>
        <div className="text-sm text-slate-500">
          Logged in as <span className="font-medium text-slate-700">{user?.email}</span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-4">
        {["All", "New", "Delivered", "In Progress", "Closed"].map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s as any)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium border ${
              filter === s
                ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                : "bg-white text-slate-700 border-slate-200 hover:bg-blue-50"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Table */}
      {loading ? (
        <div className="p-6 text-slate-500">Loading leads...</div>
      ) : filteredLeads.length === 0 ? (
        <div className="text-slate-500 text-sm">No leads found for this filter.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-slate-200 rounded-lg">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-slate-600">Lead ID</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-slate-600">Name</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-slate-600">Email</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-slate-600">Phone</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-slate-600">Status</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-slate-600">Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="border-t border-slate-200">
                  <td className="px-4 py-2 text-sm text-slate-800">{lead.id}</td>
                  <td className="px-4 py-2 text-sm text-slate-800">{lead.name}</td>
                  <td className="px-4 py-2 text-sm text-slate-800">{lead.email}</td>
                  <td className="px-4 py-2 text-sm text-slate-800">{lead.phone}</td>
                  <td>
                    <span
                      className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
                        lead.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : lead.status === "In Progress"
                          ? "bg-yellow-100 text-yellow-700"
                          : lead.status === "Closed"
                          ? "bg-slate-200 text-slate-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-sm text-slate-600">
                    {new Date(lead.createdAt).toLocaleString()}
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
