"use client";

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import ScrollReveal from './scroll-reveal';

interface CertificateBoxProps {
  title: string;
  description: string;
  imageSrc: string;
  className?: string;
  revealDirection?: "left" | "right";
}

export default function CertificateBox({
  title,
  description,
  imageSrc,
  className,
  revealDirection = "left",
}: CertificateBoxProps) {
  return (
    <ScrollReveal direction={revealDirection}>
      <Card
        className={cn(
          "overflow-hidden border-2 border-gray-100 transition-all duration-300 flex flex-col md:flex-row",
          className
        )}
      >
        {/* Certificate Image */}
        <div className="relative h-[180px] md:h-auto md:w-2/5">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-contain p-4"
          />
        </div>

        {/* Certificate Content */}
        <CardContent className="flex-1 p-6 space-y-4 flex flex-col justify-center">
          <h3 className="heading-sm text-amsha-blue">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </CardContent>
      </Card>
    </ScrollReveal>
  );
}
