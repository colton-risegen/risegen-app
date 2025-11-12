"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem("risegen_user");
    if (saved) setUser(saved);
  }, []);

  const signIn = (email: string) => {
    localStorage.setItem("risegen_user", email);
    setUser(email);
    router.push("/dashboard/overview");
  };

  const signUp = (email: string) => {
    localStorage.setItem("risegen_user", email);
    setUser(email);
    router.push("/dashboard/overview");
  };

  const signOut = () => {
    localStorage.removeItem("risegen_user");
    setUser(null);
    router.push("/sign-in");
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
