"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dumbbell, Users, Clock, Award, TrendingUp, Heart } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

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
      description: "Professionals with years of experience",
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

  const [index, setIndex] = useState(0);

  // auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  const testimonials = [
    {
      name: "Rahul Mehta",
      role: "Member • 1 Year",
      text: "The quality of equipment here is outstanding. From cardio machines to free weights, everything feels premium and well-maintained.",
    },
    {
      name: "Sneha Kapoor",
      role: "Member • 8 Months",
      text: "The trainers are extremely professional and supportive. They helped me stay consistent and reach my fitness goals faster than I expected.",
    },
    {
      name: "Aman Verma",
      role: "Member • 6 Months",
      text: "I love the friendly atmosphere here. Everyone is motivating and there’s zero judgment, which makes workouts enjoyable every day.",
    },
    {
      name: "Pooja Nair",
      role: "Member • 1.5 Years",
      text: "This gym feels like a second home. Great trainers, great people, and top-notch equipment — couldn’t ask for more.",
    },
    {
      name: "Kunal Singh",
      role: "Member • 10 Months",
      text: "Clean facilities, modern machines, and a very positive vibe. It’s the perfect place for beginners and serious athletes alike.",
    },
  ];

  return (
    <>
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[600px] overflow-hidden">
          {/* Mobile background image */}
          <div className="absolute inset-0 md:hidden">
            <Image
              src="images/hero.jpg"
              alt="MR Real StrongMan Gym"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
              {/* Text content */}
              <div className="text-white md:text-foreground max-w-3xl">
                <Badge className="mb-4 bg-primary text-primary-foreground">
                  Transform Your Life
                </Badge>

                <h1 className="text-4xl md:text-7xl font-bold mb-6">
                  Build Your Strength at{" "}
                  <span className="text-primary">MR Real StrongMan</span>
                </h1>

                <p className="text-lg md:text-xl text-white md:text-muted-foreground/80 mb-8">
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
                  <Button
                    className="text-gray-500"
                    size="lg"
                    variant="outline"
                    asChild
                  >
                    <Link href="/timings">View Schedule</Link>
                  </Button>
                </div>
              </div>

              {/* Desktop image */}
              <div className="hidden md:block">
                <Image
                  src="images/hero.jpg"
                  alt="MR Real StrongMan Gym"
                  width={600}
                  height={400}
                  priority
                  className="rounded-lg shadow-2xl object-cover"
                />
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

        {/* Testimonials Section */}

        <section className="py-20 bg-muted/20 relative">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            What Our Members Say
          </motion.h2>

          <div className="relative max-w-4xl mx-auto px-4">
            <AnimatePresence mode="wait">
              {/* Animated card */}
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 60, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -60, scale: 0.95 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                }}
                className="bg-accent/8 rounded-2xl shadow-md p-8 md:p-10 text-center text-[#2F2F2F]"
              >
                <p className="text-lg md:text-xl italic text-zinc-600 mb-6">
                  “{testimonials[index].text}”
                </p>

                <div className="font-semibold text-accent">
                  {testimonials[index].name}
                </div>
                <div className="text-sm text-zinc-500">
                  {testimonials[index].role}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-accent shadow rounded-full w-10 h-10 flex items-center justify-center text-white"
              aria-label="Previous testimonial"
            >
              ‹
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-accent shadow rounded-full w-10 h-10 flex items-center justify-center text-white"
              aria-label="Next testimonial"
            >
              ›
            </motion.button>

            {/* Dots */}
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setIndex(i)}
                  whileHover={{ scale: 1.4 }}
                  className={`w-2.5 h-2.5 rounded-full transition ${
                    i === index ? "bg-zinc-900" : "bg-zinc-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

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
