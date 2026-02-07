"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import ScrollProgress from "@/components/ScrollProgress";

export default function Schedule() {
  const scheduleLeft = [
    {
      day: "Monday to Saturday (Mornings)",
      times: "5:00 AM - 10:00 AM ",
    },
    {
      day: "Monday to Saturday (Evenings)",
      times: "4:30 PM - 9:30 PM",
    },
    {
      day: "Sunday",
      times: "6:00 AM - 10:00 AM",
    },
  ];

  const scheduleRight = [
    {
      day: "Monday to Saturday",
      times: "10:00 AM - 4:00 PM",
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
              src="https://images.unsplash.com/photo-1550345332-09e3ac987658?w=1200&h=800&fit=crop"
              alt="Gym Timings"
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
              Training <span className="text-primary">Schedule</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              Plan your week with our comprehensive training hours
            </p>
          </motion.div>
        </section>

        {/* Schedule Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {/* Left Schedule - General */}
              <Card className="glass-card border-0 h-full">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Unisex</h2>
                  <div className="space-y-4">
                    {scheduleLeft.map((item, index) => (
                      <motion.div
                        key={index}
                        className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          ease: "easeOut",
                          delay: index * 0.2,
                        }}
                      >
                        <div className="flex items-start gap-3">
                          <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <div className="flex-1">
                            <h3 className="font-bold text-lg mb-1">
                              {item.day}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              <span>{item.times}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Right Schedule - Women's Exclusive */}
              <Card className="glass-card border-0 h-full">
                <CardContent className="p-6">
                  <div className="bg-primary text-primary-foreground rounded-lg px-4 py-2 mb-6 text-center font-bold">
                    WOMEN'S EXCLUSIVE SESSIONS
                  </div>
                  <div className="space-y-4">
                    {scheduleRight.map((item, index) => (
                      <motion.div
                        key={index}
                        className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                        initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.2,
                  }}
                      >
                        <div className="flex items-start gap-3">
                          <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <div className="flex-1">
                            <h3 className="font-bold text-lg mb-1">
                              {item.day}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              <span>{item.times}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
