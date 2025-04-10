"use client";

import type React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface NewsletterSignupProps {
  className?: string;
}

export default function NewsletterSignup({ className }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset error
    setError('');

    // Basic validation
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Simulating form submission
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      toast.success('Thank you for subscribing to our newsletter!');
    }, 1000);
  };

  return (
    <Card className={cn("border-none shadow-xl bg-gradient-to-br from-[#1a2030] to-[#2F3340] rounded-2xl overflow-hidden", className)}>
      <CardContent className="p-0">
        <div className="relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ffff]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amsha-blue/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-5"></div>
          
          <div className="relative p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with Our <span className="text-[#6EA1C3] drop-shadow-[0_0_5px_rgba(110,161,195,0.7)]">Latest Insights</span>
            </h2>
            <div className="w-24 h-1 bg-[#6EA1C3]/50 mx-auto mb-6"></div>
            <p className="text-gray-300 mb-8 text-lg">
              Subscribe to our newsletter to receive the latest business insights, industry trends, and expert advice.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={cn(
                      "h-12 px-4 w-full bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white placeholder:text-gray-400 focus-visible:ring-[#00ffff]/30 focus-visible:border-[#00ffff] transition-all",
                      error ? "border-red-500 focus-visible:ring-red-500" : ""
                    )}
                    aria-invalid={!!error}
                    aria-describedby={error ? "email-error" : undefined}
                  />
                  {error && (
                    <p id="email-error" className="text-red-300 text-sm mt-1 absolute">
                      {error}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="bg-[#6EA1C3] hover:bg-[#6EA1C3]/90 text-white font-medium px-8 py-4 h-12 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(110,161,195,0.5)] relative overflow-hidden"
                  disabled={isSubmitting}
                >
                  <span className="relative z-10">{isSubmitting ? "Subscribing..." : "Subscribe"}</span>
                </Button>
              </div>
            </form>

            <p className="text-sm text-gray-400 mt-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#6EA1C3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
