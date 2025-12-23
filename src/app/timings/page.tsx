"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

export default function Schedule() {
  const scheduleLeft = [
    {
      day: "Mornings",
      times: "5:00 AM - 9:30 AM "
    },
    {
      day: "Evenings",
      times: "4:30 PM - 9:30 PM"
    }
  ];

  const scheduleRight = [
    {
      day: "All Days",
      times: "9:30 AM - 4:30 PM"
    }
  ];

  return (
    <>
      <Navigation />
      
      <main className="pt-16 min-h-screen bg-muted/30">
        {/* Hero Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Gym Timings
              </h1>
              <p className="text-lg text-muted-foreground">
                Plan your week with our comprehensive training schedule
              </p>
            </div>
          </div>
        </section>

        {/* Schedule Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {/* Left Schedule - General */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Gents</h2>
                  <div className="space-y-4">
                    {scheduleLeft.map((item, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-3">
                          <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <div className="flex-1">
                            <h3 className="font-bold text-lg mb-1">{item.day}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              <span>{item.times}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Right Schedule - Women's Exclusive */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="bg-primary text-primary-foreground rounded-lg px-4 py-2 mb-6 text-center font-bold">
                    WOMEN'S EXCLUSIVE SESSIONS
                  </div>
                  <div className="space-y-4">
                    {scheduleRight.map((item, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-3">
                          <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <div className="flex-1">
                            <h3 className="font-bold text-lg mb-1">{item.day}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              <span>{item.times}</span>
                            </div>
                          </div>
                        </div>
                      </div>
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