"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarCheck, Star } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Membership() {
  const plans = [
    {
      name: "General Package",
      description: "Perfect for getting started",
      features: [
        "1 month - ₹699/-",
        "3 month - ₹1799/-",
        "6 month - ₹3799/-",
        "12 month - ₹7499/-",
      ],
      popular: false,
    },
    {
      name: "Personal Training",
      description: "For serious athletes",
      features: [
        "1 month - ₹2999/-",
        "3 month - ₹4999/-",
        "6 month - ₹7499/-",
        "12 month - ₹13999/-",
      ],
      popular: true,
    },
    {
      name: "Cardio Male",
      description: "Most popular choice",
      features: [
        "1 month - ₹1199/-",
        "3 month - ₹2999/-",
        "6 month - ₹5799/-",
        "12 month - ₹10499/-",
      ],
      popular: false,
    },
    {
      name: "Cardio Female",
      description: "Most popular choice",
      features: [
        "1 month - ₹999/-",
        "3 month - ₹2599/-",
        "6 month - ₹4999/-",
        "12 month - ₹9499/-",
      ],
      popular: false,
    },
  ];

  return (
    <>
      <Navigation />

      <main className="pt-16 min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
           <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=1200&h=800&fit=crop"
              alt="Membership Plans"
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
            <Badge className="mb-6 bg-primary text-white border-0 px-4 py-1.5 text-base">Membership Plans</Badge>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              Choose Your <span className="text-primary">Perfect Plan</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              Flexible membership options designed to fit your fitness goals and budget
            </p>
          </motion.div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
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
                  <Card
                    className={`glass-card border-0 relative h-full hover:scale-105 transition-transform duration-300 ${plan.popular ? "shadow-2xl border-primary/20 bg-white/80" : ""}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge className="bg-primary text-primary-foreground px-4 py-1">
                          <Star className="h-3 w-3 mr-1 inline fill-current" />
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-8 pt-8">
                      <CardTitle className="text-5xl font-bold text-primary">
                        {plan.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {plan.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CalendarCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href="/contacts">
                        <Button
                          asChild
                          className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                          variant={plan.popular ? "default" : "outline"}
                        >
                          <span>Get Started</span>
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Benefits */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Admission fees
              </h2>
              <div className="text-3xl font-bold mb-8 text-center">
                <span className="text-5xl font-bold text-primary">₹299/-</span>
              </div>
            </div>
          </div>
        </section>

        {/* Women's Exclusive Info */}
        <section className="py-16 bg-primary/10 border-y-2 border-primary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4 bg-primary text-primary-foreground">
                WOMEN'S EXCLUSIVE
              </Badge>
              <h2 className="text-3xl font-bold mb-4">
                Special Women's Training Sessions
              </h2>
              <p className="text-lg text-muted-foreground mb-2">
                All memberships include access to our women's exclusive training
                hours
              </p>
              <p className="font-semibold text-lg">
                Monday - Saturday: 10:00 AM - 4:00 PM with Trainer V.Ajitha
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="glass-card border-0 max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-white/50">
              <CardContent className="p-12 text-center">
                <h2 className="text-4xl font-black mb-6">Ready to Join?</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Start your fitness journey today with MR Real StrongMan
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/contacts">
                    <Button
                      asChild
                      size="xl"
                      className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 h-auto"
                    >
                      <span>Sign Up Now</span>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
