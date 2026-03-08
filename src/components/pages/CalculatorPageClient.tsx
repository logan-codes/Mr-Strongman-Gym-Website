"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BmiCalculator from "@/components/calculators/BmiCalculator";
import BodyFatCalculator from "@/components/calculators/BodyFatCalculator";
import CalorieNeedsCalculator from "@/components/calculators/CalorieNeedsCalculator";
import IdealWeightCalculator from "@/components/calculators/IdealWeightCalculator";
import ProteinIntakeCalculator from "@/components/calculators/ProteinIntakeCalculator";
import { useState } from "react";
import { Activity, Heart, Zap, Target, Dumbbell } from "lucide-react";

type CalculatorType = "bmi" | "bodyfat" | "calories" | "idealweight" | "protein";

const calculators = [
  {
    id: "bmi" as CalculatorType,
    name: "BMI Calculator",
    description: "Calculate your Body Mass Index",
    icon: Activity,
    component: BmiCalculator
  },
  {
    id: "bodyfat" as CalculatorType,
    name: "Body Fat Calculator",
    description: "Estimate your body fat percentage",
    icon: Heart,
    component: BodyFatCalculator
  },
  {
    id: "calories" as CalculatorType,
    name: "Calorie Needs",
    description: "Calculate daily caloric requirements",
    icon: Zap,
    component: CalorieNeedsCalculator
  },
  {
    id: "idealweight" as CalculatorType,
    name: "Ideal Weight",
    description: "Find your healthy weight range",
    icon: Target,
    component: IdealWeightCalculator
  },
  {
    id: "protein" as CalculatorType,
    name: "Protein Intake",
    description: "Calculate daily protein needs",
    icon: Dumbbell,
    component: ProteinIntakeCalculator
  }
];

export default function CalculatorPageClient() {
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType>("bmi");

  const currentCalculator = calculators.find(calc => calc.id === activeCalculator);
  const CurrentCalculatorComponent = currentCalculator?.component;

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 min-h-[100vh] bg-gradient-to-b from-background via-background to-muted/40">
        <section className="container mx-auto px-4 max-w-6xl">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary uppercase tracking-[0.15em]">
              <Activity className="h-4 w-4" />
              HEALTH CALCULATORS
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
              Track Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-foreground to-primary">
                Fitness Progress
              </span>
            </h1>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Use our comprehensive health calculators to monitor your fitness journey. 
              From BMI to protein intake, get personalized insights to help you reach your goals.
            </p>
          </div>

          {/* Calculator Toggle */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {calculators.map((calculator) => {
                const Icon = calculator.icon;
                return (
                  <button
                    key={calculator.id}
                    onClick={() => setActiveCalculator(calculator.id)}
                    className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                      activeCalculator === calculator.id
                        ? "bg-primary text-primary-foreground shadow-lg scale-105"
                        : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{calculator.name}</span>
                    <span className="sm:hidden">{calculator.name.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Calculator Description */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-semibold mb-2">{currentCalculator?.name}</h2>
            <p className="text-muted-foreground">{currentCalculator?.description}</p>
          </div>

          {/* Active Calculator */}
          {CurrentCalculatorComponent && <CurrentCalculatorComponent />}

          {/* Additional Information */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-muted/50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Scientifically Backed</h3>
              <p className="text-sm text-muted-foreground">
                All calculators use established medical formulas and research-based methods.
              </p>
            </div>
            <div className="rounded-lg bg-muted/50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Personalized Results</h3>
              <p className="text-sm text-muted-foreground">
                Get customized recommendations based on your personal metrics and goals.
              </p>
            </div>
            <div className="rounded-lg bg-muted/50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Goal Oriented</h3>
              <p className="text-sm text-muted-foreground">
                Whether you want to lose weight, build muscle, or maintain health, we've got you covered.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="rounded-lg bg-primary/5 border border-primary/20 p-8">
              <h3 className="text-xl font-semibold mb-3">Need Professional Guidance?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                While these calculators provide helpful estimates, our certified trainers and nutritionists 
                can create personalized plans tailored to your specific needs and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                  Book a Consultation
                </button>
                <button className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                  View Membership Plans
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
