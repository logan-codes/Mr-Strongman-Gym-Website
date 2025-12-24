"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/trainers", label: "Trainers" },
    { href: "/membership", label: "Membership" },
    { href: "/timings", label: "Timings" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contacts", label: "Contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
          <div className="flex items-center gap-2">
            <Image
              src="/logo/Logo.png"
              alt="MR Real StrongMan Logo"
              width={90}
              height={70}
              className="object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-primary">MR Real StrongMan</span>
              <span className="text-xs text-muted-foreground">Fitness & Unisex Gym</span>
            </div>
          </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contacts">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <span>Join Now</span>
            </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="bg-primary hover:bg-primary/90 w-full">
                Join Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}