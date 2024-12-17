"use client";

import usePreBannerData from '../../database/components/usePreBannerData';
import React from "react";
import { FaLinkedin, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";


// Define types for the props
type PreBannerProps = {
  message: string;
  created_at: Date;
};

// The Contact component receives props and renders them
const PreBanner = ({ message }: PreBannerProps) => {

  const { preBanner, loading, error } = usePreBannerData();

  // Handle loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // If contact is available, render it
  if (preBanner) {
    const { message } = preBanner;
    return (
      <div className="flex justify-between items-center gap-4 p-4 bg-gray-100 dark:bg-gray-900" >
        <div className="flex-1">{message}</div>
        <ul className="flex gap-4">
          <li><FaLinkedin /></li>
          <li><FaFacebookSquare /></li>
          <li><FaTwitterSquare /></li>
          <li><FaInstagramSquare /></li>
        </ul>
      </div>
    );
  }

  return <div>No pre-banner data found.</div>;
};

export default PreBanner;