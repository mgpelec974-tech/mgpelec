import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "MGPElec — Électricien général à La Réunion",
  description:
    "Installation électrique, rénovation, dépannage et bornes de recharge IRVE à La Réunion.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className="flex min-h-screen flex-col antialiased lg:flex-row">
        <Sidebar />
        <div className="flex flex-1 flex-col lg:pl-64">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
