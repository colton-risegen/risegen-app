"use client";
import { useAuth } from "../../lib/auth";
import { useState } from "react";

export default function SignUpPage() {
  const { signUp } = useAuth();
  const [email, setEmail] = useState("");

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Create Account</h1>
      <input
        className="border border-gray-300 p-2 rounded w-64 mb-4"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        onClick={() => signUp(email)}
      >
        Sign Up
      </button>
    </main>
  );
}
