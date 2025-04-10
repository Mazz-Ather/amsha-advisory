"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import SiteLayout from "@/components/site-layout";
import ScrollReveal from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      toast.success("Your message has been sent successfully! We'll get back to you soon.");
    }, 1500);
  };

  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dnqcj9kh3/image/upload/v1744229814/NEROSHIP-iletisim-Banner2_exm5ru.jpg"
            alt="Contact Us"
            fill
            className="object-cover brightness-[0.55]"
            priority
          />
        </div>
        <div className="container relative z-10 max-w-5xl mx-auto">
          <ScrollReveal>
            <h1 className="heading-xl text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">Contact Us</h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto">
            If your business is facing challenges with HR, employee development, or organizational efficiency, or if you’re seeking expert guidance on people strategies, we’re here to help. Whether you're looking to optimize your team, implement new training programs, or improve your hiring processes, drop your details below, and one of our experts will reach out to you.            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <ScrollReveal direction="left">
              <div className="space-y-10 pt-10 ">
                <div>
                  <h2 className="heading-lg text-[#6EA1C3] drop-shadow-[0_0_10px_rgba(110,161,195,0.7)] mb-6">Get in Touch</h2>
                  <p className="paragraph text-gray-700 mb-8">
                    We'd love to hear from you. Reach out to us with your questions, concerns, or to schedule a consultation. Our team is ready to assist you.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-amsha-blue text-white p-3 rounded-full shrink-0 flex items-center justify-center">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-amsha-dark mb-1">Visit Us</h3>
                      <p className="text-gray-700">
                      Office 1019 | Park Lane Tower |
                      Business Bay |
                      Dubai | UAE.
                      </p>
                      <p className='text-gray-700'>
                    2nd floor | office no 15 | Viva Towers | Ali Hassan Mwenyi Rd | Dar es Salaam | Tanzania.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-amsha-blue text-white p-3 rounded-full shrink-0 flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-amsha-dark mb-1">Email Us</h3>
                      <p className="text-gray-700">
                        <a href="mailto:info@amshaadvisory.com" className="hover:text-amsha-blue transition-colors">
                        info@amshaadvisory.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-amsha-blue text-white p-3 rounded-full shrink-0 flex items-center justify-center">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-amsha-dark mb-1">Call Us</h3>
                      <p className="text-gray-700">
                        <a href="tel:+1234567890" className="hover:text-amsha-blue transition-colors">
                        +971 565 7911 11
                        </a> 
                      </p>
                      <p className="text-gray-700 mt-1">
                        <a href="tel:+1234567891" className="hover:text-amsha-blue transition-colors">
                        +255 757 7911 11</a>
                      </p>
                    </div>
                  </div>

                  {/* <div className="flex items-start gap-4">
                    <div className="bg-amsha-blue text-white p-3 rounded-full shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-amsha-dark mb-1">Business Hours</h3>
                      <p className="text-gray-700">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="right">
              <Card className="overflow-hidden !bg-gray-900 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 bg-gradient-to-b from-gray-[#2F3340] to-[#2F3340]">
                  <h2 className="heading-md text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] mb-6 border-l-4 border-[#6EA1C3] pl-4">Send Us a Message</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-1">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`bg-white/80 focus:bg-white transition-colors duration-200 ${errors.name ? "border-red-500" : "border-gray-300 focus:border-[#6EA1C3]"}`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john.doe@example.com"
                        className={`bg-white/80 focus:bg-white transition-colors duration-200 ${errors.email ? "border-red-500" : "border-gray-300 focus:border-[#6EA1C3]"}`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-white/90 mb-1">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        className={`bg-white/80 focus:bg-white transition-colors duration-200 ${errors.subject ? "border-red-500" : "border-gray-300 focus:border-[#6EA1C3]"}`}
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        className={`bg-white/80 focus:bg-white transition-colors duration-200 ${errors.message ? "border-red-500" : "border-gray-300 focus:border-[#6EA1C3]"}`}
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-amsha-blue hover:bg-amsha-blue-dark text-white py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="h-[400px] rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2157848152127!2d-73.98777542342244!3d40.75797383440202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b28ecc71%3A0x5c2f45f23d7efa02!2sTimes%20Square%2C%20New%20York%2C%20NY%2010036!5e0!3m2!1sen!2sus!4v1702419377260!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
                className="w-full h-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </SiteLayout>
  );
}
