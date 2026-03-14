"use client";

import { motion } from "framer-motion";
import { Dumbbell, Activity, CircleDashed } from "lucide-react";

interface GymLoaderProps {
  message?: string;
  variant?: "dumbbell" | "plate" | "activity";
  fullScreen?: boolean;
}

export function GymLoader({ message = "Warming up...", variant = "dumbbell", fullScreen = false }: GymLoaderProps) {
  const getLoaderIcon = () => {
    switch (variant) {
      case "dumbbell":
        return (
          <motion.div
            animate={{ 
              rotate: [0, -20, 20, -20, 0],
              y: [0, -15, 0, -15, 0] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut"
            }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-150 animate-pulse" />
            <Dumbbell size={64} className="text-primary drop-shadow-[0_0_15px_rgba(239,68,68,0.5)] relative z-10" />
          </motion.div>
        );
      case "plate":
        return (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="relative flex items-center justify-center p-2"
          >
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-150 animate-pulse" />
            <CircleDashed size={72} className="text-primary drop-shadow-[0_0_15px_rgba(239,68,68,0.5)] relative z-10" strokeWidth={3} />
            <div className="absolute inset-0 flex items-center justify-center font-black text-sm text-primary z-20">
              45
            </div>
          </motion.div>
        );
      case "activity":
        return (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-150 animate-pulse" />
            <Activity size={64} className="text-primary drop-shadow-[0_0_15px_rgba(239,68,68,0.5)] relative z-10" />
          </motion.div>
        );
    }
  };

  const content = (
    <div className="flex flex-col items-center justify-center gap-8">
      {getLoaderIcon()}
      
      {/* Loading Text */}
      <div className="flex flex-col items-center gap-4">
        <motion.span 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-lg md:text-xl font-bold tracking-[0.2em] text-foreground uppercase"
        >
          {message}
        </motion.span>
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-3 h-3 bg-primary skew-x-[-20deg]"
              animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/80 backdrop-blur-md">
        {content}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[50vh]">
      {content}
    </div>
  );
}
