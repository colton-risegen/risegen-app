import "./globals.css";
import { AuthProvider } from "./lib/auth";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { PathBasedHeader } from "./path-header";

export const metadata = {
  title: "RiseGen Leads",
  description: "Lead generation platform for insurance agents",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <AuthProvider>
          <PathBasedHeader />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
