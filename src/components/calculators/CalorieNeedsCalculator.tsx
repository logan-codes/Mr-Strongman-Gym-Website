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
import { Heart, Activity, Zap } from "lucide-react";

type Gender = "male" | "female";
type Unit = "metric" | "imperial";
type ActivityLevel = "sedentary" | "light" | "moderate" | "active" | "very-active";

function calculateBMR(gender: Gender, weight: number, height: number, age: number, unit: Unit) {
  if (!weight || !height || !age || weight <= 0 || height <= 0 || age <= 0) return null;

  let weightKg: number;
  let heightCm: number;

  if (unit === "metric") {
    weightKg = weight;
    heightCm = height;
  } else {
    weightKg = weight * 0.453592;
    heightCm = height * 2.54;
  }

  // Mifflin-St Jeor equation
  let bmr: number;
  if (gender === "male") {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  } else {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
  }

  return Number.isFinite(bmr) ? Math.round(bmr) : null;
}

function getActivityMultiplier(activityLevel: ActivityLevel): number {
  switch (activityLevel) {
    case "sedentary": return 1.2;
    case "light": return 1.375;
    case "moderate": return 1.55;
    case "active": return 1.725;
    case "very-active": return 1.9;
    default: return 1.2;
  }
}

function getActivityDescription(activityLevel: ActivityLevel): string {
  switch (activityLevel) {
    case "sedentary": return "Little to no exercise";
    case "light": return "Light exercise 1-3 days/week";
    case "moderate": return "Moderate exercise 3-5 days/week";
    case "active": return "Hard exercise 6-7 days/week";
    case "very-active": return "Very hard exercise & physical job";
    default: return "";
  }
}

interface CalorieNeedsCalculatorProps {
  className?: string;
}

export default function CalorieNeedsCalculator({ className }: CalorieNeedsCalculatorProps) {
  const [gender, setGender] = useState<Gender>("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>("moderate");
  const [unit, setUnit] = useState<Unit>("metric");

  const numericAge = parseFloat(age);
  const numericHeight = parseFloat(height);
  const numericWeight = parseFloat(weight);

  const bmr = calculateBMR(gender, numericWeight, numericHeight, numericAge, unit);
  const activityMultiplier = getActivityMultiplier(activityLevel);
  const maintenanceCalories = bmr ? Math.round(bmr * activityMultiplier) : null;
  const weightLossCalories = maintenanceCalories ? Math.round(maintenanceCalories * 0.85) : null;
  const weightGainCalories = maintenanceCalories ? Math.round(maintenanceCalories * 1.15) : null;

  return (
    <div className={`grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start ${className}`}>
      <Card className="glass-card border-white/10 shadow-lg">
        <CardHeader>
          <CardTitle>Calculate Your Calorie Needs</CardTitle>
          <CardDescription>
            Determine your daily caloric requirements based on your BMR and activity level.
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
              Metric (cm, kg)
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
              Imperial (in, lbs)
            </button>
          </div>

          <div className="flex gap-2 rounded-lg bg-muted p-1 text-xs font-medium">
            <button
              type="button"
              onClick={() => setGender("male")}
              className={`flex-1 rounded-md px-3 py-2 transition ${
                gender === "male"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground"
              }`}
            >
              Male
            </button>
            <button
              type="button"
              onClick={() => setGender("female")}
              className={`flex-1 rounded-md px-3 py-2 transition ${
                gender === "female"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground"
              }`}
            >
              Female
            </button>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="age">Age (years)</Label>
                <Input
                  id="age"
                  type="number"
                  min="0"
                  step="1"
                  inputMode="numeric"
                  placeholder="e.g. 25"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="height">
                  Height ({unit === "metric" ? "cm" : "inches"})
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
                  Weight ({unit === "metric" ? "kg" : "lbs"})
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

          <div className="space-y-3">
            <Label>Activity Level</Label>
            <div className="space-y-2">
              {[
                { value: "sedentary", label: "Sedentary" },
                { value: "light", label: "Lightly Active" },
                { value: "moderate", label: "Moderately Active" },
                { value: "active", label: "Active" },
                { value: "very-active", label: "Very Active" }
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
                    {getActivityDescription(level.value as ActivityLevel)}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            Note: These calculations use the Mifflin-St Jeor equation, which is considered more accurate than older formulas. Individual needs may vary.
          </p>
        </CardContent>
      </Card>

      <Card className="border-primary/20 bg-primary/5 relative overflow-hidden">
        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            Your Results
          </CardTitle>
          <CardDescription>
            Daily caloric needs based on your profile and activity level.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 relative z-10">
          <div className="space-y-4">
            <div className="rounded-md bg-background/60 p-3">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
                BASAL METABOLIC RATE
              </div>
              <div className="text-2xl font-bold">
                {bmr ? `${bmr.toLocaleString()} cal/day` : "--"}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Calories burned at complete rest
              </div>
            </div>

            <div className="rounded-md bg-primary/10 p-3 border border-primary/20">
              <div className="text-xs uppercase tracking-[0.2em] text-primary mb-1">
                MAINTENANCE
              </div>
              <div className="text-3xl font-black text-primary">
                {maintenanceCalories ? `${maintenanceCalories.toLocaleString()}` : "--"}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Calories per day to maintain current weight
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-md bg-background/60 p-3">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
                  WEIGHT LOSS
                </div>
                <div className="text-xl font-bold text-blue-500">
                  {weightLossCalories ? weightLossCalories.toLocaleString() : "--"}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  ~0.5kg per week
                </div>
              </div>
              <div className="rounded-md bg-background/60 p-3">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
                  WEIGHT GAIN
                </div>
                <div className="text-xl font-bold text-green-500">
                  {weightGainCalories ? weightGainCalories.toLocaleString() : "--"}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  ~0.5kg per week
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            For sustainable weight changes, aim for 300-500 calorie adjustments. Our nutrition experts can create a personalized meal plan for your goals.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
