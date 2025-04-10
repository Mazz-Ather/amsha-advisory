"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowUp,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const services = [
  { name: "HR Consultancy", slug: "hr-consultancy" },
  { name: "Entrepreneurial Consulting", slug: "entrepreneurial-consulting" },
  { name: "Employee Development & Training", slug: "employee-development-training" },
  { name: "Career Development", slug: "career-development" },
  { name: "Upskilling & Training", slug: "upskilling-training" },
  { name: "Leadership Coaching", slug: "leadership-coaching" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-amsha-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
           <Link href="/" className="text-2xl font-bold text-amsha-blue">
              <Image
                src='https://res.cloudinary.com/dnqcj9kh3/image/upload/v1744212349/logo-light_i85wr2.svg'
                alt='Amsha Advisory Logo'
                width={100}
                height={100}
                className="contrast-150"
              />
            </Link>
            <p className="text-gray-300 max-w-sm">
              We provide expert business consulting services to help your
              organization achieve its goals and maximize potential.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amsha-blue-light transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amsha-blue-light transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amsha-blue-light transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amsha-blue-light transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-gray-300 hover:text-amsha-blue-light transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-gray-300 hover:text-amsha-blue-light transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="block text-gray-300 hover:text-amsha-blue-light transition-colors"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="block text-gray-300 hover:text-amsha-blue-light transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <div className="space-y-2">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="block text-gray-300 hover:text-amsha-blue-light transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-amsha-blue-light shrink-0 mt-1" size={18} />
                <span className="text-gray-300">
                Office 1019 | Park Lane Tower | Business Bay | Dubai | UAE.
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-amsha-blue-light shrink-0" size={18} />
                <a
                  href="mailto:info@amsha-advisory.com"
                  className="text-gray-300 hover:text-amsha-blue-light transition-colors"
                >
                 info@amshaadvisory.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-amsha-blue-light shrink-0" size={18} />
                <a
                  href="tel:+1234567890"
                  className="text-gray-300 hover:text-amsha-blue-light transition-colors"
                >
                  
+255 757 7911 11 <br /> 
+971 565 7911 11
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Amsha Advisory. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-amsha-blue text-white p-3 rounded-full shadow-md hover:bg-amsha-blue-dark transition-colors focus:outline-none"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
