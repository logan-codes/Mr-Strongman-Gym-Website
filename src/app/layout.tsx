import type { Metadata } from "next";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AiChatbot from "@/components/AiChatbot";

export const metadata: Metadata = {
  title: {
    default: "MR Real StrongMan | Best Fitness & Unisex Gym in Mannachanallur",
    template: "%s | MR Real StrongMan Gym",
  },
  description: "Join MR Real StrongMan, the premier fitness and unisex gym in Mannachanallur, Trichy. We offer expert coaching, top-tier equipment, personal training, and a supportive community.",
  keywords: ["Gym in Mannachanallur", "Fitness Center Trichy", "Unisex Gym Mannachanallur", "Personal Training", "Best Gym", "Weight Loss", "Bodybuilding", "Strength Training", "MR Real StrongMan", "Ladies Gym"],
  authors: [{ name: "MR Real StrongMan Gym" }],
  creator: "MR Real StrongMan Gym",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mrrealstrongman.com",
    title: "MR Real StrongMan | Best Fitness & Unisex Gym in Mannachanallur",
    description: "Join MR Real StrongMan, the premier fitness and unisex gym in Mannachanallur, Trichy. We offer expert coaching, top-tier equipment, personal training, and a supportive community.",
    siteName: "MR Real StrongMan Gym",
    images: [{
      url: "/logo/Logo.png", // Replace with a high-res image if available
      width: 800,
      height: 600,
      alt: "MR Real StrongMan Gym Logo"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MR Real StrongMan | Best Fitness & Unisex Gym in Mannachanallur",
    description: "Join MR Real StrongMan, the premier fitness and unisex gym in Mannachanallur, Trichy. We offer expert coaching, top-tier equipment, personal training, and a supportive community.",
    images: ["/logo/Logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo/Logo.png",
    apple: "/logo/Logo.png",
  },
  alternates: {
    canonical: "https://mrrealstrongman.com",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
        <FloatingWhatsApp />
        <AiChatbot />
      </body>
    </html>
  );
}