"use client";

import useTestimonialData from "../../database/components/useTestimonialData";
import React, { useEffect, useState } from "react";

// Define types for the props
type TestimonialDataProps = {
  img_url: string;
  message: string;
};

// The Contact component receives props and renders them
const Testimonial = () => {
  const { testimonials, loading, error } = useTestimonialData();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (testimonials) {
      console.log(testimonials);
    }
  }, [testimonials]);

  // Auto scroll testimonials
  useEffect(() => {
    if (testimonials && Array.isArray(testimonials)) {
      const interval = setInterval(() => {
        setIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change testimonial every 5 seconds

      return () => clearInterval(interval);
    }
  }, [testimonials]);

  // Handle loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!testimonials) {
    return <div>No testimonial data found.</div>;
  }

  const isArray = Array.isArray(testimonials);

  return (
    <div className="w-full flex justify-center bg-gray-500 pt-8 pb-8">
      <div className="relative w-[400px] h-[300px] flex justify-center items-center overflow-hidden">
        {testimonials.map((test, idx) => (
          <div key={idx} className={`absolute flex flex-col items-center gap-4 p-4 transition-opacity duration-1000 ${idx === index ? "opacity-100" : "opacity-0"
            }`}>
            <img
              src={test.img_url}
              alt="Testimonial"
              width={80}
              height={80}
              className="rounded-full"
            />
            <div className="text-white text-center">{test.message}</div>
    <div className="w-full">
      <div className="flex gap-4 bg-gray-500 justify-center pt-8 pb-8">
        <div className="relative overflow-hidden w-full px-0 md:px-40">
          <div
            className="flex transition-all duration-1000 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {/* If testimonial is an array, we map over it */}
            {isArray
              ? testimonial.map((test, idx) => (
                <div className="w-full flex justify-center gap-4 p-4" key={idx}>
                  <img
                    src={test.img_url}
                    alt="Testimonial"
                    width={40}
                    className="rounded-full"
                  />
                  <div className="text-white">{test.message}</div>
                </div>
              ))
              : // Otherwise, show the single testimonial if it's not an array
              testimonial && (
                <div className="w-full max-w-4xl flex justify-center gap-4 p-4">
                  <img
                    src={testimonial.img_url}
                    alt="Testimonial"
                    width={40}
                    className="rounded-full"
                  />
                  <div className="text-white">{testimonial.message}</div>
                </div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Testimonial;