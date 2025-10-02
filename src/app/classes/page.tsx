"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Clock, Users, TrendingUp, Heart, Zap, Target } from "lucide-react";

export default function ClassesPage() {
  const classes = [
    {
      name: "HIIT Training",
      description: "High-intensity interval training designed to maximize calorie burn and boost metabolism in just 45 minutes.",
      schedule: "Mon, Wed, Fri - 6:00 AM & 6:00 PM",
      duration: "45 min",
      capacity: "15 people",
      difficulty: "Advanced",
      trainer: "Mike Johnson",
      category: "cardio",
      image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&h=600&fit=crop"
    },
    {
      name: "Yoga Flow",
      description: "Dynamic yoga practice focusing on breath, movement, and mindfulness to enhance flexibility and reduce stress.",
      schedule: "Tue, Thu, Sat - 7:00 AM & 7:00 PM",
      duration: "60 min",
      capacity: "20 people",
      difficulty: "All Levels",
      trainer: "Sarah Williams",
      category: "mindfulness",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop"
    },
    {
      name: "Strength Training",
      description: "Build muscle mass and increase overall strength with compound movements and progressive overload techniques.",
      schedule: "Mon, Wed, Fri - 5:00 PM",
      duration: "60 min",
      capacity: "12 people",
      difficulty: "Intermediate",
      trainer: "David Chen",
      category: "strength",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop"
    },
    {
      name: "Spinning",
      description: "Indoor cycling class with varying intensity levels, combining endurance and speed work for ultimate cardio.",
      schedule: "Tue, Thu - 6:30 AM & 5:30 PM",
      duration: "45 min",
      capacity: "25 people",
      difficulty: "Intermediate",
      trainer: "Emma Rodriguez",
      category: "cardio",
      image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=800&h=600&fit=crop"
    },
    {
      name: "Boxing Bootcamp",
      description: "Learn proper boxing techniques while getting an intense full-body workout that builds power and agility.",
      schedule: "Mon, Wed - 7:00 PM",
      duration: "50 min",
      capacity: "18 people",
      difficulty: "Advanced",
      trainer: "Marcus Thompson",
      category: "strength",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=600&fit=crop"
    },
    {
      name: "Pilates Core",
      description: "Focus on core strength, posture, and flexibility through controlled movements and proper breathing.",
      schedule: "Tue, Thu, Sat - 9:00 AM",
      duration: "55 min",
      capacity: "15 people",
      difficulty: "All Levels",
      trainer: "Lisa Anderson",
      category: "mindfulness",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop"
    }
  ];

  const trainers = [
    {
      name: "Mike Johnson",
      specialty: "HIIT & Performance",
      experience: "8 years",
      certifications: "NASM-CPT, CrossFit L2",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop"
    },
    {
      name: "Sarah Williams",
      specialty: "Yoga & Mindfulness",
      experience: "10 years",
      certifications: "RYT-500, Meditation Guide",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      name: "David Chen",
      specialty: "Strength & Conditioning",
      experience: "12 years",
      certifications: "CSCS, USAW L1",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      name: "Emma Rodriguez",
      specialty: "Cycling & Endurance",
      experience: "6 years",
      certifications: "Spinning Instructor, ACSM-CPT",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "cardio":
        return <Heart className="h-5 w-5" />;
      case "strength":
        return <Zap className="h-5 w-5" />;
      case "mindfulness":
        return <Target className="h-5 w-5" />;
      default:
        return <TrendingUp className="h-5 w-5" />;
    }
  };

  const filterClasses = (category: string) => {
    if (category === "all") return classes;
    return classes.filter(c => c.category === category);
  };

  return (
    <>
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 to-muted">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Classes</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert-led fitness classes designed to help you reach your goals, whatever they may be
            </p>
          </div>
        </section>

        {/* Classes Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="cardio">Cardio</TabsTrigger>
                <TabsTrigger value="strength">Strength</TabsTrigger>
                <TabsTrigger value="mindfulness">Wellness</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {classes.map((classItem, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group">
                      <div className="relative h-48 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                          style={{ backgroundImage: `url('${classItem.image}')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <Badge className="absolute top-4 right-4 bg-primary">
                          {classItem.difficulty}
                        </Badge>
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="flex items-center gap-2">
                            {getCategoryIcon(classItem.category)}
                            <span className="text-sm font-medium capitalize">{classItem.category}</span>
                          </div>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-2xl">{classItem.name}</CardTitle>
                        <CardDescription className="text-sm">with {classItem.trainer}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">{classItem.description}</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{classItem.schedule}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <TrendingUp className="h-4 w-4" />
                              <span>{classItem.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Users className="h-4 w-4" />
                              <span>{classItem.capacity}</span>
                            </div>
                          </div>
                        </div>
                        <Button asChild className="w-full">
                          <Link href="/membership">Reserve Spot</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="cardio" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filterClasses("cardio").map((classItem, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group">
                      <div className="relative h-48 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                          style={{ backgroundImage: `url('${classItem.image}')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <Badge className="absolute top-4 right-4 bg-primary">
                          {classItem.difficulty}
                        </Badge>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-2xl">{classItem.name}</CardTitle>
                        <CardDescription className="text-sm">with {classItem.trainer}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">{classItem.description}</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{classItem.schedule}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <TrendingUp className="h-4 w-4" />
                              <span>{classItem.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Users className="h-4 w-4" />
                              <span>{classItem.capacity}</span>
                            </div>
                          </div>
                        </div>
                        <Button asChild className="w-full">
                          <Link href="/membership">Reserve Spot</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="strength" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filterClasses("strength").map((classItem, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group">
                      <div className="relative h-48 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                          style={{ backgroundImage: `url('${classItem.image}')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <Badge className="absolute top-4 right-4 bg-primary">
                          {classItem.difficulty}
                        </Badge>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-2xl">{classItem.name}</CardTitle>
                        <CardDescription className="text-sm">with {classItem.trainer}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">{classItem.description}</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{classItem.schedule}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <TrendingUp className="h-4 w-4" />
                              <span>{classItem.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Users className="h-4 w-4" />
                              <span>{classItem.capacity}</span>
                            </div>
                          </div>
                        </div>
                        <Button asChild className="w-full">
                          <Link href="/membership">Reserve Spot</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="mindfulness" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filterClasses("mindfulness").map((classItem, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group">
                      <div className="relative h-48 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                          style={{ backgroundImage: `url('${classItem.image}')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <Badge className="absolute top-4 right-4 bg-primary">
                          {classItem.difficulty}
                        </Badge>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-2xl">{classItem.name}</CardTitle>
                        <CardDescription className="text-sm">with {classItem.trainer}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">{classItem.description}</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{classItem.schedule}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <TrendingUp className="h-4 w-4" />
                              <span>{classItem.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Users className="h-4 w-4" />
                              <span>{classItem.capacity}</span>
                            </div>
                          </div>
                        </div>
                        <Button asChild className="w-full">
                          <Link href="/membership">Reserve Spot</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Trainers Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Trainers</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Certified professionals dedicated to helping you achieve your fitness goals
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {trainers.map((trainer, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-32 h-32 rounded-full overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${trainer.image}')` }}
                      />
                    </div>
                    <CardTitle className="text-xl">{trainer.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold">
                      {trainer.specialty}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p className="text-muted-foreground">
                      <span className="font-semibold">Experience:</span> {trainer.experience}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-semibold">Certifications:</span><br />
                      {trainer.certifications}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="bg-primary text-primary-foreground p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join APEX GYM today and get access to all our classes and facilities
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/membership">View Membership Options</Link>
              </Button>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}