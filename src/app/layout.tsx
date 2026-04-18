import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kandudi Specialist Hospital and Maternity | All For Life",
  description: "Kandudi Specialist Hospital and Maternity is a private healthcare facility dedicated to delivering comprehensive, patient-centered medical care in Anambra, Nigeria.",
  keywords: ["hospital", "maternity", "obstetrics", "gynaecology", "healthcare", "Anambra", "Nigeria", "Dr. Emmanuel Monago"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
