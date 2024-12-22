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
  const { testimonial, loading, error } = useTestimonialData();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (testimonial) {
      console.log(testimonial);
    }
  }, [testimonial]);

  // Handle loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!testimonial) {
    return <div>No testimonial data found.</div>;
  }

  const isArray = Array.isArray(testimonial);

  return (
    <div className="w-full">
      <div className="flex gap-4 bg-gray-500 justify-center pt-8 pb-8">
        <div className="relative overflow-hidden w-full px-40">
          <div
            className="flex transition-all duration-1000 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {/* If testimonial is an array, we map over it */}
            {isArray
              ? testimonial.map((test, idx) => (
                <div className="flex items-center gap-4 p-4" key={idx}>
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
                <div className="flex items-center gap-4 p-4">
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
        </div>
      </div>
    </div>
  );
}

export default Testimonial;