import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Discover the story of MR Real StrongMan Gym. With over 5 years of experience in Mannachanallur, Trichy, we are committed to providing premium fitness services for everyone.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
