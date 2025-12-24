"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    "images/gym1.jpg",
    "images/gym2.jpg",
    "images/gym3.jpg",
    "images/gym4.jpg",
    "images/desk1.jpg",
    "images/equip1.jpg",
    "images/equip2.jpg",
    "images/banner1.jpg",
  ];

  return (
    <>
      <Navigation />

      <main className="pt-16 min-h-screen bg-muted/30">
        {/* Hero Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4">Our Gallery</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                See Our Gym in Action
              </h1>
              <p className="text-lg text-muted-foreground">
                Take a virtual tour of our facilities, equipment, and community
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Sections */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="space-y-16 max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {images.map((image, imgIndex) => (
                  <motion.div
                    key={imgIndex}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: imgIndex * 0.2,
                    }}
                  >
                    <Card className="overflow-hidden border-2 hover:shadow-xl transition-shadow group cursor-pointer">
                      <div className="relative h-64 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                          style={{ backgroundImage: `url('${image}')` }}
                        />
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience It Yourself
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Visit MR Real StrongMan and see why we're Trichy's premier fitness
              destination
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
