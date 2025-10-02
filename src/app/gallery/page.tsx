"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Gallery() {
  const categories = [
    {
      title: "Gym Facilities",
      images: [
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop"
      ]
    },
    {
      title: "Training Sessions",
      images: [
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop"
      ]
    },
    {
      title: "Community & Events",
      images: [
        "https://images.unsplash.com/photo-1571388208497-71bedc66e932?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1574680088814-a440c57e78c2?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&h=400&fit=crop"
      ]
    },
    {
      title: "Equipment",
      images: [
        "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&h=400&fit=crop"
      ]
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
              {categories.map((category, catIndex) => (
                <div key={catIndex}>
                  <h2 className="text-3xl font-bold mb-6">{category.title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {category.images.map((image, imgIndex) => (
                      <Card key={imgIndex} className="overflow-hidden border-2 hover:shadow-xl transition-shadow group cursor-pointer">
                        <div className="relative h-64 overflow-hidden">
                          <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                            style={{ backgroundImage: `url('${image}')` }}
                          />
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
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
              Visit MR Real StrongMan and see why we're Trichy's premier fitness destination
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}