"use client";

import { Link, useLocation } from 'react-router-dom';
import React from "react";

// The Contact component receives props and renders them
export default function Header() {
    const location = useLocation();  // Get the current location (URL path)
    const isActive = (path: string) => location.pathname === path;
    return (
        <div className="flex justify-between items-center gap-4 p-4">
            {/* Left side: Image area */}
            <div className="flex-1"
                style={{ backgroundImage: "url('your-image-url-here.jpg')" }}>
                {/* You can add an image directly if needed */}
                {/* <img src="your-image-url-here.jpg" alt="Banner" className="w-full h-full object-cover" /> */}
            </div>

            {/* Right side: Content (links, heading, button) */}
            <div className="flex gap-4">
                <ul className="flex gap-4">
                    <li><Link to="/" className={isActive("/") ? "text-green-500 font-bold" : "text-green-800"}>Home</Link></li>
                    <li><Link to="/about" className={isActive("/about") ? "text-green-500 font-bold" : "text-green-800"}>About</Link></li>
                    <li><Link to="/pricing" className={isActive("/pricing") ? "text-green-500 font-bold" : "text-green-800"}>Pricing</Link></li>
                    <li><Link to="/login" className={isActive("/login") ? "text-green-500 font-bold" : "text-green-800"}>Login</Link></li>
                </ul>
            </div>
        </div>
    );
};