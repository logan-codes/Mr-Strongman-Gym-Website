"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dumbbell, Users, Clock, Award, TrendingUp, Heart } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const features = [
    {
      icon: Dumbbell,
      title: "Premium Equipment",
      description:
        "State-of-the-art machines and free weights for all fitness levels",
    },
    {
      icon: Users,
      title: "Expert Trainers",
      description: "Certified professionals with years of experience",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Morning, evening sessions and women's exclusive hours",
    },
    {
      icon: Award,
      title: "Results Driven",
      description: "Personalized programs designed for your success",
    },
  ];

  const classes = [
    {
      title: "Strength Training",
      description: "Build muscle and increase power",
      image:
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop",
    },
    {
      title: "Functional Fitness",
      description: "Improve movement patterns and athletic performance",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    },
    {
      title: "Women's Exclusive",
      description: "Dedicated training sessions with female trainer",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop",
    },
  ];

  return (
    <>
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-background to-muted/30">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <div className="container mx-auto px-4 py-20 text-left">
              <div className="max-w-3xl">
                <Badge className="mb-4 bg-primary text-primary-foreground ">
                  Transform Your Life
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  Build Your Strength at{" "}
                  <span className="text-primary">MR Real StrongMan</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Premium fitness center in Mannachanallur, Trichy. Professional
                  training, state-of-the-art equipment, and dedicated support
                  for your fitness journey.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <Link href="/membership">Join Now</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/schedule">View Schedule</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to achieve your fitness goals
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
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
                      <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Classes */}
        {/* <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Featured Programs</h2>
              <p className="text-lg text-muted-foreground">Diverse training options for every fitness level</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {classes.map((classItem, index) => (
                <Card key={index} className="overflow-hidden border-2 hover:shadow-xl transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url('${classItem.image}')` }}
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{classItem.title}</h3>
                    <p className="text-muted-foreground mb-4">{classItem.description}</p>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/schedule">View Schedule</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Women's Exclusive CTA */}
        <section className="py-16 bg-primary/10 border-y-2 border-primary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary text-primary-foreground">
                WOMEN'S EXCLUSIVE
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Dedicated Women's Training Sessions
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Train in a comfortable, women-only environment with certified
                female trainer V.Ajitha
                <br />
                <strong className="text-foreground">
                  Monday - Saturday: 10:00 AM - 4:00 PM
                </strong>
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                asChild
              >
                <Link href="/trainers">Meet Our Trainer</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg"
              >
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">
                    500+
                  </div>
                  <div className="text-muted-foreground">Active Members</div>
                </div>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg"
              >
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">5+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg"
              >
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">4</div>
                  <div className="text-muted-foreground">Expert Trainers</div>
                </div>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg"
              >
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">
                    98%
                  </div>
                  <div className="text-muted-foreground">Satisfaction Rate</div>
                </div>
              </motion.button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Fitness Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join MR Real StrongMan today and transform your body with expert
              guidance
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contacts">Contact Us Today</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
