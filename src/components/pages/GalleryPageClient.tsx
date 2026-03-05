 "use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";
import ScrollProgress from "@/components/ScrollProgress";

export default function GalleryPageClient() {
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
      <ScrollProgress />

      <main className="pt-16 min-h-screen bg-muted/30">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1596357395217-80de13130e92?w=1200&h=800&fit=crop"
              alt="Our Gallery"
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
            <Badge className="mb-6 bg-primary text-white border-0 px-4 py-1.5 text-base">
              Gallery
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              See Our Gym in <span className="text-primary">Action</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              Take a virtual tour of our facilities, equipment, and community
            </p>
          </motion.div>
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
                    <Card className="glass-card border-0 overflow-hidden hover:-translate-y-2 transition-all duration-300 group cursor-pointer h-full">
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

