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
import { Heart, Activity } from "lucide-react";

type Gender = "male" | "female";
type Unit = "metric" | "imperial";

function calculateBodyFat(
  gender: Gender,
  age: number,
  height: number,
  neck: number,
  waist: number,
  hip: number | null,
  unit: Unit
) {
  if (!age || !height || !neck || !waist || age <= 0 || height <= 0 || neck <= 0 || waist <= 0) {
    return null;
  }

  if (gender === "female" && (!hip || hip <= 0)) {
    return null;
  }

  let heightInches: number;
  let neckInches: number;
  let waistInches: number;
  let hipInches: number | null = null;

  if (unit === "metric") {
    heightInches = height / 2.54;
    neckInches = neck / 2.54;
    waistInches = waist / 2.54;
    if (hip) hipInches = hip / 2.54;
  } else {
    heightInches = height;
    neckInches = neck;
    waistInches = waist;
    if (hip) hipInches = hip;
  }

  let bodyFatPercentage: number;

  if (gender === "male") {
    // U.S. Navy formula for males
    const logValue = Math.log10(waistInches - neckInches);
    bodyFatPercentage = 86.010 * logValue - 70.041 * Math.log10(heightInches) + 36.76;
  } else {
    // U.S. Navy formula for females
    const logValue = Math.log10(waistInches + hipInches! - neckInches);
    bodyFatPercentage = 163.205 * logValue - 97.684 * Math.log10(heightInches) + 78.387;
  }

  return Number.isFinite(bodyFatPercentage) ? Number(bodyFatPercentage.toFixed(1)) : null;
}

function getBodyFatCategory(gender: Gender, age: number, bodyFat: number | null) {
  if (bodyFat == null) return null;

  if (gender === "male") {
    if (age < 30) {
      if (bodyFat < 14) return { label: "Essential", color: "text-red-500" };
      if (bodyFat < 18) return { label: "Athletic", color: "text-emerald-500" };
      if (bodyFat < 23) return { label: "Fitness", color: "text-blue-500" };
      if (bodyFat < 28) return { label: "Acceptable", color: "text-yellow-500" };
      return { label: "Obese", color: "text-red-600" };
    } else if (age < 40) {
      if (bodyFat < 15) return { label: "Essential", color: "text-red-500" };
      if (bodyFat < 19) return { label: "Athletic", color: "text-emerald-500" };
      if (bodyFat < 24) return { label: "Fitness", color: "text-blue-500" };
      if (bodyFat < 29) return { label: "Acceptable", color: "text-yellow-500" };
      return { label: "Obese", color: "text-red-600" };
    } else if (age < 50) {
      if (bodyFat < 17) return { label: "Essential", color: "text-red-500" };
      if (bodyFat < 21) return { label: "Athletic", color: "text-emerald-500" };
      if (bodyFat < 26) return { label: "Fitness", color: "text-blue-500" };
      if (bodyFat < 31) return { label: "Acceptable", color: "text-yellow-500" };
      return { label: "Obese", color: "text-red-600" };
    } else {
      if (bodyFat < 18) return { label: "Essential", color: "text-red-500" };
      if (bodyFat < 22) return { label: "Athletic", color: "text-emerald-500" };
      if (bodyFat < 27) return { label: "Fitness", color: "text-blue-500" };
      if (bodyFat < 32) return { label: "Acceptable", color: "text-yellow-500" };
      return { label: "Obese", color: "text-red-600" };
    }
  } else {
    if (age < 30) {
      if (bodyFat < 21) return { label: "Essential", color: "text-red-500" };
      if (bodyFat < 25) return { label: "Athletic", color: "text-emerald-500" };
      if (bodyFat < 30) return { label: "Fitness", color: "text-blue-500" };
      if (bodyFat < 35) return { label: "Acceptable", color: "text-yellow-500" };
      return { label: "Obese", color: "text-red-600" };
    } else if (age < 40) {
      if (bodyFat < 22) return { label: "Essential", color: "text-red-500" };
      if (bodyFat < 26) return { label: "Athletic", color: "text-emerald-500" };
      if (bodyFat < 31) return { label: "Fitness", color: "text-blue-500" };
      if (bodyFat < 36) return { label: "Acceptable", color: "text-yellow-500" };
      return { label: "Obese", color: "text-red-600" };
    } else if (age < 50) {
      if (bodyFat < 23) return { label: "Essential", color: "text-red-500" };
      if (bodyFat < 27) return { label: "Athletic", color: "text-emerald-500" };
      if (bodyFat < 32) return { label: "Fitness", color: "text-blue-500" };
      if (bodyFat < 37) return { label: "Acceptable", color: "text-yellow-500" };
      return { label: "Obese", color: "text-red-600" };
    } else {
      if (bodyFat < 24) return { label: "Essential", color: "text-red-500" };
      if (bodyFat < 28) return { label: "Athletic", color: "text-emerald-500" };
      if (bodyFat < 33) return { label: "Fitness", color: "text-blue-500" };
      if (bodyFat < 38) return { label: "Acceptable", color: "text-yellow-500" };
      return { label: "Obese", color: "text-red-600" };
    }
  }
}

interface BodyFatCalculatorProps {
  className?: string;
}

export default function BodyFatCalculator({ className }: BodyFatCalculatorProps) {
  const [gender, setGender] = useState<Gender>("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [neck, setNeck] = useState("");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [unit, setUnit] = useState<Unit>("metric");

  const numericAge = parseFloat(age);
  const numericHeight = parseFloat(height);
  const numericNeck = parseFloat(neck);
  const numericWaist = parseFloat(waist);
  const numericHip = parseFloat(hip);

  const bodyFat = calculateBodyFat(
    gender,
    numericAge,
    numericHeight,
    numericNeck,
    numericWaist,
    gender === "female" ? numericHip : null,
    unit
  );
  const category = getBodyFatCategory(gender, numericAge, bodyFat);

  return (
    <div className={`grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start ${className}`}>
      <Card className="glass-card border-white/10 shadow-lg">
        <CardHeader>
          <CardTitle>Calculate Your Body Fat</CardTitle>
          <CardDescription>
            Use the U.S. Navy body fat formula to estimate your body fat percentage based on measurements.
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
              Metric (cm)
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
              Imperial (in)
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
            <div className="grid gap-4 md:grid-cols-2">
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
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="neck">
                  Neck ({unit === "metric" ? "cm" : "inches"})
                </Label>
                <Input
                  id="neck"
                  type="number"
                  min="0"
                  step="0.1"
                  inputMode="decimal"
                  placeholder={unit === "metric" ? "e.g. 35" : "e.g. 14"}
                  value={neck}
                  onChange={(e) => setNeck(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="waist">
                  Waist ({unit === "metric" ? "cm" : "inches"})
                </Label>
                <Input
                  id="waist"
                  type="number"
                  min="0"
                  step="0.1"
                  inputMode="decimal"
                  placeholder={unit === "metric" ? "e.g. 80" : "e.g. 31"}
                  value={waist}
                  onChange={(e) => setWaist(e.target.value)}
                />
              </div>
            </div>

            {gender === "female" && (
              <div className="space-y-2">
                <Label htmlFor="hip">
                  Hip ({unit === "metric" ? "cm" : "inches"})
                </Label>
                <Input
                  id="hip"
                  type="number"
                  min="0"
                  step="0.1"
                  inputMode="decimal"
                  placeholder={unit === "metric" ? "e.g. 95" : "e.g. 37"}
                  value={hip}
                  onChange={(e) => setHip(e.target.value)}
                />
              </div>
            )}
          </form>

          <p className="text-xs text-muted-foreground">
            Note: This formula provides an estimate. For accurate body fat measurement, consult with a fitness professional or use specialized equipment.
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
            Based on the U.S. Navy body fat calculation method.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 relative z-10">
          <div className="flex items-end gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
                BODY FAT %
              </div>
              <div className="text-4xl md:text-5xl font-black">
                {bodyFat ? `${bodyFat}%` : "--"}
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
              <span className="font-medium">Essential</span>
              <span className="text-muted-foreground">Very Low</span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-background/60 px-3 py-2">
              <span className="font-medium">Athletic</span>
              <span className="text-muted-foreground">Low</span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-background/60 px-3 py-2">
              <span className="font-medium">Fitness</span>
              <span className="text-muted-foreground">Good</span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-background/60 px-3 py-2">
              <span className="font-medium">Acceptable</span>
              <span className="text-muted-foreground">Average</span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-background/60 px-3 py-2">
              <span className="font-medium">Obese</span>
              <span className="text-muted-foreground">High</span>
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            Body fat percentage is a better indicator of fitness than BMI alone. Our trainers can help you achieve your ideal body composition.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
