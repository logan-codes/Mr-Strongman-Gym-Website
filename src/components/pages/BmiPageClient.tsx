 "use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Heart, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

type Unit = "metric" | "imperial";

function calculateBmi(height: number, weight: number, unit: Unit) {
  if (!height || !weight || height <= 0 || weight <= 0) return null;

  let heightMeters: number;
  let weightKg: number;

  if (unit === "metric") {
    heightMeters = height / 100;
    weightKg = weight;
  } else {
    heightMeters = height * 0.0254;
    weightKg = weight * 0.453592;
  }

  const bmi = weightKg / (heightMeters * heightMeters);
  return Number.isFinite(bmi) ? Number(bmi.toFixed(1)) : null;
}

function getBmiCategory(bmi: number | null) {
  if (bmi == null) return null;
  if (bmi < 18.5) return { label: "Malnourished", color: "text-yellow-500" };
  if (bmi < 25) return { label: "Healthy", color: "text-emerald-500" };
  return { label: "Overweight", color: "text-red-500" };
}

export default function BmiPageClient() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState<Unit>("metric");

  const numericHeight = parseFloat(height);
  const numericWeight = parseFloat(weight);
  const bmi = calculateBmi(numericHeight, numericWeight, unit);
  const category = getBmiCategory(bmi);

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 min-h-[100vh] bg-gradient-to-b from-background via-background to-muted/40">
        <section className="container mx-auto px-4 max-w-4xl">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary uppercase tracking-[0.15em]">
              <Activity className="h-4 w-4" />
              BMI CALCULATOR
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
              Know Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-foreground to-primary">
                Body Score
              </span>
            </h1>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Quickly check your Body Mass Index and see whether you are in the
              malnourished, healthy, or overweight range. This is a helpful
              starting point before you begin your fitness journey with us.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
            <Card className="glass-card border-white/10 shadow-lg">
              <CardHeader>
                <CardTitle>Calculate Your BMI</CardTitle>
                <CardDescription>
                  Enter your height and weight to instantly see your BMI value
                  and category.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-2 rounded-lg bg-muted p-1 text-xs font-medium">
                  <Button
                    type="button"
                    onClick={() => setUnit("metric")}
                    variant={unit === "metric" ? "default" : "ghost"}
                    size="sm"
                    className={`flex-1 ${
                      unit === "metric"
                        ? "shadow-sm"
                        : "text-muted-foreground"
                    }`}
                  >
                    Metric (cm, kg)
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setUnit("imperial")}
                    variant={unit === "imperial" ? "default" : "ghost"}
                    size="sm"
                    className={`flex-1 ${
                      unit === "imperial"
                        ? "shadow-sm"
                        : "text-muted-foreground"
                    }`}
                  >
                    Imperial (in, lbs)
                  </Button>
                </div>

                <form
                  className="space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="height">
                        Height{" "}
                        <span className="text-xs text-muted-foreground">
                          {unit === "metric"
                            ? "(in centimeters)"
                            : "(in inches)"}
                        </span>
                      </Label>
                      <Input
                        id="height"
                        type="number"
                        min="0"
                        step="0.1"
                        inputMode="decimal"
                        placeholder={unit === "metric" ? "e.g. 170" : "e.g. 67"}
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weight">
                        Weight{" "}
                        <span className="text-xs text-muted-foreground">
                          {unit === "metric"
                            ? "(in kilograms)"
                            : "(in pounds)"}
                        </span>
                      </Label>
                      <Input
                        id="weight"
                        type="number"
                        min="0"
                        step="0.1"
                        inputMode="decimal"
                        placeholder={unit === "metric" ? "e.g. 70" : "e.g. 154"}
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                      />
                    </div>
                  </div>
                </form>

                <p className="text-xs text-muted-foreground">
                  Note: BMI is a general guideline and does not account for
                  muscle mass, bone density, or body composition. For a detailed
                  assessment, talk to our trainers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5 relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Your Result
                </CardTitle>
                <CardDescription>
                  Based on the World Health Organization (WHO) BMI ranges.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <div className="flex items-end gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
                      BMI VALUE
                    </div>
                    <div className="text-4xl md:text-5xl font-black">
                      {bmi ?? "--"}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
                      CATEGORY
                    </div>
                    <div
                      className={`text-lg font-semibold ${
                        category?.color ?? ""
                      }`}
                    >
                      {category?.label ?? "—"}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between rounded-md bg-background/60 px-3 py-2">
                    <span className="font-medium">Malnourished</span>
                    <span className="text-muted-foreground">&lt; 18.5</span>
                  </div>
                  <div className="flex items-center justify-between rounded-md bg-background/60 px-3 py-2">
                    <span className="font-medium">Healthy</span>
                    <span className="text-muted-foreground">18.5 - 24.9</span>
                  </div>
                  <div className="flex items-center justify-between rounded-md bg-background/60 px-3 py-2">
                    <span className="font-medium">Overweight</span>
                    <span className="text-muted-foreground">&ge; 25</span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground">
                  Use this result as a starting point. Our team at MR Real
                  StrongMan can help you move towards the healthy range with a
                  personalized workout and nutrition plan.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

