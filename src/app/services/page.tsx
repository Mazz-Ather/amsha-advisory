"use client";

import React from "react";
import Image from "next/image";
import SiteLayout from "@/components/site-layout";
import ScrollReveal from "@/components/scroll-reveal";
import ServiceCard from "@/components/service-card";
import NewsletterSignup from "@/components/newsletter-signup";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dnqcj9kh3/image/upload/v1744218688/og_og_1651178496287644215_upbb9p.jpg"
            alt="Business consulting services"
            fill
            className="object-cover brightness-[0.45]"
            priority
          />
        </div>
        <div className="container relative z-10 max-w-5xl mx-auto">
          <ScrollReveal>
            <h1 className="heading-xl md:text-6xl text-white mb-6">Our Services</h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
            At Amsha Advisory, we offer a range of people-focused solutions designed to address the unique challenges businesses face. From HR consultancy to employee development and recruitment, our tailored services empower organizations to optimize their workforce and foster sustainable growth.

</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="heading-lg text-amsha-dark mb-4">What We Offer</h2>
              <p className="paragraph text-gray-700 max-w-3xl mx-auto">
                Explore our range of consulting services designed to address your most critical business challenges and opportunities.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-8 md:space-y-0 md:divide-y">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.name}
                description={service.shortDescription}
                imageSrc={service.imageSrc}
                slug={service.slug}
                reversed={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-amsha-dark text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <h2 className="heading-lg mb-6">Our Approach</h2>
              <p className="paragraph mb-6">
                At Amsha Advisory, we follow a structured approach to ensure we deliver the best possible outcomes for our clients. Our process is designed to understand your unique challenges, develop tailored solutions, and implement strategies that drive measurable results.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-amsha-blue rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Discovery</h3>
                    <p className="text-gray-300">We begin by thoroughly understanding your business, challenges, and goals.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-amsha-blue rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Strategy Development</h3>
                    <p className="text-gray-300">Our experts create customized solutions tailored to your specific needs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-amsha-blue rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Implementation</h3>
                    <p className="text-gray-300">We work with you to implement the strategy with clear milestones.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-amsha-blue rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Review & Optimize</h3>
                    <p className="text-gray-300">We continuously monitor progress and make adjustments to ensure optimal results.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
                  alt="Our consulting approach"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <NewsletterSignup />
          </ScrollReveal>
        </div>
      </section>
    </SiteLayout>
  );
}
