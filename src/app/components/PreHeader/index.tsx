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
      <div className="flex justify-between items-center gap-4 p-4 bg-gray-100 dark:bg-gray-900" style={{ backgroundColor: 'var(--preHeader)', color: 'var(--preHeaderText)' }}>
        <div className="flex-1">{message}</div>
        <ul className="flex gap-4">
          <li className="cursor-pointer"><FaLinkedin /></li>
          <li className="cursor-pointer"><FaFacebookSquare /></li>
          <li className="cursor-pointer"><FaTwitterSquare /></li>
          <li className="cursor-pointer"><FaInstagramSquare /></li>
        </ul>
      </div>
    );
  }

  // <div className="w-full">
  //           <div className="flex gap-4 justify-center pt-4" style={{ backgroundColor: 'var(--postFooter)', color: 'var(--postFooterText)' }}>
  //               <div className="text-sm text-white">copywrite 2025</div>
  //           </div>
  //           <div className="flex gap-4 justify-center " style={{ backgroundColor: 'var(--postFooter)', color: 'var(--postFooterText)' }}>
  //               <div className="text-sm">Terms of Use | Privacy Policy</div>
  //           </div>
  //           <ul className="flex gap-4  justify-center pt-4 pb-4" style={{ backgroundColor: 'var(--postFooter)', color: 'var(--postFooterText)' }}>
  //               <li><FaLinkedin /></li>
  //               <li><FaFacebookSquare /></li>
  //               <li><FaTwitterSquare /></li>
  //               <li><FaInstagramSquare /></li>
  //           </ul>
  //       </div>

  return <div>No pre-banner data found.</div>;
};

export default PreBanner;