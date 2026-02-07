import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | MR Real StrongMan Gym",
  description: "Learn about MR Real StrongMan Gym's mission, values, and 5+ years of transforming lives in Trichy through fitness excellence.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
