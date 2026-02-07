"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import ScrollProgress from "@/components/ScrollProgress";

import Link from "next/link";
import Image from "next/image";

export default function Trainers() {
  const trainers = [
    {
      name: "N.Vijayakumar",
      specialty: "Strength & Powerlifting",
      description:
        "Former competitive powerlifter specializing in strength development and form correction.",
      experience: "5+ Years",
      certifications: ["NASM-CPT", "Powerlifting Coach"],
      image:
        "images/vijayakumar.jpg",
    },
    {
      name: "Gokul",
      specialty: "Functional Fitness",
      description:
        "Expert in functional movement patterns and athletic performance enhancement.",
      experience: "1+ Years",
      certifications: ["CrossFit L2", "ACSM-CPT"],
      image:
        "images/gokul.jpg",
    },
    {
      name: "P.Deepak",
      specialty: "Bodybuilding & Nutrition",
      description:
        "Professional bodybuilder with expertise in muscle building and dietary planning.",
      experience: "2+ Years",
      certifications: ["IFBB Pro", "Nutrition Specialist"],
      image:
        "images/depak.jpg",
    },
    {
      name: "V.Ajitha",
      specialty: "Women's Fitness Specialist",
      description:
        "Dedicated female trainer for women's exclusive sessions, specializing in strength training and wellness.",
      experience: "2+ Years",
      certifications: ["NASM-CPT", "Women's Health Specialist"],
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      isWomensExclusive: true,
    },
  ];

  return (
    <>
      <Navigation />
      <ScrollProgress />

      <main className="pt-16 min-h-screen bg-muted/30">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
           <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&h=800&fit=crop"
              alt="Our Trainers"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-black/60 z-10" />
             <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
          </div>
          
          <motion.div
            className="container mx-auto px-4 relative z-20 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              Meet Our <span className="text-primary">Expert Trainers</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              Certified professionals dedicated to helping you achieve your fitness goals
            </p>
          </motion.div>
        </section>

        {/* Trainers Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {trainers.map((trainer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.2,
                  }}
                >
                  <Card className="glass-card border-0 overflow-hidden hover:-translate-y-2 transition-all duration-300 h-full">
                    <div className="relative h-64 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-[50%_20%]"
                        style={{ backgroundImage: `url('${trainer.image}')` }}
                      />
                      <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground font-bold">
                        {trainer.experience}
                      </Badge>
                    </div>

                    <CardContent className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1">
                          {trainer.name}
                        </h3>
                        <p className="text-primary font-semibold text-sm">
                          {trainer.specialty}
                        </p>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {trainer.description}
                      </p>

                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          {trainer.certifications.map((cert, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="text-xs"
                            >
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {trainer.isWomensExclusive && (
                        <div className="bg-primary text-primary-foreground text-center py-2 font-bold text-sm">
                          WOMEN'S EXCLUSIVE TRAINER
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
