"use client";

import { Link } from 'react-router-dom';
import React from "react";

// The Contact component receives props and renders them
export default function Header() {
    return (
        <div className="flex justify-between items-center gap-4 p-4 bg-gray-100 dark:bg-gray-900">
            {/* Left side: Image area */}
            <div className="flex-1"
                style={{ backgroundImage: "url('your-image-url-here.jpg')" }}>
                {/* You can add an image directly if needed */}
                {/* <img src="your-image-url-here.jpg" alt="Banner" className="w-full h-full object-cover" /> */}
            </div>

            {/* Right side: Content (links, heading, button) */}
            <div className="flex gap-4">
                <ul className="flex gap-4">
                    <li><Link to="/" className="text-blue-500 hover:underline">Home</Link></li>
                    <li><Link to="/about" className="text-blue-500 hover:underline">About</Link></li>
                    <li className="text-blue-500 hover:underline">Pricing</li>
                    <li className="text-blue-500 hover:underline">Login</li>
                </ul>
            </div>
        </div>
    );
};