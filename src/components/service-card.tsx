"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  slug: string;
  reversed?: boolean;
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  imageSrc,
  slug,
  reversed = false,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "service-card py-16 md:py-24 flex flex-col md:flex-row md:items-center gap-8 md:gap-12",
        reversed ? "md:flex-row-reverse" : "",
        className
      )}
    >
      {/* Text Content */}
      <div className="flex-1 space-y-6">
        <h3 className="heading-md text-amsha-blue">{title}</h3>
        <p className="paragraph text-gray-700">{description}</p>
        <Link href={`/services/${slug}`}>
          <Button
            variant="ghost"
            className="group px-0 hover:bg-transparent"
          >
            <span className="text-amsha-blue">Learn More</span>
            <ArrowRight className="ml-2 h-4 w-4 text-amsha-blue transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>

      {/* Image */}
      <div className="relative flex-1 h-[300px] md:h-[400px] rounded-lg overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
