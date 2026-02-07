import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gym Timings | MR Real StrongMan Gym",
  description: "Check MR Real StrongMan Gym's training schedule. Morning & evening sessions available. Women's exclusive hours from 10 AM - 4 PM.",
};

export default function TimingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
