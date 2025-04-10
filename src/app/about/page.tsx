"use client";

import React from "react";
import Image from "next/image";
import SiteLayout from "@/components/site-layout";
import ScrollReveal from "@/components/scroll-reveal";
import NewsletterSignup from "@/components/newsletter-signup";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  const coreValues = [
    {
      title: "Excellence",
      description: "We strive for excellence in every aspect of our work, pushing boundaries to deliver exceptional results.",
      icon: "https://res.cloudinary.com/dnqcj9kh3/image/upload/v1744232920/iStock-185948671_ri3ecm.jpg"
    },
    {
      title: "Integrity",
      description: "We uphold the highest standards of integrity, honesty, and ethics in all our professional relationships.",
      icon: "https://res.cloudinary.com/dnqcj9kh3/image/upload/v1744232713/artworks-000205396611-bp3dry-t500x500_foyy3y.jpg"
    },
    {
      title: "Innovation",
      description: "We embrace innovative thinking to solve complex challenges and create forward-looking solutions.",
      icon: "https://res.cloudinary.com/dnqcj9kh3/image/upload/v1744232728/i_1_xw8k9w.webp"
    },
    {
      title: "Client-Centric",
      description: "We put our clients' needs first, focusing on delivering exceptional value and building lasting partnerships.",
      icon: "https://res.cloudinary.com/dnqcj9kh3/image/upload/v1744232985/client-centric-red-stamp-client-centric-red-grunge-stamp-86378954_tu1wtm.webp"
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      bio: "With over 20 years of experience in business consulting, Dr. Johnson founded Amsha Advisory with a vision to transform how organizations approach their challenges.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "HR Consulting Director",
      bio: "Michael brings 15 years of expertise in human resources management, helping organizations build effective HR strategies and practices.",
      image: "https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?q=80&w=1000&auto=format&fit=crop"
    },
    {
      name: "Amanda Roberts",
      role: "Leadership Development Lead",
      bio: "Amanda specializes in executive coaching and leadership development, with a background in organizational psychology.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop"
    },
    {
      name: "David Wilson",
      role: "Entrepreneurial Consulting Director",
      bio: "A former startup founder with multiple successful exits, David now helps entrepreneurs navigate the challenges of building and scaling businesses.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  const milestones = [
    {
      year: "2010",
      title: "Foundation",
      description: "Amsha Advisory was founded with a mission to provide innovative business consulting services."
    },
    {
      year: "2013",
      title: "Expansion",
      description: "Expanded our service offerings to include HR consultancy and leadership development."
    },
    {
      year: "2016",
      title: "Recognition",
      description: "Received the Business Excellence Award for our contributions to the industry."
    },
    {
      year: "2018",
      title: "Global Reach",
      description: "Expanded operations to serve clients internationally across multiple sectors."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched innovative digital consulting services to help businesses navigate the changing landscape."
    },
    {
      year: "2023",
      title: "Sustainability Focus",
      description: "Introduced specialized consulting services focused on sustainable business practices."
    }
  ];

  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dnqcj9kh3/image/upload/v1744231245/business-team_fvitlc.jpg"
            alt="Amsha Advisory Team"
            fill
            className="object-cover brightness-[0.45]"
            priority
          />
        </div>
        <div className="container relative z-10 max-w-5xl mx-auto">
          <ScrollReveal>
            <h1 className="heading-xl md:text-6xl text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">About Us</h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto">
            we believe that people are the driving force behind every successful business. Founded with the vision to provide strategic, people-focused solutions, we help organizations unlock their full potential by addressing HR challenges and fostering a positive, growth-oriented workplace culture.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Expertise Overview Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="heading-md text-[#6EA1C3] md:text-5xl drop-shadow-[0_0_10px_rgba(110,161,195,0.7)] mb-6">Our Expertise</h2>
              <p className="paragraph text-gray-700 mb-8">
              Our expertise spans
a wide range of services
from HR consultancy and employee development to career guidance and upskilling programs. By bridging the gaps in traditional HR practices, we deliver innovative, purpose-driven solutions that empower businesses to enhance operational efficiency, drive sustainable growth, and achieve long-term success.
              </p>
              <Link href="/services">
                <Button className="bg-amsha-blue hover:bg-amsha-blue-dark text-white px-8 py-2">
                  Learn More
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dnqcj9kh3/image/upload/v1744232099/i_vgnjlp.webp"
                  alt="Our mission"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <h2 className="heading-lg -mt-6 text-amsha-dark mb-6">Our Mission</h2>
              <p className="paragraph text-gray-700 mb-6">

                At Amsha Advisory, our mission is to empower organizations by providing strategic guidance and practical solutions that drive sustainable growth and excellence. We are committed to understanding the unique challenges of each client and delivering tailored consulting services that create lasting value.
              </p>
              <p className="paragraph text-gray-700 mb-8">
                We believe in building long-term partnerships with our clients, working collaboratively to achieve their goals and helping them navigate the complexities of today's business environment with confidence and clarity.
              </p>
              <Link href="/services">
                <Button className="bg-amsha-blue hover:bg-amsha-blue-dark text-white">
                  Explore Our Services
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 bg-amsha-dark text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <h2 className="heading-lg mb-6">Our Vision</h2>
              <p className="paragraph mb-6">
                We envision a business world where organizations are empowered to reach their full potential through innovative strategies, effective leadership, and sustainable practices. Our vision is to be recognized as the trusted advisor that transforms businesses and drives positive change.
              </p>
              <p className="paragraph mb-8">
                By combining industry expertise with forward-thinking approaches, we aim to set new standards of excellence in business consulting and create meaningful impact for our clients, their stakeholders, and the communities they serve.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dnqcj9kh3/image/upload/v1744232106/maxresdefault_gjhnoj.jpg"
                  alt="Our vision"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="heading-md text-[#6EA1C3] md:text-5xl drop-shadow-[0_0_10px_rgba(110,161,195,0.7)] mb-6">We Take Pride</h2>
              <p className="paragraph text-gray-700 mb-8">
                We take pride in offering tailored, flexible services that meet the unique needs of each client, whether they are startups, small to medium-sized enterprises, or larger organizations. With a commitment to excellence and a focus on sustainable outcomes, our team of experts works alongside you to navigate complex people-related challenges and create lasting impact.
              </p>
              <Link href="/contact">
                <Button className="bg-amsha-blue hover:bg-amsha-blue-dark text-white px-8 py-2">
                  Improve Yourself With Us
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="heading-lg text-amsha-dark mb-4">Our Core Values</h2>
              <p className="paragraph text-gray-700 max-w-3xl mx-auto">
                These principles guide everything we do and define our approach to working with clients and each other.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 100}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={value.icon}
                      alt={value.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-amsha-blue mb-3">{value.title}</h3>
                    <p className="text-gray-700">{value.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

   

      {/* Our Journey Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="heading-lg text-amsha-dark mb-4">Our Journey</h2>
              <p className="paragraph text-gray-700 max-w-3xl mx-auto">
                Discover how we've grown and evolved over the years to become a leading consulting firm.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amsha-blue"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <ScrollReveal key={milestone.year} delay={index * 100}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                    <div className="w-5/12"></div>
                    <div className="w-2/12 flex justify-center">
                      <div className="bg-amsha-blue text-white rounded-full h-12 w-12 flex items-center justify-center z-10">
                        {milestone.year}
                      </div>
                    </div>
                    <div className="w-5/12 bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold text-amsha-blue mb-2">{milestone.title}</h3>
                      <p className="text-gray-700">{milestone.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
   {/* Our Team Section */}
   <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="heading-lg text-amsha-dark mb-4">Our Leadership Team</h2>
              <p className="paragraph text-gray-700 max-w-3xl mx-auto">
                Meet the experienced professionals who lead our consulting practice and drive our commitment to excellence.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 100}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-amsha-dark mb-1">{member.name}</h3>
                    <p className="text-amsha-blue font-medium mb-3">{member.role}</p>
                    <p className="text-gray-700 text-sm">{member.bio}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
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
