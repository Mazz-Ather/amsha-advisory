"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface DynamicHeadingItem {
  heading: string;
  paragraph: string;
}

interface DynamicHeadingsProps {
  items: DynamicHeadingItem[];
  interval?: number;
  className?: string;
}

export default function DynamicHeadings({
  items,
  interval = 4000,
  className,
}: DynamicHeadingsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  return (
    <div className={cn("h-[180px] flex flex-col justify-center", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h3 className="text-amsha-blue heading-md">{items[currentIndex].heading}</h3>
          <p className="text-gray-700 paragraph max-w-md">
            {items[currentIndex].paragraph}
          </p>
        </motion.div>
      </AnimatePresence>
      <div className="flex mt-8 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentIndex
                ? "bg-amsha-blue scale-110"
                : "bg-gray-300 hover:bg-gray-400"
            )}
            aria-label={`View item ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
