import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gym Gallery",
  description: "View our state-of-the-art gym equipment, spacious workout areas, and training facilities at MR Real StrongMan Gym, Mannachanallur.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
