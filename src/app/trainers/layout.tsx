import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Trainers | MR Real StrongMan Gym",
  description: "Meet our certified fitness trainers including V.Ajitha for women's exclusive sessions. Professional guidance for all fitness levels.",
};

export default function TrainersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
