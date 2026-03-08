 "use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollProgress from "@/components/ScrollProgress";
import ContactForm from "@/components/ContactForm";

export default function ContactPageClient() {
  return (
    <>
      <Navigation />
      <ScrollProgress />

      <main className="pt-16 min-h-screen bg-muted/30">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1596357395217-80de13130e92?w=1200&h=800&fit=crop"
              alt="Contact Us"
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
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message!
            </p>
          </motion.div>
        </section>

        {/* Contact Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {/* Contact Form */}
              <ContactForm />
              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="glass-card border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Link
                        href="https://maps.app.goo.gl/rZBvKSozyqCxe6oD8"
                        target="_blank"
                        className="flex items-start gap-3"
                      >
                        <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0 " />
                        <div>
                          <h3 className="font-bold mb-1 hover:text-primary">
                            Location
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            1/2 Renga Nagar, Edumalai Road
                            <br />
                            Near Bank of Baroda, Mannachanallur, Trichy
                          </p>
                        </div>
                      </Link>
                    </div>

                    <div className="flex items-start gap-3">
                      <Link
                        href="https://wa.me/918807779835"
                        target="_blank"
                        className="flex items-start gap-3"
                      >
                        <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold mb-1 hover:text-primary">
                            Phone
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            +91 8807779835
                          </p>
                        </div>
                      </Link>
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

                <Card className="glass-card border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl">Operating Hours</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <span className="font-semibold">
                            Monday to Saturday
                          </span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="font-semibold">Unisex</span>
                          <span className="text-sm text-muted-foreground">
                            5:00 AM - 10:00 AM <br />
                            4:30 PM - 9:30 PM
                          </span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="font-semibold">
                            Ladies Exclusive
                          </span>
                          <span className="text-sm text-muted-foreground">
                            10:00 AM - 4:00 PM
                          </span>
                        </div>
                      </div>
                      <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <span className="font-semibold">Sunday</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="font-semibold">Unisex</span>
                          <span className="text-sm text-muted-foreground">
                            6:00 AM - 10:00 AM
                          </span>
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

