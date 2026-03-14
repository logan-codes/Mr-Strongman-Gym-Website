import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gym Timings & Schedule",
  description: "Find the best time to workout. MR Real StrongMan Gym offers convenient hours from 5:00 AM to 9:30 PM, including dedicated ladies-only hours.",
};

export default function TimingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
