 "use client";

import { useState, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Trophy, X, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollProgress from "@/components/ScrollProgress";

export default function GalleryPageClient() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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

  const transformations = [
    {
      name: "Rahul's Journey",
      before: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&h=800&fit=crop",
      after: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=800&fit=crop",
      result: "25kg Weight Loss",
    },
    {
      name: "Priya's Strength",
      before: "https://images.unsplash.com/photo-1574680077505-ef74a4cd923f?w=600&h=800&fit=crop",
      after: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&h=800&fit=crop",
      result: "Muscle Toning",
    },
    {
      name: "Vikram's Bulk",
      before: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=800&fit=crop",
      after: "https://images.unsplash.com/photo-1583454110551-21f2fa2ec617?w=600&h=800&fit=crop",
      result: "10kg Muscle Gain",
    },
  ];

  const competitions = [
    {
      title: "State Powerlifting Championship",
      year: "2024",
      achievement: "Gold Medal",
      category: "85kg Category",
      image: "https://images.unsplash.com/photo-1517931524326-bdd55a541177?w=800&h=600&fit=crop",
    },
    {
      title: "District Bodybuilding Meet",
      year: "2023",
      achievement: "Runner Up",
      category: "Men's Physique",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&h=600&fit=crop",
    },
    {
      title: "Open Bench Press Challenge",
      year: "2024",
      achievement: "Winner",
      category: "Heavyweight",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
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

        {/* Transformations Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 px-4 py-1 tracking-wider uppercase font-bold text-xs shadow-sm">
                Success Stories
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Real <span className="text-primary">Transformations</span></h2>
              <p className="text-xl text-muted-foreground">
                Witness the incredible journeys of our members who pushed their limits and transformed their lives at MR Real StrongMan Gym.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {transformations.map((transform, index) => (
                <TransformationCard key={index} transform={transform} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </section>

        {/* Competition Section */}
        <section className="py-24 bg-muted/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-20 opacity-5">
            <Trophy size={400} className="text-primary rotate-12" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 px-4 py-1 tracking-wider uppercase font-bold text-xs shadow-sm">
                Champion's Corner
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Competition <span className="text-primary">Hall of Fame</span></h2>
              <p className="text-xl text-muted-foreground">
                Celebrating the dedication and peak performance of our athletes in state and district level competitions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {competitions.map((comp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="glass-card border-0 overflow-hidden h-full flex flex-col group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                    <div className="relative h-56 overflow-hidden">
                      <Image 
                        src={comp.image} 
                        alt={comp.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                        <Badge className="bg-primary text-white border-0 shadow-lg px-3 py-1 font-bold">
                          {comp.year}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow bg-white/40 backdrop-blur-md">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                          <Trophy size={20} />
                        </div>
                        <span className="text-primary font-black uppercase tracking-widest text-sm">
                          {comp.achievement}
                        </span>
                      </div>
                      <h3 className="text-2xl font-black mb-3 text-foreground leading-tight tracking-tight">
                        {comp.title}
                      </h3>
                      <p className="text-muted-foreground font-medium border-l-2 border-primary/30 pl-4 py-1">
                        {comp.category}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Sections */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 px-4 py-1 tracking-wider uppercase font-bold text-xs shadow-sm">
                Our Facility
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Facility <span className="text-primary">Showcase</span></h2>
            </div>
            
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
                      delay: imgIndex * 0.1,
                    }}
                  >
                    <Card 
                      className="glass-card border-0 overflow-hidden hover:-translate-y-2 transition-all duration-300 group cursor-pointer h-full"
                      onClick={() => setSelectedImage(image)}
                    >
                      <div className="relative h-72 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                          style={{ backgroundImage: `url('${image}')` }}
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white font-bold border-2 border-white px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Full Size</span>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
              BE THE NEXT <span className="text-black">SUCCESS STORY</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90 font-medium">
              Your transformation starts with a single step. Join MR Real StrongMan Gym today and let's build your strongest version together.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="/contacts" 
                className="inline-block bg-white text-primary px-12 py-5 rounded-full text-xl font-black uppercase tracking-widest shadow-2xl hover:bg-gray-100 transition-colors"
              >
                Start Your Journey
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              className="absolute top-6 right-6 z-[110] text-white/70 hover:text-primary transition-colors p-2 bg-white/10 rounded-full backdrop-blur-md border border-white/10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={32} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage}
                  alt="Gallery Preview"
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
            </motion.div>

            {/* Navigation Hints */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 text-sm font-medium tracking-[0.2em] flex items-center gap-4">
              <span className="w-12 h-px bg-white/20" />
              CLICK OUTSIDE TO CLOSE
              <span className="w-12 h-px bg-white/20" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function TransformationCard({ transform, delay }: { transform: any, delay: number }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="glass-card border-0 overflow-hidden h-full group">
        <div 
          ref={containerRef}
          className="relative h-96 cursor-col-resize select-none overflow-hidden"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* After image */}
          <div className="absolute inset-0">
            <Image src={transform.after} alt="After" fill className="object-cover" />
            <Badge className="absolute bottom-4 right-4 bg-primary text-white border-0 px-3 py-1 font-bold z-20">AFTER</Badge>
          </div>

          {/* Before image (clipped) */}
          <div 
            className="absolute inset-0 z-10 transition-none"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <Image src={transform.before} alt="Before" fill className="object-cover" />
            <Badge className="absolute bottom-4 left-4 bg-gray-800 text-white border-0 px-3 py-1 font-bold z-20">BEFORE</Badge>
          </div>

          {/* Divider line */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white z-30 shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-none"
            style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-primary/20">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white/50 backdrop-blur-sm">
          <h3 className="text-xl font-black mb-2 flex justify-between items-center capitalize">
            {transform.name}
            <span className="text-primary text-sm font-bold bg-primary/10 px-3 py-1 rounded-full">{transform.result}</span>
          </h3>
          <p className="text-muted-foreground text-sm italic">Slide to compare the amazing results</p>
        </div>
      </Card>
    </motion.div>
  );
}

