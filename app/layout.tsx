import "./globals.css";
import { AuthProvider } from "./lib/auth";


export const metadata = {
  title: "RiseGen Leads",
  description: "Lead generation platform for insurance agents",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
