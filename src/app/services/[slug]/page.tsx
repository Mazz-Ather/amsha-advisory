"use client";

import React from "react";
import { services } from "@/data/services";
import SiteLayout from "@/components/site-layout";
import Image from "next/image";
import ScrollReveal from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import NewsletterSignup from "@/components/newsletter-signup";

interface ServiceSlugPageProps {
  params: {
    slug: string;
  };
}

export default function ServiceSlugPage({ params }: ServiceSlugPageProps) {
  // Instead of using React.use(), access the slug directly for now
  const service = services.find((service) => service.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.imageSrc}
            alt={service.name}
            fill
            className="object-cover brightness-[0.45]"
            priority
          />
        </div>
        <div className="container relative z-10 max-w-5xl mx-auto">
          <ScrollReveal>
            <h1 className="heading-xl text-white mb-6">{service.name}</h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {service.shortDescription}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <Link href="/contact">
              <Button className="bg-amsha-blue hover:bg-amsha-blue-dark text-white px-8 py-6 rounded-md text-lg">
                Request a Consultation
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <h2 className="heading-lg text-amsha-dark mb-6">Service Overview</h2>
              <p className="paragraph text-gray-700 mb-8 whitespace-pre-line">
                {service.fullDescription}
              </p>
              <div className="space-x-4">
                <Link href="/contact">
                  <Button className="bg-amsha-blue hover:bg-amsha-blue-dark text-white">
                    Get Started
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="border-amsha-blue text-amsha-blue hover:bg-amsha-blue/5">
                    View All Services
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={service.imageSrc}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-amsha-dark text-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Our Process</h2>
              <p className="paragraph text-gray-300 max-w-3xl mx-auto">
                We follow a structured approach to deliver exceptional results with our {service.name} service
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.steps.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 100}>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 h-full flex flex-col hover:bg-white/15 transition-colors duration-300">
                  <div className="bg-amsha-blue rounded-full h-12 w-12 flex items-center justify-center mb-4 text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-300 flex-grow">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="heading-lg text-amsha-dark mb-4">Key Benefits</h2>
              <p className="paragraph text-gray-700 max-w-3xl mx-auto">
                Here's how our {service.name} service can transform your business
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                <div className="bg-amsha-blue/10 rounded-full h-12 w-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amsha-blue">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-amsha-dark mb-3">Improved Performance</h3>
                <p className="text-gray-700">
                  Our strategies are designed to enhance operational efficiency and drive measurable improvements in performance metrics.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                <div className="bg-amsha-blue/10 rounded-full h-12 w-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amsha-blue">
                    <path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7"></path>
                    <path d="M15 7h6v6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-amsha-dark mb-3">Sustainable Growth</h3>
                <p className="text-gray-700">
                  We focus on creating long-term value and sustainable growth strategies that position your business for future success.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                <div className="bg-amsha-blue/10 rounded-full h-12 w-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amsha-blue">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-amsha-dark mb-3">Expert Insights</h3>
                <p className="text-gray-700">
                  Gain access to our team of industry experts who bring deep knowledge and innovative thinking to your specific challenges.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amsha-blue text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="heading-md mb-3">Ready to Get Started?</h2>
              <p className="text-white/90">
                Contact us today to learn more about our {service.name} services and how we can help your business succeed.
              </p>
            </div>
            <div>
              <Link href="/contact">
                <Button className="bg-white text-amsha-blue hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="heading-lg text-amsha-dark mb-4">Explore Other Services</h2>
              <p className="paragraph text-gray-700 max-w-3xl mx-auto">
                Discover our full range of consulting solutions designed to address your business needs
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((relatedService, index) => (
                <ScrollReveal key={relatedService.slug} delay={index * 100}>
                  <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
                    <div className="relative h-[200px]">
                      <Image
                        src={relatedService.imageSrc}
                        alt={relatedService.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-amsha-dark mb-3">{relatedService.name}</h3>
                      <p className="text-gray-700 mb-4 flex-grow">{relatedService.shortDescription}</p>
                      <Link href={`/services/${relatedService.slug}`}>
                        <Button variant="outline" className="border-amsha-blue text-amsha-blue hover:bg-amsha-blue/5 w-full">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services">
              <Button className="bg-amsha-blue hover:bg-amsha-blue-dark text-white">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <NewsletterSignup />
          </ScrollReveal>
        </div>
      </section>
    </SiteLayout>
  );
}
