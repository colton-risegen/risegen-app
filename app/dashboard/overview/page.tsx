"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "../../lib/auth";

export default function OverviewPage() {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalLeads: 0,
    activeLeads: 0,
    conversionRate: 0,
  });

  useEffect(() => {
    // Simulate fetching metrics from DB
    setTimeout(() => {
      setStats({
        totalOrders: 52,
        totalLeads: 178,
        activeLeads: 42,
        conversionRate: 23.4,
      });
    }, 500);
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">Dashboard Overview</h1>
          <p className="text-slate-500 text-sm">
            Welcome back, <span className="font-medium text-slate-700">{user?.email}</span>
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500 mb-1">Total Orders</p>
          <p className="text-3xl font-bold text-slate-800">{stats.totalOrders}</p>
          <p className="text-xs text-green-600 mt-1">↑ 12% this month</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500 mb-1">Total Leads</p>
          <p className="text-3xl font-bold text-slate-800">{stats.totalLeads}</p>
          <p className="text-xs text-blue-600 mt-1">↑ 8% this week</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500 mb-1">Active Leads</p>
          <p className="text-3xl font-bold text-slate-800">{stats.activeLeads}</p>
          <p className="text-xs text-yellow-600 mt-1">+3 new today</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500 mb-1">Conversion Rate</p>
          <p className="text-3xl font-bold text-slate-800">{stats.conversionRate}%</p>
          <p className="text-xs text-slate-500 mt-1">Based on past 30 days</p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-6">
        <a
          href="/dashboard/orders"
          className="group border border-slate-200 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition"
        >
          <h2 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600">
            View Orders →
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Track purchases, billing history, and subscription details.
          </p>
        </a>

        <a
          href="/dashboard/leads"
          className="group border border-slate-200 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition"
        >
          <h2 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600">
            Manage Leads →
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Review and manage your active leads and delivery status.
          </p>
        </a>

        <a
          href="/dashboard/profile"
          className="group border border-slate-200 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition"
        >
          <h2 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600">
            Account Settings →
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Update your account, view profile, or sign out.
          </p>
        </a>
      </div>
    </div>
  );
}
