import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | MR Real StrongMan Gym",
  description: "Take a virtual tour of MR Real StrongMan Gym's premium equipment, training areas, and facilities in Mannachanallur, Trichy.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
