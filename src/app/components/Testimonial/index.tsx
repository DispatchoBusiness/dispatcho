"use client";

import useTestimonialData from "../../database/components/useTestimonialData";
import React from "react";

// Define types for the props
type TestimonialDataProps = {
  image_link: string;
  message: string;
  created_at: Date;
};

// The Contact component receives props and renders them
const Testimonial = ({ image_link, message }: TestimonialDataProps) => {

  const { testimonial, loading, error } = useTestimonialData();

  // Handle loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // If contact is available, render it
  if (testimonial) {
    const { image_link, message } = testimonial;
    return (
      <div className="flex flex-col gap-4 p-4 bg-gray-100 dark:bg-gray-900" >
        <img src={image_link} alt="" />
        <div>{message}</div>
      </div>
    );
  }

  return <div>No testimonial data found.</div>;
};

export default Testimonial;