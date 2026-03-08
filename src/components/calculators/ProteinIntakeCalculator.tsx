"use client";

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
import { Heart, Activity, Dumbbell } from "lucide-react";

type Unit = "metric" | "imperial";
type ActivityLevel = "sedentary" | "light" | "moderate" | "active" | "athlete";

interface ProteinResult {
  level: string;
  multiplier: number;
  grams: number;
  calories: number;
  description: string;
}

function calculateProteinIntake(
  weight: number,
  activityLevel: ActivityLevel,
  unit: Unit
): ProteinResult[] {
  if (!weight || weight <= 0) return [];

  let weightKg: number;
  if (unit === "metric") {
    weightKg = weight;
  } else {
    weightKg = weight * 0.453592;
  }

  const proteinCaloriesPerGram = 4;

  const results: ProteinResult[] = [
    {
      level: "Sedentary",
      multiplier: 0.8,
      grams: weightKg * 0.8,
      calories: weightKg * 0.8 * proteinCaloriesPerGram,
      description: "Minimal physical activity"
    },
    {
      level: "Light Activity",
      multiplier: 1.2,
      grams: weightKg * 1.2,
      calories: weightKg * 1.2 * proteinCaloriesPerGram,
      description: "Light exercise 1-3 days/week"
    },
    {
      level: "Moderate Activity",
      multiplier: 1.6,
      grams: weightKg * 1.6,
      calories: weightKg * 1.6 * proteinCaloriesPerGram,
      description: "Moderate exercise 3-5 days/week"
    },
    {
      level: "Active",
      multiplier: 2.0,
      grams: weightKg * 2.0,
      calories: weightKg * 2.0 * proteinCaloriesPerGram,
      description: "Hard exercise 6-7 days/week"
    },
    {
      level: "Athlete",
      multiplier: 2.4,
      grams: weightKg * 2.4,
      calories: weightKg * 2.4 * proteinCaloriesPerGram,
      description: "Very intense training or endurance sports"
    }
  ];

  return results;
}

function getRecommendedResult(results: ProteinResult[], activityLevel: ActivityLevel): ProteinResult | null {
  if (results.length === 0) return null;
  
  const levelMap = {
    "sedentary": 0,
    "light": 1,
    "moderate": 2,
    "active": 3,
    "athlete": 4
  };
  
  return results[levelMap[activityLevel]];
}

interface ProteinIntakeCalculatorProps {
  className?: string;
}

export default function ProteinIntakeCalculator({ className }: ProteinIntakeCalculatorProps) {
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>("moderate");
  const [unit, setUnit] = useState<Unit>("metric");

  const numericWeight = parseFloat(weight);
  const results = calculateProteinIntake(numericWeight, activityLevel, unit);
  const recommended = getRecommendedResult(results, activityLevel);

  return (
    <div className={`grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start ${className}`}>
      <Card className="glass-card border-white/10 shadow-lg">
        <CardHeader>
          <CardTitle>Calculate Your Protein Needs</CardTitle>
          <CardDescription>
            Determine your daily protein requirements based on body weight and activity level.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex gap-2 rounded-lg bg-muted p-1 text-xs font-medium">
            <button
              type="button"
              onClick={() => setUnit("metric")}
              className={`flex-1 rounded-md px-3 py-2 transition ${
                unit === "metric"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground"
              }`}
            >
              Metric (kg)
            </button>
            <button
              type="button"
              onClick={() => setUnit("imperial")}
              className={`flex-1 rounded-md px-3 py-2 transition ${
                unit === "imperial"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground"
              }`}
            >
              Imperial (lbs)
            </button>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="weight">
                Body Weight ({unit === "metric" ? "kilograms" : "pounds"})
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
          </form>

          <div className="space-y-3">
            <Label>Activity Level</Label>
            <div className="space-y-2">
              {[
                { value: "sedentary", label: "Sedentary", description: "Minimal physical activity" },
                { value: "light", label: "Light Activity", description: "Light exercise 1-3 days/week" },
                { value: "moderate", label: "Moderate Activity", description: "Moderate exercise 3-5 days/week" },
                { value: "active", label: "Active", description: "Hard exercise 6-7 days/week" },
                { value: "athlete", label: "Athlete", description: "Very intense training or endurance sports" }
              ].map((level) => (
                <button
                  key={level.value}
                  type="button"
                  onClick={() => setActivityLevel(level.value as ActivityLevel)}
                  className={`w-full text-left rounded-md px-3 py-2 text-sm transition ${
                    activityLevel === level.value
                      ? "bg-background text-foreground shadow-sm border border-primary/20"
                      : "text-muted-foreground hover:bg-background/50"
                  }`}
                >
                  <div className="font-medium">{level.label}</div>
                  <div className="text-xs text-muted-foreground">
                    {level.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            Note: Protein needs are based on current scientific recommendations. Individual requirements may vary based on goals, metabolism, and training intensity.
          </p>
        </CardContent>
      </Card>

      <Card className="border-primary/20 bg-primary/5 relative overflow-hidden">
        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Dumbbell className="h-5 w-5 text-primary" />
            Your Results
          </CardTitle>
          <CardDescription>
            Daily protein recommendations for your activity level.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 relative z-10">
          {recommended ? (
            <>
              <div className="rounded-md bg-primary/10 p-3 border border-primary/20">
                <div className="text-xs uppercase tracking-[0.2em] text-primary mb-1">
                  RECOMMENDED INTAKE
                </div>
                <div className="text-3xl font-black text-primary">
                  {recommended.grams.toFixed(1)}g
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {recommended.calories.toFixed(0)} calories from protein
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  {recommended.multiplier}g per kg body weight
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  All Activity Levels
                </div>
                {results.map((result, index) => (
                  <div
                    key={index}
                    className={`rounded-md px-3 py-2 ${
                      result.level === recommended.level
                        ? "bg-primary/10 border border-primary/20"
                        : "bg-background/60"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className={`text-sm font-medium ${
                          result.level === recommended.level ? "text-primary" : ""
                        }`}>
                          {result.level}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {result.description}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-sm font-semibold ${
                          result.level === recommended.level ? "text-primary" : ""
                        }`}>
                          {result.grams.toFixed(1)}g
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {result.calories.toFixed(0)} cal
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 text-xs">
                <div className="rounded-md bg-background/60 p-3">
                  <div className="font-medium mb-2">Protein Distribution Tips</div>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Spread intake across 3-4 meals</li>
                    <li>• Include 20-30g per meal for optimal absorption</li>
                    <li>• Consider post-workout protein within 30 minutes</li>
                    <li>• Casein before bed for overnight recovery</li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center text-muted-foreground py-8">
              <Dumbbell className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <div className="text-sm">Enter your body weight to see protein recommendations</div>
            </div>
          )}

          <p className="text-xs text-muted-foreground">
            Quality protein sources include lean meats, fish, eggs, dairy, legumes, and plant-based proteins. Our nutrition coaches can help optimize your protein intake.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
