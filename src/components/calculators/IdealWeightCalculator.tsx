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
import { Heart, Activity, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

type Gender = "male" | "female";
type Unit = "metric" | "imperial";
type FrameSize = "small" | "medium" | "large";

interface IdealWeightResult {
  formula: string;
  weight: number;
  unit: string;
}

function calculateIdealWeight(
  gender: Gender,
  height: number,
  frameSize: FrameSize,
  unit: Unit
): IdealWeightResult[] {
  if (!height || height <= 0) return [];

  let heightInches: number;
  if (unit === "metric") {
    heightInches = height / 2.54;
  } else {
    heightInches = height;
  }

  const results: IdealWeightResult[] = [];

  // Devine Formula (1974)
  let devineWeight: number;
  if (gender === "male") {
    devineWeight = 50 + 2.3 * (heightInches - 60);
  } else {
    devineWeight = 45.5 + 2.3 * (heightInches - 60);
  }
  results.push({
    formula: "Devine (1974)",
    weight: Math.max(0, devineWeight),
    unit: "kg"
  });

  // Robinson Formula (1983)
  let robinsonWeight: number;
  if (gender === "male") {
    robinsonWeight = 52 + 1.9 * (heightInches - 60);
  } else {
    robinsonWeight = 49 + 1.7 * (heightInches - 60);
  }
  results.push({
    formula: "Robinson (1983)",
    weight: Math.max(0, robinsonWeight),
    unit: "kg"
  });

  // Miller Formula (1983)
  let millerWeight: number;
  if (gender === "male") {
    millerWeight = 56.2 + 1.9 * (heightInches - 60);
  } else {
    millerWeight = 53.1 + 1.36 * (heightInches - 60);
  }
  results.push({
    formula: "Miller (1983)",
    weight: Math.max(0, millerWeight),
    unit: "kg"
  });

  // Hamwi Formula (1964)
  let hamwiWeight: number;
  if (gender === "male") {
    hamwiWeight = 48 + 2.7 * (heightInches - 60);
  } else {
    hamwiWeight = 45.5 + 2.2 * (heightInches - 60);
  }

  // Adjust for frame size
  if (frameSize === "small") {
    hamwiWeight *= 0.9;
  } else if (frameSize === "large") {
    hamwiWeight *= 1.1;
  }

  results.push({
    formula: "Hamwi (1964)",
    weight: Math.max(0, hamwiWeight),
    unit: "kg"
  });

  // Convert to requested unit
  return results.map(result => ({
    ...result,
    weight: unit === "metric" ? result.weight : result.weight * 2.20462,
    unit: unit === "metric" ? "kg" : "lbs"
  }));
}

function getWeightRange(results: IdealWeightResult[]) {
  if (results.length === 0) return { min: 0, max: 0, average: 0 };
  
  const weights = results.map(r => r.weight);
  const min = Math.min(...weights);
  const max = Math.max(...weights);
  const average = weights.reduce((sum, weight) => sum + weight, 0) / weights.length;
  
  return { min, max, average };
}

interface IdealWeightCalculatorProps {
  className?: string;
}

export default function IdealWeightCalculator({ className }: IdealWeightCalculatorProps) {
  const [gender, setGender] = useState<Gender>("male");
  const [height, setHeight] = useState("");
  const [frameSize, setFrameSize] = useState<FrameSize>("medium");
  const [unit, setUnit] = useState<Unit>("metric");

  const numericHeight = parseFloat(height);
  const results = calculateIdealWeight(gender, numericHeight, frameSize, unit);
  const { min, max, average } = getWeightRange(results);

  return (
    <div className={`grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start ${className}`}>
      <Card className="glass-card border-white/10 shadow-lg">
        <CardHeader>
          <CardTitle>Calculate Your Ideal Weight</CardTitle>
          <CardDescription>
            Estimate your healthy weight range using multiple established formulas.
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
              Metric (cm)
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
              Imperial (in)
            </Button>
          </div>

          <div className="flex gap-2 rounded-lg bg-muted p-1 text-xs font-medium">
            <Button
              type="button"
              onClick={() => setGender("male")}
              variant={gender === "male" ? "default" : "ghost"}
              size="sm"
              className={`flex-1 ${
                gender === "male"
                  ? "shadow-sm"
                  : "text-muted-foreground"
              }`}
            >
              Male
            </Button>
            <Button
              type="button"
              onClick={() => setGender("female")}
              variant={gender === "female" ? "default" : "ghost"}
              size="sm"
              className={`flex-1 ${
                gender === "female"
                  ? "shadow-sm"
                  : "text-muted-foreground"
              }`}
            >
              Female
            </Button>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="height">
                Height ({unit === "metric" ? "centimeters" : "inches"})
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
          </form>

          <div className="space-y-3">
            <Label>Body Frame Size</Label>
            <div className="space-y-2">
              {[
                { value: "small", label: "Small Frame", description: "Wrist circumference < 6.5\" (men) or < 6\" (women)" },
                { value: "medium", label: "Medium Frame", description: "Wrist circumference 6.5-7.5\" (men) or 6-6.5\" (women)" },
                { value: "large", label: "Large Frame", description: "Wrist circumference > 7.5\" (men) or > 6.5\" (women)" }
              ].map((frame) => (
                <Button
                  key={frame.value}
                  type="button"
                  onClick={() => setFrameSize(frame.value as FrameSize)}
                  variant={frameSize === frame.value ? "default" : "ghost"}
                  className={`w-full text-left justify-start ${
                    frameSize === frame.value
                      ? "shadow-sm border border-primary/20"
                      : "text-muted-foreground hover:bg-background/50"
                  }`}
                >
                  <div className="text-left">
                    <div className="font-medium">{frame.label}</div>
                    <div className="text-xs text-muted-foreground">
                      {frame.description}
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            Note: These formulas provide estimates. Ideal weight varies based on muscle mass, bone density, and individual body composition.
          </p>
        </CardContent>
      </Card>

      <Card className="border-primary/20 bg-primary/5 relative overflow-hidden">
        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Your Results
          </CardTitle>
          <CardDescription>
            Ideal weight estimates from different medical formulas.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 relative z-10">
          {results.length > 0 ? (
            <>
              <div className="rounded-md bg-primary/10 p-3 border border-primary/20">
                <div className="text-xs uppercase tracking-[0.2em] text-primary mb-1">
                  AVERAGE IDEAL WEIGHT
                </div>
                <div className="text-3xl font-black text-primary">
                  {average.toFixed(1)} {unit}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Range: {min.toFixed(1)} - {max.toFixed(1)} {unit}
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Formula Breakdown
                </div>
                {results.map((result, index) => (
                  <div key={index} className="flex items-center justify-between rounded-md bg-background/60 px-3 py-2">
                    <span className="text-sm font-medium">{result.formula}</span>
                    <span className="text-sm text-muted-foreground">
                      {result.weight.toFixed(1)} {result.unit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 text-xs">
                <div className="rounded-md bg-background/60 p-3">
                  <div className="font-medium mb-1">BMI Healthy Range</div>
                  <div className="text-muted-foreground">
                    For your height: {(18.5 * Math.pow(unit === "metric" ? numericHeight/100 : numericHeight * 0.0254, 2)).toFixed(1)} - {(24.9 * Math.pow(unit === "metric" ? numericHeight/100 : numericHeight * 0.0254, 2)).toFixed(1)} {unit}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center text-muted-foreground py-8">
              <Target className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <div className="text-sm">Enter your height to see ideal weight estimates</div>
            </div>
          )}

          <p className="text-xs text-muted-foreground">
            Use these estimates as general guidelines. Focus on body composition and overall health rather than just the number on the scale.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
