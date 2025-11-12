"use client";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to RiseGen Leads</h1>
      <p className="text-gray-600 mb-10 text-center max-w-md">
        The smarter way to generate and manage verified insurance leads.
      </p>
      <div className="flex space-x-4">
        <Link href="/sign-up" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Get Started
        </Link>
        <Link href="/sign-in" className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100">
          Sign In
        </Link>
      </div>
    </main>
  );
}
