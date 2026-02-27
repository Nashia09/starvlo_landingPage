"use client"
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconStar, IconBuildingStore } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  role?: string;
  company?: string;
  content: string;
  avatar?: string;
  rating: number;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  autoplaySpeed?: number;
  className?: string;
}

export function TestimonialSlider({ 
  testimonials, 
  autoplaySpeed = 5000, 
  className 
}: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setTimeout(nextTestimonial, autoplaySpeed);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentIndex, isPaused, autoplaySpeed]);

  return (
    <div 
      className={cn("relative p-6 bg-slate-900 rounded-xl overflow-hidden", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-4"
        >
          <div className="flex text-amber-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <IconStar 
                key={i}
                fill={i < testimonials[currentIndex].rating ? "currentColor" : "none"}
                className={cn(
                  "w-5 h-5", 
                  i < testimonials[currentIndex].rating ? "text-amber-500" : "text-gray-300"
                )}
              />
            ))}
          </div>
          
          <p className="text-xl font-semibold text-white mb-4">
            {testimonials[currentIndex].content}
          </p>
          
          <div className="flex items-center">
            {testimonials[currentIndex].avatar ? (
              <img 
                src={testimonials[currentIndex].avatar} 
                alt={testimonials[currentIndex].name}
                className="w-10 h-10 rounded-full mr-3" 
              />
            ) : (
              <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-medium">
                  {testimonials[currentIndex].name.charAt(0)}
                </span>
              </div>
            )}
            
            <div>
              <p className="font-medium text-white">{testimonials[currentIndex].name}</p>
              {(testimonials[currentIndex].role || testimonials[currentIndex].company) && (
                <div className="flex items-center text-slate-400 text-sm">
                  {testimonials[currentIndex].role && (
                    <span>{testimonials[currentIndex].role}</span>
                  )}
                  {testimonials[currentIndex].role && testimonials[currentIndex].company && (
                    <span className="mx-1">·</span>
                  )}
                  {testimonials[currentIndex].company && (
                    <div className="flex items-center">
                      <IconBuildingStore className="w-4 h-4 mr-1" />
                      <span>{testimonials[currentIndex].company}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-white w-4" : "bg-slate-600"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 