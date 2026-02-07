"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, TrendingUp, Users, Award, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { once } from "events";
import ScrollProgress from "@/components/ScrollProgress";

import Link from "next/link";
import Image from "next/image";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "Committed to providing the highest quality training and facilities",
    },
    {
      icon: Heart,
      title: "Wellness",
      description:
        "Focus on overall health and well-being, not just physical fitness",
    },
    {
      icon: TrendingUp,
      title: "Progress",
      description:
        "Continuous improvement and measurable results for every member",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building a supportive environment where everyone succeeds together",
    },
  ];

  return (
    <>
      <Navigation />
      <ScrollProgress />

      <main className="pt-16 min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop"
              alt="About MR StrongMan"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
          </div>
          
          <div className="container mx-auto px-4 relative z-20 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-primary text-white border-0 px-4 py-1.5 text-base">Our Story</Badge>
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                About <span className="text-primary">MR Real StrongMan</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                Building stronger communities through fitness excellence since 2019
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground text-center leading-relaxed mb-8">
                At MR Real StrongMan Fitness & Unisex Gym, we are dedicated to
                transforming lives through fitness excellence. Located in the
                heart of Mannachanallur, Trichy, we provide a premium training
                environment with state-of-the-art equipment, expert trainers,
                and personalized programs designed to help you achieve your
                fitness goals.
              </p>
              <p className="text-lg text-muted-foreground text-center leading-relaxed">
                We believe in creating an inclusive space where everyone—from
                beginners to advanced athletes— can thrive. Our women's
                exclusive sessions provide a comfortable, dedicated environment
                for female members to train with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">
                  Active Members
                </div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-primary mb-2">5</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">
                  Satisfaction Rate
                </div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-primary mb-2">4</div>
                <div className="text-sm text-muted-foreground">
                  Expert Trainers
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground">
                Principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
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
                  <Card className="glass-card border-0 h-full hover:-translate-y-2 transition-transform duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                        <value.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
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
