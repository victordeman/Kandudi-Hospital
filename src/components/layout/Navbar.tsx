"use client";

import Link from "next/link";
import { useState } from "react";
import { HOSPITAL_INFO, NAV_LINKS } from "@/constants";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Clock } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="bg-primary text-primary-foreground py-2 text-xs hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> Emergency: 24/7 Available</span>
            <span className="flex items-center gap-1 font-bold"><Phone className="w-3 h-3" /> {HOSPITAL_INFO.phone}</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Mon - Sun: 24 Hours</span>
          </div>
          <div className="flex items-center gap-4">
            <span>{HOSPITAL_INFO.email}</span>
            <span className="flex items-center gap-1">🇳🇬 Proudly serving Anambra</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary leading-tight">
            Kandudi <span className="text-secondary-foreground block text-sm font-medium">Specialist Hospital & Maternity</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              {NAV_LINKS.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                      {link.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90 rounded-full px-6">
            <Link href="/appointments">Book Appointment</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t bg-background p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t">
             <p className="text-xs font-bold text-primary flex items-center gap-2"><Phone className="w-3 h-3" /> {HOSPITAL_INFO.phone}</p>
          </div>
          <Button asChild className="w-full rounded-full">
            <Link href="/appointments" onClick={() => setIsOpen(false)}>Book Appointment</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
