import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "APEX GYM - Transform Your Body, Elevate Your Mind",
  description: "Join the strongest fitness community in town. Premium gym facilities, expert trainers, and diverse classes for all fitness levels.",
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
      </body>
    </html>
  );
}