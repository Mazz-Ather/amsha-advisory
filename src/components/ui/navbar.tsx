"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";

const services = [
  { name: "HR Consultancy", slug: "hr-consultancy" },
  { name: "Entrepreneurial Consulting", slug: "entrepreneurial-consulting" },
  { name: "Employee Development & Training", slug: "employee-development-training" },
  { name: "Career Development", slug: "career-development" },
  { name: "Upskilling & Training", slug: "upskilling-training" },
  { name: "Leadership Coaching", slug: "leadership-coaching" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-none ",
        scrolled
          ? ""
          : ""
      )}
    >
      <div className="max-w-6xl bg-[#2D3142] mx-auto">
        <div className="flex items-center px-4 sm:px-6 lg:px-8 py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              <Image
                src='https://res.cloudinary.com/dnqcj9kh3/image/upload/v1744212528/logo-dark_j5dk8q.svg'
                alt='Amsha Advisory Logo'
                width={90}
                height={90}
                className="brightness-0 invert" // Make logo white
              />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center space-x-8 flex-grow">
            <Link
              href="/"
              className={cn(
                "text-white hover:text-blue-300 transition-colors",
                pathname === "/" && "text-blue-300 font-medium"
              )}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={cn(
                "text-white hover:text-blue-300 transition-colors",
                pathname === "/about" && "text-blue-300 font-medium"
              )}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <Link
                href="/services"
                className={cn(
                  "flex items-center text-white hover:text-blue-300 transition-colors",
                  pathname.startsWith("/services") && "text-blue-300 font-medium"
                )}
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              {/* Dropdown content remains the same */}
            </div>

            <Link
              href="/contact"
              className={cn(
                "text-white hover:text-blue-300 transition-colors",
                pathname === "/contact" && "text-blue-300 font-medium"
              )}
            >
              Contact Us
            </Link>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center ml-auto">
            <Link
              href="/contact"
              className="bg-white text-[#2D3142] hover:bg-gray-100 px-5 py-2 rounded-md transition-all duration-300 font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
