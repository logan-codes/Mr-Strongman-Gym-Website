import type { Metadata } from "next";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "MR Real StrongMan - Fitness & Unisex Gym",
  description: "Join the strongest fitness community in town. Premium gym facilities, expert trainers, and diverse classes for all fitness levels.",
  icons: {
    icon: "logo/Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}