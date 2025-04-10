"use client";

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface FeatureBoxProps {
  title: string;
  description: string;
  imageSrc: string;
  className?: string;
}

export default function FeatureBox({
  title,
  description,
  imageSrc,
  className,
}: FeatureBoxProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",
        className
      )}
    >
      <div className="relative h-[200px] w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-6 space-y-4">
        <h3 className="heading-sm text-amsha-blue">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </CardContent>
    </Card>
  );
}
