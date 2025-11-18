"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type User = { email: string; password: string };

interface AuthContextType {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
    setReady(true);
  }, []);

  const signIn = async (email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const found = users.find(
      (u: User) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (!found) {
      alert("Invalid credentials");
      return;
    }
    localStorage.setItem("user", JSON.stringify(found));
    setUser(found);
    router.replace("/dashboard/overview");
  };

  const signUp = async (email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const existing = users.find(
      (u: User) => u.email.toLowerCase() === email.toLowerCase()
    );
    if (existing) {
      alert("Account already exists");
      return;
    }
    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
    router.replace("/dashboard/overview");
  };

  const signOut = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.replace("/sign-in");
  };

  if (!ready) return null;

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
