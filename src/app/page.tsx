"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dumbbell, Users, Clock, Award, TrendingUp, Heart } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import ScrollProgress from "@/components/ScrollProgress";
import NumberFlow from "@number-flow/react";

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  
  const features = [
    {
      icon: Dumbbell,
      title: "Premium Equipment",
      description:
        "State-of-the-art machines and free weights for all fitness levels",
    },
    {
      icon: Users,
      title: "Expert Trainers",
      description: "Professionals with years of experience",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Morning, evening sessions and women's exclusive hours",
    },
    {
      icon: Award,
      title: "Results Driven",
      description: "Personalized programs designed for your success",
    },
  ];

  const classes = [
    {
      title: "Strength Training",
      description: "Build muscle and increase power",
      image:
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop",
    },
    {
      title: "Functional Fitness",
      description: "Improve movement patterns and athletic performance",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    },
    {
      title: "Women's Exclusive",
      description: "Dedicated training sessions with female trainer",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop",
    },
  ];

  const [index, setIndex] = useState(0);

  // auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  const testimonials = [
    {
      name: "Rahul Mehta",
      role: "Member • 1 Year",
      text: "The quality of equipment here is outstanding. From cardio machines to free weights, everything feels premium and well-maintained.",
    },
    {
      name: "Sneha Kapoor",
      role: "Member • 8 Months",
      text: "The trainers are extremely professional and supportive. They helped me stay consistent and reach my fitness goals faster than I expected.",
    },
    {
      name: "Aman Verma",
      role: "Member • 6 Months",
      text: "I love the friendly atmosphere here. Everyone is motivating and there’s zero judgment, which makes workouts enjoyable every day.",
    },
    {
      name: "Pooja Nair",
      role: "Member • 1.5 Years",
      text: "This gym feels like a second home. Great trainers, great people, and top-notch equipment — couldn’t ask for more.",
    },
    {
      name: "Kunal Singh",
      role: "Member • 10 Months",
      text: "Clean facilities, modern machines, and a very positive vibe. It’s the perfect place for beginners and serious athletes alike.",
    },
  ];

  return (
    <>
      <Navigation />
      <ScrollProgress />

      <main className="pt-0">
        {/* Hero Section */}
        <section className="relative h-[100svh] min-h-[600px] overflow-hidden flex items-center justify-center">
          {/* Parallax Background */}
          <motion.div 
            style={{ y: y1 }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background z-10" />
            <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent z-10" />
            <Image
              src={`url('images/hero.jpg')`}
              alt="MR Real StrongMan Gym"
              fill
              priority
              className="object-cover object-center scale-110"
            />
          </motion.div>

          <div className="container relative z-20 px-4 pt-20 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block mb-6"
              >
                <Badge className="bg-primary text-primary-foreground px-4 py-1.5 text-sm md:text-base font-medium tracking-wide border-0 shadow-[0_0_20px_rgba(var(--primary),0.4)]">
                  TRANSFORM YOUR LIFE
                </Badge>
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight text-white drop-shadow-2xl">
                BUILD YOUR <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-white to-primary animate-pulse">
                  STRENGTH
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
                Premium fitness center in Mannachanallur, Trichy. 
                <span className="text-primary font-semibold"> Professional training</span>, 
                state-of-the-art equipment, and dedicated support.
              </p>

              <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start flex-wrap">
                <Button
                  size="xl"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg h-14 px-8 rounded-full shadow-[0_0_30px_rgba(var(--primary),0.3)] hover:shadow-[0_0_50px_rgba(var(--primary),0.5)] transition-all duration-300"
                  asChild
                >
                  <Link href="/membership">Join Now</Link>
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  className="text-white border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-xs text-lg h-14 px-8 rounded-full hover:border-primary/50 transition-all duration-300"
                  asChild
                >
                  <Link href="/timings">View Schedule</Link>
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  className="text-primary border-primary/30 bg-primary/10 hover:bg-primary/20 backdrop-blur-xs text-lg h-14 px-8 rounded-full hover:border-primary transition-all duration-300"
                  asChild
                >
                  <Link href="/contacts">Book Free Trial</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-widest opacity-70">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1 h-12 rounded-full bg-linear-to-b from-primary to-transparent"
            />
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-muted/50 relative overflow-hidden">
           {/* Background Elements */}
           <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
           <div className="absolute -left-20 top-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
           
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Us</h2>
              <p className="text-xl text-muted-foreground">
                We provide the best environment for your fitness journey with top-tier facilities and expert guidance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <Card className="glass-card border-white/5 h-full hover:bg-white/5 transition-all duration-300 group">
                    <CardContent className="p-8 text-center flex flex-col items-center h-full">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 text-primary">
                        <feature.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Classes */}
        {/* <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Featured Programs</h2>
              <p className="text-lg text-muted-foreground">Diverse training options for every fitness level</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {classes.map((classItem, index) => (
                <Card key={index} className="overflow-hidden border-2 hover:shadow-xl transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url('${classItem.image}')` }}
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{classItem.title}</h3>
                    <p className="text-muted-foreground mb-4">{classItem.description}</p>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/schedule">View Schedule</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Testimonials Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-center mb-16"
            >
              What Our Members Say
            </motion.h2>

            <div className="relative max-w-5xl mx-auto">
              <div className="absolute top-1/2 left-0 -translate-y-1/2 -left-4 md:-left-12 z-20">
                <Button variant="ghost" size="icon" onClick={prev} className="rounded-full hover:bg-primary/20 text-foreground">
                  <span className="text-2xl">‹</span>
                </Button>
              </div>
              
              <div className="absolute top-1/2 right-0 -translate-y-1/2 -right-4 md:-right-12 z-20">
                 <Button variant="ghost" size="icon" onClick={next} className="rounded-full hover:bg-primary/20 text-foreground">
                  <span className="text-2xl">›</span>
                </Button>
              </div>

              <div className="overflow-hidden py-10 px-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -50, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <Card className="glass-card border-black/5 bg-white/60 max-w-3xl mx-auto relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-8 opacity-10">
                          <span className="text-9xl font-serif text-primary">"</span>
                       </div>
                      <CardContent className="p-10 md:p-14 text-center">
                        <p className="text-xl md:text-3xl font-medium leading-relaxed mb-8 text-foreground/80">
                          {testimonials[index].text}
                        </p>
                        <div className="flex flex-col items-center">
                           <div className="w-12 h-12 bg-linear-to-br from-primary to-red-800 rounded-full mb-3 flex items-center justify-center font-bold text-white text-xl">
                              {testimonials[index].name.charAt(0)}
                           </div>
                          <div className="font-bold text-xl text-primary">
                            {testimonials[index].name}
                          </div>
                          <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                            {testimonials[index].role}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex justify-center mt-2 gap-3">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? "w-8 bg-primary" : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Women's Exclusive CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -skew-y-3 z-0 origin-left scale-110" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                  <div className="relative glass-card rounded-2xl p-2 border-white/5 rotate-3 hover:rotate-0 transition-transform duration-500">
                      <Image 
                        src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80" 
                        alt="Women's Training" 
                        width={600} 
                        height={400} 
                        className="rounded-xl object-cover h-[400px] w-full"
                      />
                  </div>
               </div>
               
               <div className="text-left">
                  <Badge className="mb-6 bg-primary hover:bg-primary/90 text-white border-0 px-4 py-1 text-sm">
                    WOMEN'S EXCLUSIVE
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Dedicated Women's <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-white">Training Zones</span>
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Train comfortably in our exclusive women-only hours with certified female trainer 
                    <strong className="text-primary"> V.Ajitha</strong>. Personalized guidance in a supportive environment.
                  </p>
                  
                  <div className="bg-primary/5 rounded-xl p-6 mb-8 border border-primary/10 decoration-clone">
                     <div className="flex items-center gap-4 mb-2">
                        <Clock className="text-primary w-6 h-6" />
                        <span className="font-semibold text-lg">Monday - Saturday</span>
                     </div>
                     <div className="text-2xl font-bold text-foreground">10:00 AM - 4:00 PM</div>
                  </div>
                  
                  <Button size="lg" className="bg-primary hover:bg-primary/90 border-0" asChild>
                    <Link href="/trainers">Meet Our Trainer</Link>
                  </Button>
               </div>
            </div>
          </div>
        </section>

        {/* Stats Section with NumberFlow */}
        <StatsSection />

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary z-0">
             <div className="absolute inset-0 bg-[url('/images/gym-pattern.png')] opacity-10 mix-blend-overlay" />
             <div className="absolute inset-0 bg-linear-to-b from-black/20 to-transparent" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight">
                READY TO <br />
                <span className="text-black/80">LEVEL UP?</span>
              </h2>
              <p className="text-xl md:text-2xl mb-10 text-white/90 font-medium">
                Join MR Real StrongMan today and transform your body with expert guidance
              </p>
              <Button size="xl" className="bg-white text-primary hover:bg-gray-100 shadow-2xl transition-transform hover:scale-105" asChild>
                <Link href="/contacts">Start Your Journey</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="py-24 bg-muted/50 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem value={500} label="Active Members" suffix="+" isInView={isInView} />
          <StatItem value={5} label="Years Experience" suffix="+" isInView={isInView} />
          <StatItem value={4} label="Expert Trainers" isInView={isInView} />
          <StatItem value={98} label="Satisfaction Rate" suffix="%" isInView={isInView} />
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ value, label, suffix = "", isInView }: { value: number, label: string, suffix?: string, isInView: boolean }) => (
  <div className="text-center p-6 glass-card rounded-2xl hover:bg-white/5 transition-colors">
    <div className="text-5xl md:text-6xl font-black text-primary mb-2 flex justify-center items-center">
      <NumberFlow 
        value={isInView ? value : 0} 
        trend={1}
        format={{ useGrouping: false }}
      />
      <span>{suffix}</span>
    </div>
    <div className="text-muted-foreground text-lg font-medium">{label}</div>
  </div>
);
