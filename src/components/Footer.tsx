import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle, Instagram, Facebook, Youtube, Clock,  } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Women's Exclusive Banner */}
      <div className="bg-primary/10 border-t border-primary/20 py-4">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-primary font-bold text-lg mb-2">Women's Exclusive Training Sessions</h3>
            <p className="text-sm text-muted-foreground">
              Dedicated women's hours with female trainer V.Ajitha | Monday-Saturday 10:00 AM - 4:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">MR Real StrongMan</h2>
            <p className="text-sm mb-4 opacity-90">Fitness & Unisex Gym</p>
            <p className="text-sm mb-6 opacity-80">
              Transform your body and build your strength at our premium fitness center. 
              Professional training, state-of-the-art equipment, and dedicated support for your fitness journey.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/mr_real_strongman_gym?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://wa.me/918807779835" target="_blank" className="hover:text-primary transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-primary transition-colors opacity-80 hover:opacity-100">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-primary transition-colors opacity-80 hover:opacity-100">
                  About
                </Link>
              </li>
              <li>
                <Link href="/trainers" className="text-sm hover:text-primary transition-colors opacity-80 hover:opacity-100">
                  Trainers
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-sm hover:text-primary transition-colors opacity-80 hover:opacity-100">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-sm hover:text-primary transition-colors opacity-80 hover:opacity-100">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-sm hover:text-primary transition-colors opacity-80 hover:opacity-100">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Our Services</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Personal Training</li>
              <li>Group Classes</li>
              <li>Nutrition Consulting</li>
              <li>Strength Training</li>
              <li>Cardio Equipment</li>
              <li>Women's Exclusive Sessions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="opacity-80">
                  1/2 Renga Nagar, Edumalai Road<br />
                  Near Bank of Baroda,<br />
                  Mannachanallur, Trichy
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="opacity-80">+91 8807779835</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="opacity-80">nvijayakumar110@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Operating Hours Section */}
      <div className="border-t border-border/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-bold text-primary">Operating Hours</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm">
            <div>
              <p className="font-semibold mb-1">Monday - Saturday</p>
              <p className="opacity-80">Morning (Unisex): 5:00 AM - 10:00 AM</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Monday - Saturday</p>
              <p className="opacity-80">Women's Exclusive: 10:00 AM - 4:00 PM</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Monday - Sunday</p>
              <p className="opacity-80">Evening (Unisex): 4:30 PM - 9:30 PM</p>
            </div>
            <div className="md:col-span-3">
              <p className="font-semibold mb-1">Sunday (Unisex)</p>
              <p className="opacity-80"> 6:00 PM - 10:00 AM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border/20 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            © 2019 MR Real StrongMan Fitness And Unisex Gym. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}