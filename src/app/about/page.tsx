"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, TrendingUp, Users, Award, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { once } from "events";

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

      <main className="pt-16 min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-muted/30">
          <motion.div
            className="container mx-auto px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <Badge className="mb-4">Our Story</Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  About MR Real StrongMan
                </h1>
                <p className="text-xl text-muted-foreground">
                  Building stronger communities through fitness excellence since
                  2019
                </p>
              </div>
            </div>
          </motion.div>
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
                  <Card className="border-2 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">
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
