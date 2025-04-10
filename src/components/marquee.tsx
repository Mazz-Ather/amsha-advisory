"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps {
  text: string;
  className?: string;
  speed?: 'slow' | 'normal' | 'fast';
  direction?: 'left' | 'right';
  repeat?: number;
}

export default function Marquee({
  text,
  className,
  speed = 'normal',
  direction = 'left',
  repeat = 2,
}: MarqueeProps) {
  const speedClass = {
    slow: 'animate-marquee-slow',
    normal: 'animate-marquee',
    fast: 'animate-marquee-fast',
  };

  const directionClass = {
    left: direction === 'left' ? 'animate-marquee' : 'animate-marquee2',
    right: direction === 'right' ? 'animate-marquee2' : 'animate-marquee',
  };

  const animationClass = direction === 'left'
    ? speedClass[speed]
    : `${speedClass[speed].replace('marquee', 'marquee2')}`;

  const secondAnimationClass = direction === 'left'
    ? `${speedClass[speed].replace('marquee', 'marquee2')}`
    : speedClass[speed];

  const repeatedText = Array(repeat).fill(text).join(' • ');

  return (
    <div className={cn('marquee-container overflow-hidden whitespace-nowrap', className)}>
      <div className={cn('inline-block', animationClass)}>
        <span className="double-line-heading">{repeatedText}</span>
      </div>
      <div className={cn('inline-block', secondAnimationClass)}>
        <span className="double-line-heading">{repeatedText}</span>
      </div>
    </div>
  );
}
