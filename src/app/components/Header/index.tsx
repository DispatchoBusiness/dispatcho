"use client";

import { Link, useLocation } from 'react-router-dom';
import React from "react";
import { useState } from 'react';

// The Contact component receives props and renders them
export default function Header() {
    const location = useLocation();  // Get the current location (URL path)
    const isActive = (path: string) => location.pathname === path;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="px-10 relative flex justify-between items-center">
            {/* Left side: Image area */}
            <div
                className="flex-1 bg-cover bg-center h-32"
                style={{ backgroundImage: "url('your-image-url-here.jpg')" }}
            >
                {/* Optional image */}
                {/* <img src="your-image-url-here.jpg" alt="Banner" className="w-full h-full object-cover" /> */}
            </div>

            {/* Right side: Links */}
            <div className="relative">
                {/* Hamburger button for mobile */}
                <button
                    className="block md:hidden p-2 rounded border border-gray-300 w-11"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="block w-6 h-0.5 bg-black mb-1"></span>
                    <span className="block w-6 h-0.5 bg-black mb-1"></span>
                    <span className="block w-6 h-0.5 bg-black"></span>
                </button>

                {/* Links - dropdown for mobile, horizontal for desktop */}
                <div
                    className={`${isOpen ? "block" : "hidden"
                        } absolute right-0 top-12 bg-white shadow-lg rounded-md p-4 md:static md:flex md:gap-4 md:bg-transparent md:shadow-none`}
                >
                    <ul className="flex flex-col items-start md:flex-row md:items-center md:gap-4 md:justify-end">
                        <li>
                            <Link
                                to="/"
                                className={
                                    isActive("/")
                                        ? "text-green-500 font-bold"
                                        : "text-green-800"
                                }
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className={
                                    isActive("/about")
                                        ? "text-green-500 font-bold"
                                        : "text-green-800"
                                }
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/pricing"
                                className={
                                    isActive("/pricing")
                                        ? "text-green-500 font-bold"
                                        : "text-green-800"
                                }
                            >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/login"
                                className={
                                    isActive("/login")
                                        ? "text-green-500 font-bold"
                                        : "text-green-800"
                                }
                            >
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};