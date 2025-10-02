"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

export default function Membership() {
  const plans = [
    {
      name: "Basic",
      price: "₹999",
      period: "/month",
      description: "Perfect for getting started",
      features: [
        "Access to all equipment",
        "Locker facility",
        "Basic fitness assessment",
        "Flexible timing options",
        "Weekend access"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "₹1,999",
      period: "/month",
      description: "Most popular choice",
      features: [
        "Everything in Basic",
        "Personal training (2 sessions/month)",
        "Nutrition consultation",
        "Priority class booking",
        "Guest passes (2/month)"
      ],
      popular: true
    },
    {
      name: "Elite",
      price: "₹2,999",
      period: "/month",
      description: "For serious athletes",
      features: [
        "Everything in Pro",
        "Unlimited personal training",
        "Monthly body composition analysis",
        "Customized meal plans",
        "24/7 trainer support"
      ],
      popular: false
    }
  ];

  const benefits = [
    "Access to all gym equipment and facilities",
    "Women's exclusive training sessions",
    "Experienced certified trainers",
    "Flexible morning and evening hours",
    "Clean and well-maintained facilities",
    "Community support and motivation"
  ];

  return (
    <>
      <Navigation />
      
      <main className="pt-16 min-h-screen">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4">Membership Plans</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Choose Your Perfect Plan
              </h1>
              <p className="text-lg text-muted-foreground">
                Flexible membership options designed to fit your fitness goals and budget
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <Card key={index} className={`border-2 relative ${plan.popular ? 'border-primary shadow-2xl scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">
                        <Star className="h-3 w-3 mr-1 inline fill-current" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-8 pt-8">
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <div className="mb-2">
                      <span className="text-5xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Benefits */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">All Memberships Include</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg border">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Women's Exclusive Info */}
        <section className="py-16 bg-primary/10 border-y-2 border-primary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4 bg-primary text-primary-foreground">WOMEN'S EXCLUSIVE</Badge>
              <h2 className="text-3xl font-bold mb-4">
                Special Women's Training Sessions
              </h2>
              <p className="text-lg text-muted-foreground mb-2">
                All memberships include access to our women's exclusive training hours
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
            <Card className="max-w-3xl mx-auto border-2 bg-gradient-to-br from-primary/5 to-background">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Start your fitness journey today with MR Real StrongMan
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Sign Up Now
                  </Button>
                  <Button size="lg" variant="outline">
                    Contact Us
                  </Button>
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