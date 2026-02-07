import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock, Youtube, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white pt-20 pb-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <h2 className="text-3xl font-black tracking-tighter">
                MR <span className="text-primary">REAL STRONGMAN</span>
              </h2>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Premium fitness center dedicated to helping you achieve your strongest self. 
              Join our community and transform your life today.
            </p>
            <div className="flex gap-4">
              <SocialLink href="https://www.instagram.com/mr_real_strongman_gym?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" icon={<Instagram className="w-5 h-5" />} label="Instagram" />
              <SocialLink href="https://www.facebook.com/share/181NvWrvUs/" icon={<Facebook className="w-5 h-5" />} label="Facebook" />
              <SocialLink href="https://youtube.com/@trichystrongmanvijay8457?si=EmWnGH8W22d55GkS" icon={<Youtube className="w-5 h-5" />} label="Youtube" />
               <SocialLink href="https://wa.me/918807779835" icon={<MessageCircle className="w-5 h-5" />} label="WhatsApp" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-primary pl-3">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/trainers">Our Trainers</FooterLink>
              <FooterLink href="/membership">Membership Plans</FooterLink>
              <FooterLink href="/timings">Class Schedule</FooterLink>
              <FooterLink href="/contacts">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-primary pl-3">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Link 
                  href="https://maps.app.goo.gl/rZBvKSozyqCxe6oD8" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-start gap-3"
                >
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span>
                    1/2 Renga Nagar, Edumalai Road<br />
                    Near Bank of Baroda,<br />
                    Mannachanallur, Trichy
                  </span>
                </Link>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Link 
                  href="https://wa.me/918807779835" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3"
                >
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span>+91 88077 79835</span>
                </Link>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>nvijayakumar110@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-primary pl-3">Opening Hours</h3>
            <ul className="space-y-4">
              <li className="bg-white/5 rounded-lg p-4 border border-white/5">
                <div className="flex items-center gap-2 mb-2 text-white font-medium">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Mon - Sat (Unisex)</span>
                </div>
                <div className="text-gray-400 text-sm pl-6">
                  Morning: 5:00 AM - 10:00 AM <br />
                  Evening: 4:30 PM - 9:30 PM
                </div>
              </li>
              <li className="bg-white/5 rounded-lg p-4 border border-white/5">
                <div className="flex items-center gap-2 mb-2 text-white font-medium">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Women's Exclusive</span>
                </div>
                <div className="text-gray-400 text-sm pl-6">
                  10:00 AM - 4:00 PM (Mon-Sat)
                </div>
              </li>
              <li className="bg-white/5 rounded-lg p-4 border border-white/5">
                <div className="flex items-center gap-2 mb-2 text-white font-medium">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Sun (Unisex)</span>
                </div>
                <div className="text-gray-400 text-sm pl-6">
                  Morning: 6:00 AM - 10:00 AM 
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Mr Real StrongMan Gym. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a 
    href={href} 
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all duration-300 hover:scale-110"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link 
      href={href} 
      className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group"
    >
      <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:w-2 transition-all" />
      {children}
    </Link>
  </li>
);