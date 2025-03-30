"use client";

import useTestimonialData from "../../database/components/useTestimonialData";
import React, { useEffect, useState } from "react";
import styles from './Testimonial.module.css'

type TestimonialDataProps = {
  img_url: string;
  message: string;
  name?: string;
  role?: string;
};

const Testimonial = () => {
  const { testimonials, loading, error } = useTestimonialData();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    if (testimonials?.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) =>
          prev === testimonials.length - 1 ? 0 : prev + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [testimonials]);

  if (loading) return <div className="text-center py-12">Loading testimonials...</div>;
  if (error) return <div className="text-center py-12 text-red-500">Error: {error}</div>;
  if (!testimonials?.length) return <div className="text-center py-12">No testimonials available</div>;

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="w-full bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">What Our Clients Say</h2>

        <div className="bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row items-center gap-8">
          {/* Testimonial Image */}
          <div className="flex-shrink-0">
            <img
              src={currentTestimonial.img_url}
              alt={"Client"}
              width={120}
              height={120}
              className="rounded-full object-cover aspect-square"
            />
          </div>

          {/* Testimonial Content */}
          <div className="text-center md:text-left">
            <blockquote className="text-lg italic text-gray-700 mb-4">
              "{currentTestimonial.message}"
            </blockquote>
          </div>
        </div>

        {/* Navigation Dots */}
        {testimonials.length > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${idx === currentIndex ? `${styles.barColor}` : 'bg-gray-300'}`}
                aria-label={`View testimonial ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonial;