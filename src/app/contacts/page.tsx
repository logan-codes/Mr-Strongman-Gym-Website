"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";

const openWhatsApp = () => {
    window.open(`https://wa.me/918807779835`, "_blank");
  };

export default function Contact() {
  return (
    <>
      <Navigation />
      
      <main className="pt-16 min-h-screen bg-muted/30">
        {/* Hero Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground">
                We'd love to hear from you. Send us a message!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {/* Contact Form */}
              {/* <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name</label>
                    <Input placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <Input type="email" placeholder="Enter your email" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone Number</label>
                    <Input type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell us about your fitness goals..."
                      rows={5}
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                </CardContent>
              </Card> */}
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfbxSFtrQZKp3Q8t0cPF2Jy1ivSBCkBSGHnxlf1VZHL9l5Dmg/viewform?usp=dialog" width="100%" height="500"></iframe>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold mb-1">Location</h3>
                        <p className="text-sm text-muted-foreground">
                          1/2 Renga Nagar, Edumalai Road<br />
                          Near Bank of Baroda, Mannachanallur, Trichy
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold mb-1">Phone</h3>
                        <p className="text-sm text-muted-foreground">
                          +91 8807779835
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold mb-1">Email</h3>
                        <p className="text-sm text-muted-foreground">
                          nvijayakumar110@gmail.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl">Operating Hours</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <span className="font-semibold">Monday to Saturday</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="font-semibold">Unisex</span>
                          <span className="text-sm text-muted-foreground">5:00 AM - 10:00 AM <br></br> 4:30 PM - 9:30 PM</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="font-semibold">Ladies Exclusive</span>
                          <span className="text-sm text-muted-foreground">10:00 AM - 4:00 PM </span>
                        </div>
                      </div>
                      <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <span className="font-semibold">Sunday</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="font-semibold">Unisex</span>
                          <span className="text-sm text-muted-foreground">6:00 AM - 10:00 AM</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}