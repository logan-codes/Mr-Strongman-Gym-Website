"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarCheck , Star } from "lucide-react";
import Link from "next/link";

export default function Membership() {
  const plans = [
    {
      name: "General Package",
      description: "Perfect for getting started",
      features: [
        "1 month - ₹699/-",
        "3 month - ₹1799/-",
        "6 month - ₹3799/-",
        "12 month - ₹7499/-"
      ],
      popular: false
    },
    {
      name: "Personal Training",
      description: "For serious athletes",
      features: [
        "1 month - ₹2999/-",
        "3 month - ₹4999/-",
        "6 month - ₹7499/-",
        "12 month - ₹13999/-"
      ],
      popular: true
    },
    {
      name: "Cardio Male",
      description: "Most popular choice",
      features: [
        "1 month - ₹1199/-",
        "3 month - ₹2999/-",
        "6 month - ₹5799/-",
        "12 month - ₹10499/-"
      ],
      popular: false
    },
    {
      name: "Cardio Female",
      description: "Most popular choice",
      features: [
        "1 month - ₹999/-",
        "3 month - ₹2599/-",
        "6 month - ₹4999/-",
        "12 month - ₹9499/-"
      ],
      popular: false
    },
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                    <CardTitle className="text-5xl font-bold text-primary">{plan.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CalendarCheck  className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contacts">
                    <Button
                      asChild 
                      className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      <span>
                      Get Started
                      </span>
                    </Button>
                    </Link>
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
              <h2 className="text-3xl font-bold mb-8 text-center">Admission fees</h2>
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
                  <Link href="/contacts">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
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