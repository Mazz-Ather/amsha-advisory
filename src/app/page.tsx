"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SiteLayout from "@/components/site-layout";
import ScrollReveal from "@/components/scroll-reveal";
import Marquee from "@/components/marquee";
import DynamicHeadings from "@/components/dynamic-headings";
import ServiceCard from "@/components/service-card";
import FeatureBox from "@/components/feature-box";
import CertificateBox from "@/components/certificate-box";
import NewsletterSignup from "@/components/newsletter-signup";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";


export default function Home() {
  const dynamicHeadingItems = [
    {
      heading: "Innovation",
      paragraph: "Delivering modern , tailored solutions through the use of new strategies and tools that meet the unique needs of each client.",
    },
    {
      heading: "People-Centric",
      paragraph: "Proritize the individual behind the roles , fostering and environment where personal and organizational growth go hand in hand . Business are encouraged to invest in the continuous development of thier poeple",
    },
    {
      heading: "Sustainability",
      paragraph: "Creating long term solutions that addresses immediate business challenges while ensuring lasting impact on people strategies",
    },
  ];

  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container relative z-10 max-w-6xl mx-auto py-5 ">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 -mt-11 text-center">
              <span className="block">
                <span className="text-[#6EA1C3]">Empowering</span>
                <span className="text-black"> People Elevating</span>
              </span>
              <span className="block mt-2">
                <span className="text-[#6EA1C3]">Businesses</span>
              </span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl text-black/90 mb-8 max-w-3xl mx-auto text-center">
              Amsha Advisory delivers strategic, people-centric solutions that enhance business efficiency, drive growth, and foster positive workplace cultures. We bridge traditional HR gaps with innovative approaches for long-term success.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about">
                <Button className="bg-[#6EA1C3] hover:bg-[#5A8DAF] text-white px-8 py-3 rounded-md text-lg transition-all duration-300">
                  Learn more
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="bg-gray-200 text-[#2D3142] border-gray-300 hover:bg-gray-300 px-8 py-3 rounded-md text-lg transition-all duration-300">
                  Contact Us
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Double Line Marquee Section */}
      <section className="py-16 bg-[#2F3340] overflow-hidden">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-6xl font-bold text-white">
            Considering <span className="text-[#6EA1C3] drop-shadow-[0_0_10px_rgba(110,161,195,0.7)]">Amsha Advisory</span>?
          </h2>
          <p className="text-2xl md:text-3xl text-white mt-2">You're in good company.</p>
        </div>
        
        {/* First row - right to left */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="flex animate-marquee-rtl whitespace-nowrap" style={{ animationDuration: '30s' }}>
            {Array(4).fill(0).map((_, setIndex) => (
              [
                "https://res.cloudinary.com/dnqcj9kh3/image/upload/v1744215326/6_actqzq.webp",
                "https://res.cloudinary.com/dnqcj9kh3/image/upload/v1744215325/4_z7exf7.webp",
                "https://res.cloudinary.com/dnqcj9kh3/image/upload/v1744215325/3_nycxui.webp",
                "https://res.cloudinary.com/dnqcj9kh3/image/upload/v1744215325/1_knzpfg.webp"
              ].map((src, index) => (
                <div key={`client-logo-1-${setIndex}-${index}`} className="mx-2 flex-shrink-0">
                  <div className="w-40 h-20 bg-white/90 rounded-lg flex items-center justify-center p-2 shadow-md">
                    <Image 
                      src={src}
                      alt={`Client logo ${index + 1}`}
                      width={150}
                      height={75}
                      className="object-contain"
                    />
                  </div>
                </div>
              ))
            ))}
          </div>
        </div>
        
        {/* Second row - left to right (starting from center) */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="flex animate-marquee-ltr-center whitespace-nowrap" style={{ animationDuration: '30s' }}>
            {Array(4).fill(0).map((_, setIndex) => (
              [
                "https://res.cloudinary.com/dnqcj9kh3/image/upload/v1744215325/1_knzpfg.webp",
                "https://res.cloudinary.com/dnqcj9kh3/image/upload/v1744215325/3_nycxui.webp",
                "https://res.cloudinary.com/dnqcj9kh3/image/upload/v1744215325/4_z7exf7.webp",
                "https://res.cloudinary.com/dnqcj9kh3/image/upload/v1744215326/6_actqzq.webp"
              ].map((src, index) => (
                <div key={`client-logo-2-${setIndex}-${index}`} className="mx-2 flex-shrink-0">
                  <div className="w-40 h-20 bg-white/90 rounded-lg flex items-center justify-center p-2 shadow-md">
                    <Image 
                      src={src}
                      alt={`Client logo ${index + 1}`}
                      width={150}
                      height={75}
                      className="object-contain"
                    />
                  </div>
                </div>
              ))
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Clients Come to Us Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amsha-dark mb-4">
              Why Our <span className="text-amsha-blue">Clients</span> Come to Us
            </h2>
            <div className="w-24 h-1 bg-amsha-blue-light mx-auto mb-6"></div>
            {/* <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We combine industry expertise with innovative thinking to deliver exceptional results.
            </p> */}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <ScrollReveal direction="left">
                <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-amsha-blue">
                  <p className="paragraph text-gray-700 mb-8 leading-relaxed">
                    At Amsha Advisory, we combine industry expertise with innovative thinking to provide solutions
                    that drive real business results. Our team of experienced consultants work closely with you to
                    understand your unique challenges and develop customized strategies that align with your vision.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-amsha-blue flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="font-medium text-amsha-dark">Proven track record of success across industries</p>
                  </div>
                  <Link href="/about">
                    <Button className="mt-8 bg-amsha-blue hover:bg-amsha-blue-dark text-white px-8 py-4 rounded-md text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(0,86,179,0.5)] relative overflow-hidden group">
                      <span className="relative z-10">Learn More About Us</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-amsha-blue to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="bg-white rounded-xl shadow-lg p-6">
                {dynamicHeadingItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="mb-8 last:mb-0 transform transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-amsha-blue-light/20 flex items-center justify-center mr-4">
                        <span className="text-amsha-blue-dark font-bold">{index + 1}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-amsha-blue">{item.heading}</h3>
                    </div>
                    <p className="text-gray-700 pl-14">{item.paragraph}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-11 bg-gray-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="heading-lg md:text-5xl text-amsha-dark mb-4">Our Services</h2>
              <p className="paragraph md:text-xl text-gray-900 max-w-3xl mx-auto">
              Tailored people solutions designed to empower your business
              <br />
               and drive sustainable success.
               </p>
            </div>
          </ScrollReveal>

          <div className="space-y-8 md:space-y-0 md:divide-y">
            {services.slice(0, 3).map((service, index) => (
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

          <div className="mt-16 text-center">
            <Link href="/services">
              <Button className="bg-amsha-blue hover:bg-amsha-blue-dark text-white px-8 py-4 rounded-md text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(110,161,195,0.5)] relative overflow-hidden group">
                <span className="relative z-10">View All Services</span>
                <span className="absolute inset-0 bg-gradient-to-r from-amsha-blue to-[#6EA1C3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Amsha Advisory Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-amsha-dark mb-4">
                Why Choose <span className="text-[#6EA1C3] drop-shadow-[0_0_10px_rgba(110,161,195,0.7)]">Amsha Advisory</span>?
              </h2>
              <div className="w-24 h-1 bg-amsha-blue-light mx-auto mb-6"></div>
              <p className="paragraph text-gray-700 max-w-3xl mx-auto">
                We're committed to delivering exceptional value and measurable results
                through our unique approach to business consulting.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px] group h-full">
                <div className="h-48 relative overflow-hidden">
                  <Image 
                    src="https://res.cloudinary.com/dnqcj9kh3/image/upload/v1744227899/w1_p7aqzm.webp"
                    alt="Industry Expertise"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 brightness-[0.85]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-[#6EA1C3] text-white px-3 py-1 rounded-full text-sm font-semibold">Expert Team</span>
                  </div>
                </div>
                <div className="p-6 border-t-4 border-[#6EA1C3]">
                  <h3 className="text-2xl font-bold text-amsha-dark mb-3">Purpose-Driven Solutions</h3>
                  <p className="text-gray-700 mb-4">
                  We believe every organization and individual has a purpose, and is an important part of the organization. Our role is to help you align your people strategies with your core purpose, ensuring productivity. </p>
                  <div className="mt-auto pt-2 flex items-center text-amsha-blue font-medium group-hover:text-[#6EA1C3] transition-colors duration-300">
                    {/* <span>Learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg> */}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px] group h-full">
                <div className="h-48 relative overflow-hidden">
                  <Image 
                    src="https://res.cloudinary.com/dnqcj9kh3/image/upload/v1744228112/w5_yul9nm.jpg"
                    alt="Tailored Solutions"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 brightness-[0.85]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-[#6EA1C3] text-white px-3 py-1 rounded-full text-sm font-semibold">Customized Approach</span>
                  </div>
                </div>
                <div className="p-6 border-t-4 border-[#6EA1C3]">
                  <h3 className="text-2xl font-bold text-amsha-dark mb-3">Empowered Growth</h3>
                  <p className="text-gray-700 mb-4">
                  We empower organizations and individuals to unlock their full potential through strategic guidance, training, and development opportunities tailored to drive long-term success.
                  </p>
                  <div className="mt-auto pt-2 flex items-center text-amsha-blue font-medium group-hover:text-[#00ffff] transition-colors duration-300">
                    {/* <span>Learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg> */}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px] group h-full">
                <div className="h-48 relative overflow-hidden">
                  <Image 
                    src="https://res.cloudinary.com/dnqcj9kh3/image/upload/v1744227899/w3_tjeyov.webp"
                    alt="Measurable Results"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 brightness-[0.85]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-[#6EA1C3] text-white px-3 py-1 rounded-full text-sm font-semibold">Data-Driven</span>
                  </div>
                </div>
                <div className="p-6 border-t-4 border-[#6EA1C3]">
                  <h3 className="text-2xl font-bold text-amsha-dark mb-3">Strategic Partnership</h3>
                  <p className="text-gray-700 mb-4">
                  We don’t just offer advice; we become strategic partners in your journey, aligning with your vision and creating solutions that drive both people and business growth. </p>
                  <div className="mt-auto pt-2 flex items-center text-amsha-blue font-medium group-hover:text-[#00ffff] transition-colors duration-300">
                    {/* <span>Learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg> */}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-amsha-dark mb-4">
                Our <span className="text-[#6EA1C3] drop-shadow-[0_0_10px_rgba(110,161,195,0.7)]">Certifications</span>
              </h2>
              <div className="w-24 h-1 bg-[#6EA1C3]/50 mx-auto mb-6"></div>
              <p className="paragraph text-gray-700 max-w-3xl mx-auto">
                We maintain the highest professional standards with industry-recognized certifications.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl group">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="md:col-span-1 relative h-64 md:h-full">
                    <Image 
                      src="https://res.cloudinary.com/dnqcj9kh3/image/upload/v1744228904/c3_jpempb.webp"
                      alt="ISO 9001:2015 Certified"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105 brightness-[0.9]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent md:bg-gradient-to-l"></div>
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-[#6EA1C3] text-white px-3 py-1 rounded-full text-sm font-semibold">Quality Management</span>
                    </div>
                  </div>
                  <div className="md:col-span-2 p-8 flex flex-col justify-center">
                    <ScrollReveal direction="right">
                      <h3 className="text-3xl font-bold text-amsha-dark mb-4 border-l-4 border-[#6EA1C3] pl-4">Facet5</h3>
                      <div className="prose prose-lg max-w-none text-gray-700">
                        <p className="mb-4">
                        A personality assessment tool that provides detailed insights into individual traits and work preferences, helping businesses optimize staff selection and development by aligning roles with employees' strengths and improving team collaboration.
                        </p>
                        {/* <ul className="space-y-2 mb-4">
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#6EA1C3] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Consistent delivery of high-quality consulting services</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#6EA1C3] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Continuous improvement of our processes and methodologies</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#6EA1C3] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Meeting and exceeding client expectations through standardized approaches</span>
                          </li>
                        </ul> */}
                      </div>
                      {/* <div className="mt-4 flex items-center text-amsha-blue font-medium group-hover:text-[#6EA1C3] transition-colors duration-300">
                        <span>Learn more about our quality standards</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div> */}
                    </ScrollReveal>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl group">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="md:col-span-1 order-1 md:order-2 relative h-64 md:h-full">
                    <Image 
                      src="https://res.cloudinary.com/dnqcj9kh3/image/upload/v1744228905/c5_dajony.webp"
                      alt="International Coaching Federation (ICF)"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105 brightness-[0.9]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent md:bg-gradient-to-r"></div>
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-[#6EA1C3] text-white px-3 py-1 rounded-full text-sm font-semibold">Professional Coaching</span>
                    </div>
                  </div>
                  <div className="md:col-span-2 order-2 md:order-1 p-8 flex flex-col justify-center">
                    <ScrollReveal direction="left">
                      <h3 className="text-3xl font-bold text-amsha-dark mb-4 border-l-4 border-[#6EA1C3] pl-4">MBTI (Myers-Briggs Type Indicator)</h3>
                      <div className="prose prose-lg max-w-none text-gray-700">
                        <p className="mb-4">
                        A personality assessment that categorizes individuals into 16 distinct personality types, aiding businesses in improving team dynamics, communication, and leadership by understanding and leveraging each person's unique preferences and strengths.

</p>
                        {/* <ul className="space-y-2 mb-4">
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#6EA1C3] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Adherence to the highest ethical and professional standards in coaching</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#6EA1C3] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Implementation of proven coaching methodologies that drive personal and organizational growth</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#6EA1C3] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Continuous professional development to stay at the forefront of coaching practices</span>
                          </li>
                        </ul> */}
                      </div>
                      {/* <div className="mt-4 flex items-center text-amsha-blue font-medium group-hover:text-[#6EA1C3] transition-colors duration-300">
                        <span>Learn more about our coaching expertise</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div> */}
                    </ScrollReveal>
                  </div>
                </div>
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
