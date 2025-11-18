"use client";

import React from "react";
import { useAuth } from "../../lib/auth";

export default function ProfilePage() {
  const { user, signOut } = useAuth();

  if (!user) return <div className="p-6">Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-xl shadow-sm p-6">
      <h1 className="text-xl font-semibold text-slate-800 mb-4">Account Information</h1>

      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-slate-500">Email</label>
          <p className="mt-1 text-slate-800">{user.email}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-500">Password</label>
          <p className="mt-1 text-slate-400 italic">•••••••• (hidden for security)</p>
        </div>
      </div>

      <div className="mt-6 border-t border-slate-200 pt-4">
        <button
          onClick={signOut}
          className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
